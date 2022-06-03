import styled, { css } from "styled-components";

interface Iprops {
  expanded: boolean;
  width: number;
}

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin-bottom: 20px;
`;

export const ContainerMain = styled.main`
  flex-grow: 1;
  padding: 24px;
  min-height: 100%;
  margin-top: 56px;
  margin-left: ${({ width }: Iprops) => width}px;
  ${({ expanded }: Iprops) =>
    expanded &&
    css`
      transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
        margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms !important;
      margin-left: 70px !important;
    `};

  @media (min-width: 0px) and (orientation: landscape) {
    margin-top: 48px;
  }

  @media (min-width: 600px) {
    margin-top: 64px;
  }
`;
