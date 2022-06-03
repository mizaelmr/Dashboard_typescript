import { ListItemButton, ListItemIcon, MenuItem } from "@mui/material";

import styled from "styled-components";

interface Iprops {
  expaned: any;
  selected: boolean;
}

interface IPropsSub {
  menupai: string;
}

export const ItemButton = styled(MenuItem)<Iprops>`
  background: ${({ selected }) => {
    return selected ? "#fff !important;" : `#64666780 !important;`;
  }};
  //cor do texto selecionado
  color: ${({ selected }) => {
    return selected ? `#646667 !important;` : "#fff !important;";
  }};
  margin: ${({ expaned }) => {
    return expaned ? "4px 16px !important;" : "4px 8px !important;";
  }};
  padding: ${({ expaned }) => {
    return expaned ? "15px 0px !important;" : "10px 0px !important;";
  }};

  display: flex !important ;
  justify-content: center !important;
  border: solid 0px #000 !important;
  border-radius: 5px !important;

  svg {
    //cor do icone selecionado
    color: ${({ selected }) => {
      return selected ? `#646667 !important;` : "#fff !important;";
    }};
  }

  span {
    font-size: 16px;
  }

  &:hover {
    background: #64666730 !important;
    color: #fff !important;
    svg {
      color: #fff !important;
    }
  }
`;

export const ItemIcon = styled(ListItemIcon)`
  display: flex !important ;
  justify-content: center !important;
`;

export const ListItemSubMenu = styled(ListItemButton)<IPropsSub>`
  padding: 0px !important;
  font-size: 14px !important;
  margin: 8px 0px !important;
  padding: 4px 0px 4px 10px !important;
  border-radius: 5px !important;

  &:hover {
    text-decoration: underline !important;
    background: #646667 !important;
  }
`;
