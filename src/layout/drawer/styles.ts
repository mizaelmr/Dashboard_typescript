import styled, { css } from "styled-components";

import { Drawer } from "@mui/material";

interface Props {
  positionIcon: any;
}

export const Container = styled(Drawer)`
  white-space: nowrap;
  flex-shrink: 0;
  border-top-right-radius: 45px;

  .MuiPaper-root {
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    white-space: nowrap;
    width: ${({ width }: { width: number }) => width}px;

    ${({ open }) =>
      !open &&
      css`
        transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        overflow-x: hidden;
        width: 55px;
      `}
  }
`;

export const Header = styled.div`
  border-bottom: solid 1px #fff;
  min-height: 48px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  } */
`;

export const BoxIcon = styled.div<Props>`
  display: flex;
  justify-content: ${(p) => (p.positionIcon ? "flex-end" : "center")};
  margin-right: ${(p) => (p.positionIcon ? "30px" : "0px")};
  margin-top: 21px;
  & button {
    color: #fff;
  }
`;

export const BoxLogo = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
`;
