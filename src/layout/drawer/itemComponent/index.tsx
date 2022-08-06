import { CalendarMonth, Home, Logout, PersonAdd } from "@mui/icons-material";
import { Collapse, ListItemText, MenuList, Typography } from "@mui/material";
import { ItemButton, ItemIcon, ListItemSubMenu } from "./styles";

import { useAuth } from "../../../context/global";
import { useHistory } from "react-router-dom";
import { useState } from "react";

interface IMenuItem {
  item: any;
  showSubmenu: boolean | number;
  key: number;
  menuSelected: any;
  alterMenuSelected: any;
}

function Menus({
  item,
  showSubmenu,
  menuSelected,
  alterMenuSelected,
}: IMenuItem) {
  const { sidebarOpen, setSidebarOpen } = useAuth();
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);

  const renderIcon = (icon: any) => {
    switch (icon) {
      case "personAdd":
        return <PersonAdd />;
      case "calendar_month":
        return <CalendarMonth />;
      case "logout":
        return <Logout />;
      default:
        return <Home />;
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    if (sidebarOpen === false) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const handleSelected = (e: any) => {
    alterMenuSelected(e.currentTarget.title);
  };

  return (
    <>
      <ItemButton
        expaned={showSubmenu ? 1 : 0}
        onClick={(e) => {
          handleSelected(e);
          item.router ? history.push(item.router) : handleOpen();
        }}
        title={item.title}
        selected={item.title === menuSelected ? true : false}
      >
        <ItemIcon>{renderIcon(item.icon)}</ItemIcon>
        {showSubmenu && <ListItemText primary={item.title} />}
      </ItemButton>

      {item && item.children && showSubmenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <MenuList component="div" disablePadding sx={{ ml: 5 }}>
            {item.children.map((e: any, index: number) => {
              return (
                <ListItemSubMenu
                  key={index}
                  menupai={item.title}
                  onClick={() => {
                    alterMenuSelected(item.title);
                    history.push(e.router);
                  }}
                >
                  <Typography style={{ fontSize: 14 }}>{e.title}</Typography>
                </ListItemSubMenu>
              );
            })}
          </MenuList>
        </Collapse>
      )}
    </>
  );
}

export default Menus;
