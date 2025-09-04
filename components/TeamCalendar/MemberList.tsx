"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";

const members = Array.from({ length: 11 }).map((_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  color: ["#FFB74D","#AED581","#4FC3F7","#90CAF9","#CE93D8","#A5D6A7","#FFCDD2","#FFE082","#B39DDB","#FFF59D","#F48FB1"][i % 11]
}));

export default function MemberList() {
  return (
    <Box sx={{ width: 180, borderRight: "1px solid", borderColor: "divider", p: 1.5 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>Team</Typography>
      {members.map((m) => (
        <Box key={m.id} sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: m.color }} />
          <Typography variant="body2">{m.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}
