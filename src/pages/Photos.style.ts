import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  photoWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    overflow: hidden;
    img {
      object-fit: contain;
      height: calc(100vh - 50px);
    }
  `,
};
