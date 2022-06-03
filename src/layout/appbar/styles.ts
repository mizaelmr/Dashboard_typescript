import styled, { css } from "styled-components";

import { AppBar } from "@mui/material";

interface IStyledProps {
  drawerwidth: number;
  expanded: boolean | number;
  position?: string;
}

export const Container = styled(AppBar)`
  transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
    margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms !important;
  /* z-index: 1201 !important; */
  /* box-shadow: 0px 0px 0px 0px !important; */
  background: #4b4b4b !important;

  ${({ expanded }: IStyledProps) =>
    !expanded
      ? css`
          transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
            margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms !important;
          margin-left: ${({ drawerwidth }: { drawerwidth: number }) =>
            `${drawerwidth}px`} !important;
          width: ${({ drawerwidth }: { drawerwidth: number }) =>
            `calc(100% - ${drawerwidth}px)`} !important;
        `
      : css`
          width: ${({ drawerwidth }: { drawerwidth: number }) =>
            `calc(100% - 55px)`} !important;
        `};
`;

export const Breadcrumbs = styled.h2`
  margin-left: 40px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;
