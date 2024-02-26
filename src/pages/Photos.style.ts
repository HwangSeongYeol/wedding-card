import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
  `,
  photoWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    overflow: hidden;
    object-fit: cover;
  `,
};
