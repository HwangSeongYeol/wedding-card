import { css } from "@emotion/react";

export default {
  navigator: css`
    width: 100%;
    height: 40px;
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
    width: 100%;
    height: 100%;
    overflow: auto;
  `,
};
