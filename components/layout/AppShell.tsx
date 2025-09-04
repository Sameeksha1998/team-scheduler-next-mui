"use client";
import * as React from "react";
import Link from "next/link";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider", bgcolor: "background.paper" }}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu" sx={{ mr: 1 }} onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography component={Link} href="/" variant="h6" sx={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
            Scheduler
          </Typography>
          <Button variant="text">Events</Button>
          <Button variant="text">Team View</Button>
          <Button variant="text">Team Tracking</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 2 }}>{children}</Container>

      <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", py: 3, mt: 4 }}>
        <Container maxWidth="xl">
          <Typography variant="body2">© {new Date().getFullYear()} Demo</Typography>
        </Container>
      </Box>
    </Box>
  );
}
