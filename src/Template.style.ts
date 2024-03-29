import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export default {
  paper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  welcome: css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #f1eab9ee, #ff8c8cee);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  `,
  heartBeating: css`
    font-size: 3rem;
    color: #ffdddd;
    animation-name: beat;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    @keyframes beat {
      0% {
        transform: scale(1);
      }
      75% {
        transform: scale(0.8);
      }
    }
  `,
  navigator: (showNaviBar: boolean) => css`
    position: fixed;
    top: ${showNaviBar ? 0 : -50}px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    z-index: 50;
    button {
      all: unset;
      flex: 1 1 auto;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  tabs: (theme: Theme) => css`
    .MuiTabs-indicator {
      background-image: linear-gradient(
        to top,
        ${theme.palette.primary.main},
        rgba(254, 219, 208, 0)
      );
      background-color: transparent;
      height: 10px;
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
