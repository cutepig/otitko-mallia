import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import {
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  IconButton,
} from "@material-ui/core";
import { HorizontalContainer, VerticalContainer } from "app/ui/ux/Container";
import { KeyboardBackspace } from "@material-ui/icons";

export const SettingsScreen: React.FC<RouteComponentProps> = () => (
  <VerticalContainer className="SettingsScreen" spacing={3}>
    <HorizontalContainer spacing={1}>
      <IconButton component={Link} to="/" size="small" aria-label="Back">
        <KeyboardBackspace />
      </IconButton>
      <Typography variant="h6">Settings</Typography>
    </HorizontalContainer>

    <VerticalContainer spacing={2}>
      {/* https://material-ui.com/components/text-fields/ */}
      <TextField
        label="Slideshow speed"
        select
        // Yes in general I can't stand to see camelCase in HTML or CSS,
        // but this is for mostly semantic purposes and the format was
        // selected more by the convinience.
        id="SettingsScreen/slideshowSpeed"
        defaultValue="30"
      >
        <MenuItem value="30">30 seconds</MenuItem>
        <MenuItem value="60">1 minute</MenuItem>
        <MenuItem value="120">2 minutes</MenuItem>
        <MenuItem value="manual">Manual control</MenuItem>
      </TextField>

      <TextField
        label="Slideshow orientation"
        select
        id="SettingsScreen/slideshowOrientation"
        defaultValue="automatic"
      >
        <MenuItem value="portrait">Portrait</MenuItem>
        <MenuItem value="landscape">Landscape</MenuItem>
        <MenuItem selected value="automatic">
          Automatic
        </MenuItem>
      </TextField>

      <TextField
        label="Search provider"
        select
        id="SettingsScreen/searchProvider"
        defaultValue="google"
      >
        {/*
          NOTE: Would be nice to abstract the options to be type-safe towards given enum
        */}
        <MenuItem selected value="google">
          Google
        </MenuItem>
        <MenuItem value="bing">Bing</MenuItem>
        <MenuItem value="duckduckgo">DuckDuckGo</MenuItem>
      </TextField>

      <FormControlLabel
        control={
          <Checkbox defaultChecked={true} id="SettingsScreen/safeSearch" />
        }
        label="Safe Search"
      />

      <TextField
        label="Show timer"
        select
        id="SettingsScreen/timerPosition"
        defaultValue="hidden"
      >
        <MenuItem selected value="hidden">
          No
        </MenuItem>
        <MenuItem value="top-left">Top left</MenuItem>
        <MenuItem value="top-right">Top right</MenuItem>
        <MenuItem value="bottom-left">Bottom left</MenuItem>
        <MenuItem value="bottom-right">Bottom right</MenuItem>
      </TextField>

      <TextField
        label="Timer blink in"
        select
        id="SettingsScreen/timerBlinkTime"
        defaultValue="never"
      >
        <MenuItem value="never">Never</MenuItem>
        <MenuItem value="3">3 seconds</MenuItem>
        <MenuItem value="5">5 seconds</MenuItem>
        <MenuItem value="10">10 seconds</MenuItem>
      </TextField>
    </VerticalContainer>
  </VerticalContainer>
);
