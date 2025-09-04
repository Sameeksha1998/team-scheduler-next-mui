"use client";
import * as React from "react";
import { Box, Typography, Select, MenuItem, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function HeaderBar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
      <Button startIcon={<ArrowBackIosNewIcon />} size="small">November 2024</Button>
      <Box sx={{ flex: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Select size="small" value="1 hour">
          <MenuItem value="1 hour">1 hour</MenuItem>
          <MenuItem value="30 min">30 min</MenuItem>
        </Select>
        <Select size="small" value="Day">
          <MenuItem value="Day">Day</MenuItem>
          <MenuItem value="Week">Week</MenuItem>
        </Select>
        <Button variant="outlined" size="small"><ArrowBackIosNewIcon fontSize="small" /></Button>
        <Button variant="outlined" size="small">Today</Button>
        <Button variant="outlined" size="small"><ArrowForwardIosIcon fontSize="small" /></Button>
      </Box>
    </Box>
  );
}
