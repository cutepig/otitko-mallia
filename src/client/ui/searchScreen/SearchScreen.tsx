import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Box, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Clear, KeyboardBackspace, Search } from "@material-ui/icons";
import { HorizontalContainer } from "client/ui/ux/Container";

export const SearchScreen: React.FC<RouteComponentProps> = () => (
  <Box className="SearchScreen">
    <HorizontalContainer spacing={1} alignItems="flex-end">
      <IconButton component={Link} to="/" size="small" aria-label="Back">
        <KeyboardBackspace />
      </IconButton>

      <TextField
        label="Search for"
        placeholder="Type something"
        type="search"
        id="SearchScreen/search"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" aria-label="Search">
                <Search />
              </IconButton>
              <IconButton size="small" aria-label="Clear">
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </HorizontalContainer>
  </Box>
);
