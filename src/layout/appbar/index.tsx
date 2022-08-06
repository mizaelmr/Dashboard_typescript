import { Breadcrumbs, Container } from "./styles";
import { Toolbar, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useAuth } from "../../context/global";

interface IProps {
  width: number;
  expanded: boolean;
  position?: string;
  onToggle: any;
}

export default function AppBarComponent({ width, expanded, onToggle }: IProps) {
  const { titlePage } = useAuth();

  return (
    <Container drawerwidth={width} expanded={expanded ? 0 : 1} position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          // sx={{ mr: 2 }}
          onClick={onToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Site
        </Typography>
      </Toolbar>
    </Container>
  );
}
