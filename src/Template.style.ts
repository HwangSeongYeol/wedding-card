import { css } from "@emotion/react";

export default {
  paper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  navigator: (showNaviBar: boolean) => css`
    position: fixed;
    top: ${showNaviBar ? 0 : -50}px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    button {
      all: unset;
      flex: 1 1 auto;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  wrapper: (showNaviBar: boolean) => css`
    position: fixed;
    top: ${showNaviBar ? 50 : 0}px;
    width: 100%;
    overflow: auto;
    transition: all 0.2s linear;
    max-width: 1000px;
    position: relative;
    padding-bottom: 100px;
    margin-bottom: 100px;
  `,
  colorModeFab: css`
    position: fixed;
    left: 10px;
    bottom: 15px;
  `,
  soundFab: css`
    position: fixed;
    left: 10px;
    bottom: 65px;
  `,
};
