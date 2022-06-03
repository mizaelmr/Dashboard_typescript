import { Box, Toolbar } from "@mui/material";
import { Breadcrumbs, Container } from "./styles";

// import { Logout } from "@mui/icons-material";
import { useAuth } from "../../context/global";

interface IProps {
  width: number;
  expanded: boolean;
  position?: string;
}

export default function AppBarComponent({ width, expanded }: IProps) {
  const { titlePage } = useAuth();

  return (
    <Container drawerwidth={width} expanded={expanded ? 0 : 1} position="fixed">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Breadcrumbs>{titlePage ? titlePage : "(re)energisa"}</Breadcrumbs>
        </Box>
      </Toolbar>
    </Container>
  );
}
