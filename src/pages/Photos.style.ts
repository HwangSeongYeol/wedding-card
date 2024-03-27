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
    gap: 15px;
    justify-content: center;
    overflow: hidden;
    img {
      object-fit: contain;
      max-height: calc(100vh);
    }
  `,
};
