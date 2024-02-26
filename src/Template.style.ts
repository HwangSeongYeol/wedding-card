import { css } from "@emotion/react";

export default {
  navigator: (showNaviBar: boolean) => css`
    position: fixed;
    top: ${showNaviBar ? 0 : -50}px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    transition: all 0.2s linear;
    button {
      all: unset;
      flex: 1 1 auto;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .MuiTabs-indicator {
      background-color: #f0394d;
    }
  `,
  wrapper: (showNaviBar: boolean) => css`
    position: fixed;
    top: ${showNaviBar ? 50 : 0}px;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.2s linear;
  `,
};
