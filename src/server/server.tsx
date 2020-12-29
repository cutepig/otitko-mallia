import path from "path";
import querystring from "querystring";
import express from "express";
import fetch from "node-fetch";

if (!process.env.BING_API_KEY) {
  console.error("BING_API_KEY not set");
  process.exit(1);
}

const rootDir = path.join(process.cwd(), "build");

const app = express();

// Helpers

interface IImageSearchQuery {
  q: string;
  page?: number;
}

interface IImageSearchResultItem {
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  webSearchUrl: string;
  hostUrl: string;
}

interface IImageSearchResult {
  meta: {
    sourceUrl: string;
    webSearchUrl: string;
    query: IImageSearchQuery;
    totalResults: number;
    nextQuery?: IImageSearchQuery;
  };
  results: IImageSearchResultItem[];
}

async function bingImageSearch(query: IImageSearchQuery) {
  const { q, page } = query;

  const pageSize = 30;

  const qs = querystring.stringify({
    // NOTE: Doing some ugly casting here, would be better to ensure
    // that these parameters are not arrays
    q: q as string,
    count: pageSize,
    offset: (page || 0) * pageSize,
  });
  const url = `https://api.bing.microsoft.com/v7.0/images/search?${qs}`;
  const searchRes = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY!,
    },
  });
  const searchData = await searchRes.json();

  const result: IImageSearchResult = {
    meta: {
      sourceUrl: searchData.readLink,
      webSearchUrl: searchData.webSearchUrl,
      query,
      totalResults: searchData.totalEstimatedMatches,
      nextQuery: { ...query, page: (page || 0) + 1 },
    },
    results: searchData.value.map((result: any) => ({
      name: result.name,
      image: {
        url: result.contentUrl,
        width: result.width,
        height: result.height,
      },
      thumbnail: {
        url: result.thumbnailUrl,
        width: result.thumbnail.width,
        height: result.thumbnail.height,
      },
      webSearchUrl: result.webSearchUrl,
      hostUrl: result.hostUrl,
    })),
  };

  return result;
}

// API endpoints

app.get("/api/images", async (req, res) => {
  const { q, page } = req.query;
  if (!q) {
    return res.status(400);
  }

  try {
    const results = await bingImageSearch({
      q: q as string,
      page: parseInt(page as string) || 0,
    });
    res.json(results);
    res.status(200);
  } catch (error) {
    res.send("<h1>502 Bad Gateway</h1>");
    res.status(502);
  }
});

// Static delivery of assets
app.use(express.static(rootDir));

// Default SPA routing
app.use((_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"), (error) => {
    if (error) {
      res.send("<h1>404 Not Found</h1>");
      res.status(404);
    }
  });
});

// Node.js server setup
const server = app.listen(process.env.PORT || 3001, () => {
  const address = server.address();
  console.log(
    `Server started at ${
      address && typeof address === "object"
        ? `${address.address}:${address.port}`
        : address
    }`
  );
});
