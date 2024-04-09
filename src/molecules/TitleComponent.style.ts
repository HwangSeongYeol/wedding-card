import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    .subTitle {
      font-size: 0.6rem;
      letter-spacing: 5px;
      margin-right: -5px;
      font-family: "Nanum Myeongjo";
    }
    .title {
      font-size: 1.2rem;
      font-family: "Nanum Myeongjo";
    }
  `,
};
