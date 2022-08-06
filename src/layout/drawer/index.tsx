import { BoxIcon, BoxLogo, Container, Header } from "./styles";
import { Divider, IconButton, MenuList, Typography } from "@mui/material";
import {
  Home,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

import ListItemMenu from "./itemComponent";
import menuListItens from "./itemComponent/listMenu";
import { useState } from "react";

interface IProps {
  width: number;
  expanded: boolean;
  onToggle: any;
}

export default function Sidebar({ width, expanded, onToggle }: IProps) {
  const [itemSelected, setItemSelected] = useState<string>();

  return (
    <>
      <Container
        color="#000"
        width={width}
        open={expanded}
        variant="permanent"
        PaperProps={{
          sx: {
            zIndex: 9999,
            backgroundColor: "#4b4b4b",
            border: "none",
          },
        }}
      >
        <Header>
          <Typography>Miza</Typography>
          {/* <BoxLogo>{expanded ? <Home /> : <Home />}</BoxLogo> */}
        </Header>

        <MenuList sx={{ p: 0 }}>
          {menuListItens.map((menu, index) =>
            menu.divisor ? (
              <Divider key={index} />
            ) : (
              <ListItemMenu
                key={index}
                item={menu}
                menuSelected={itemSelected}
                alterMenuSelected={(e: any) => {
                  setItemSelected(e);
                }}
                showSubmenu={expanded}
              />
            )
          )}
        </MenuList>
      </Container>
    </>
  );
}
