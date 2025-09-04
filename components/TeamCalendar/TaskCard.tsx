"use client";
import * as React from "react";
import { Paper, Typography } from "@mui/material";

export default function TaskCard({ title, time, color }: { title: string; time: string; color: string }) {
  return (
    <Paper elevation={0} sx={{ p: 0.8, bgcolor: color, borderRadius: 1, boxShadow: 1 }}>
      <Typography variant="caption" sx={{ fontWeight: 700 }}>{title}</Typography>
      <Typography variant="caption" display="block">{time}</Typography>
    </Paper>
  );
}
