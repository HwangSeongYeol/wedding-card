import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  mainImageWrapper: css`
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: sticky;
  `,
  mainImageFooter: css`
    position: absolute;
    top: 0;
    border-radius: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 270px;
  `,
  mainImageDate: css`
    margin-top: 60px;
  `,
  mainImageLocation: css``,
  img: css`
    object-fit: cover;
    /* width: 100vw; */
    height: 100vh;
  `,
  description: css`
    word-break: break-all;
  `,
};
