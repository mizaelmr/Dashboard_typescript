import { Container, ContainerMain } from "./styles";

import AppBar from "./appbar";
import Drawer from "./drawer";
import { useAuth } from "../context/global";
import { useCallback } from "react";

const drawerwidth = 240;

function Layout({ children }: { children: any }) {
  const { sidebarOpen, setSidebarOpen } = useAuth();

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <Container>
      <AppBar
        width={drawerwidth}
        expanded={sidebarOpen}
        onToggle={handleToggleSidebar}
      />
      <Drawer
        width={drawerwidth}
        expanded={sidebarOpen}
        onToggle={handleToggleSidebar}
      />
      <ContainerMain width={drawerwidth} expanded={!sidebarOpen}>
        {children}
      </ContainerMain>
    </Container>
  );
}

export default Layout;
