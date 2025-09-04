"use client";
import * as React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

export default function AssignmentPanel({ jobs, onAssignAll }: { jobs: Array<any>, onAssignAll: () => void }) {
  const handleDragStart = (e: React.DragEvent, jobId: string) => {
    e.dataTransfer.setData("text/plain", jobId);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box sx={{ width: 340 }}>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">Assign All</Typography>
          <Button size="small" variant="text" onClick={onAssignAll}>Assign All</Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 2 }}>
        {jobs.length === 0 && <Typography variant="body2">No unassigned jobs</Typography>}
        {jobs.map((j: any, idx: number) => (
          <Box
            key={j.id}
            draggable
            onDragStart={(e) => handleDragStart(e, j.id)}
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, borderBottom: idx < jobs.length - 1 ? "1px solid" : "none", borderColor: "divider", pb: 2, mb: 2 }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2">{j.name}</Typography>
              <Typography variant="caption" display="block">{j.address}</Typography>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="caption" sx={{ color: "primary.main", mb: 1 }}>{j.id}</Typography>
              <Button size="small" variant="outlined">Assign</Button>
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
