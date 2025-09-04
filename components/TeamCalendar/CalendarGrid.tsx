"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

const hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm"];
const rows = 11;
const cellHeight = 56;

export default function CalendarGrid({ tasks = [], onDropJob }: { tasks?: Array<any>, onDropJob?: (jobId: string, row: number, colStart: number) => void }) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, row: number, col: number) => {
    e.preventDefault();
    const jobId = e.dataTransfer.getData("text/plain");
    if (!jobId) return;
    onDropJob && onDropJob(jobId, row, col);
  };

  // compute grid width for positioning overlay tasks
  const columnWidth = 120;

  return (
    <Box sx={{ flex: 1, overflow: "auto", position: "relative" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${hours.length + 1}, minmax(0, ${columnWidth}px))`, alignItems: "center" }}>
        {/* header row: empty cell then hours */}
        <Box sx={{ borderBottom: "1px solid", borderColor: "divider", p: 1 }} />
        {hours.map((h) => (
          <Box key={h} sx={{ borderBottom: "1px solid", borderColor: "divider", p: 1 }}>
            <Typography variant="caption" align="center">{h}</Typography>
          </Box>
        ))}

        {/* grid rows */}
        {Array.from({ length: rows }).map((_, rIdx) => (
          <React.Fragment key={rIdx}>
            <Box sx={{ borderBottom: "1px solid", borderColor: "divider", height: cellHeight }} />
            {hours.map((h, cIdx) => (
              <Box
                key={cIdx}
                data-row={rIdx + 1}
                data-col={cIdx + 1}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, rIdx + 1, cIdx + 1)}
                sx={{ borderBottom: "1px solid", borderColor: "divider", height: cellHeight }}
              />
            ))}
          </React.Fragment>
        ))}
      </Box>

      {/* Overlay tasks */}
      <Box sx={{ position: "absolute", top: 40, left: columnWidth, width: "max-content", height: rows * cellHeight }}>
        {tasks.map((t, i) => {
          const top = (t.row - 1) * cellHeight;
          const left = (t.colStart - 1) * columnWidth;
          const width = (t.colSpan) * columnWidth - 24;
          return (
            <Box key={i} sx={{ position: "absolute", top: `${top}px`, left: `${left}px`, width: `${width}px`, zIndex: 2 }}>
              <TaskCard title={t.title} time={t.time} color={t.color} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
