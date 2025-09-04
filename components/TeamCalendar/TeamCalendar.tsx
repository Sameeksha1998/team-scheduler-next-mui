"use client";
import * as React from "react";
import { Box } from "@mui/material";
import HeaderBar from "./HeaderBar";
import MemberList from "./MemberList";
import CalendarGrid from "./CalendarGrid";
import AssignmentPanel from "./AssignmentPanel";

const initialJobs = Array.from({ length: 6 }).map((_, i) => ({
  id: `JOB1067${30 + i}`,
  name: "Cameron Williamson",
  address: "4140 Parker Rd. Allentown, New Mexico 31134",
}));

const initialTasks = [
  { jobId: null, title: "Client Name", row: 1, colStart: 2, colSpan: 1, time: "10:20 am - 10:45 am", color: "#D6EFFF" },
  { jobId: null, title: "Client Name", row: 2, colStart: 4, colSpan: 1, time: "8:00 am - 8:30 am", color: "#D6EFFF" },
  { jobId: null, title: "Client Name", row: 4, colStart: 3, colSpan: 1, time: "9:30 am - 10:00 am", color: "#F3E6FF" },
  { jobId: null, title: "Client Name", row: 7, colStart: 6, colSpan: 1, time: "11:30 am - 12:00 pm", color: "#FCEEDC" },
  { jobId: null, title: "Client Name", row: 7, colStart: 7, colSpan: 1, time: "1:15 pm - 2:00 am", color: "#FCEEDC" },
  { jobId: null, title: "Client Name", row: 10, colStart: 3, colSpan: 1, time: "12:30 pm - 1:00 pm", color: "#D6EFFF" }
];

export default function TeamCalendar() {
  const [jobs, setJobs] = React.useState(initialJobs);
  const [tasks, setTasks] = React.useState(initialTasks);

  // Handler when a job is dropped onto a calendar cell
  const handleAssign = (jobId: string, row: number, colStart: number) => {
    // find job
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    // remove job from jobs list (becomes assigned)
    setJobs(prev => prev.filter(j => j.id !== jobId));

    // create a task representing assignment
    setTasks(prev => [
      ...prev,
      {
        jobId,
        title: job.name,
        row,
        colStart,
        colSpan: 1,
        time: "Assigned",
        color: "#E8F4FF"
      }
    ]);
  };

  // Assign all jobs to first available rows sequentially at colStart=2
  const handleAssignAll = () => {
    setTasks(prev => {
      const next = [...prev];
      let row = 1;
      jobs.forEach(j => {
        // find first unused row
        while (next.find(t => t.row === row)) row++;
        next.push({ jobId: j.id, title: j.name, row, colStart: 2, colSpan: 1, time: "Assigned", color: "#E8F4FF" });
        row++;
      });
      return next;
    });
    setJobs([]);
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ flex: 1, bgcolor: "background.paper", borderRadius: 2, overflow: "hidden", boxShadow: 1 }}>
        <HeaderBar />
        <Box sx={{ display: "flex" }}>
          <MemberList />
          <CalendarGrid tasks={tasks} onDropJob={handleAssign} />
        </Box>
      </Box>

      <AssignmentPanel jobs={jobs} onAssignAll={handleAssignAll} />
    </Box>
  );
}
