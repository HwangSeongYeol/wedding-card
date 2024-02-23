import { css } from "@emotion/react";

export default {
  navigator: (top: number) => css`
    position: fixed;
    top: ${top}px;
    width: 100%;
    height: 50px;
    display: flex;
    transition: all 0.2s linear;
    button {
      all: unset;
      flex: 1 1 auto;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  wrapper: (top: number) => css`
    position: fixed;
    top: ${top}px;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.2s linear;
  `,
};
