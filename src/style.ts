import { css } from "@emotion/react";

export default {
  navigator: (top: number) => css`
    position: fixed;
    top: ${top}px;
    width: 100%;
    height: 50px;
    background: wheat;
    display: flex;
    button {
      all: unset;
      flex: 1 1 auto;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  wrapper: css`
    position: fixed;
    top: 50px;
    width: 100%;
    height: 100%;
    overflow: auto;
  `,
};
