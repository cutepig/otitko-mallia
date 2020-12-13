import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Box, IconButton } from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Search,
  Settings,
} from "@material-ui/icons";
import { HorizontalContainer } from "app/ui/ux/Container";

export const SlideshowScreen: React.FC<RouteComponentProps> = () => (
  <Box
    className="SlideshowScreen"
    display="flex"
    flexDirection="column"
    position="relative"
    // Bad, this should be the responsibility of the container
    flexGrow="1"
  >
    {/* Placeholder for image */}
    <Box position="absolute" top="0" left="0" bottom="0" right="0"></Box>

    {/* Navigation */}

    <HorizontalContainer
      margin={0}
      padding={0}
      spacing={2}
      justifyContent="space-between"
    >
      <IconButton
        component={Link}
        to="/search"
        size="small"
        aria-label="Search"
      >
        <Search />
      </IconButton>
      <IconButton
        component={Link}
        to="/settings"
        size="small"
        aria-label="Settings"
      >
        <Settings />
      </IconButton>
    </HorizontalContainer>

    {/* Filler */}
    <Box flexGrow="1" />

    <HorizontalContainer spacing={2} justifyContent="space-evenly">
      <IconButton aria-label="Previous Image">
        <ChevronLeft fontSize="large" />
      </IconButton>
      <IconButton aria-label="Pause">
        <Pause fontSize="large" />
      </IconButton>
      <IconButton aria-label="Next Image">
        <ChevronRight fontSize="large" />
      </IconButton>
    </HorizontalContainer>
  </Box>
);
