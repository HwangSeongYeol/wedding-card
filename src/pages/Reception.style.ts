import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
    max-width: 600px;
  `,
  img: css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,
};
