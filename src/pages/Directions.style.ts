import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto 100px auto;
    padding: 8px;
  `,
  mapWrapper: css`
    width: 100%;
    height: 300px;
    button {
      display: none;
    }
    .gmnoprint {
      display: none;
    }
  `,
  map: css`
    height: 100%;
  `,
  descriptionWrapper: css`
    display: grid;
    margin-top: 10px;
    margin-bottom: 30px;
    grid-template-columns: 120px auto;
    align-items: center;

    .subtitle {
    }
    .description {
    }
  `,
  buttonWrapper: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    box-sizing: border-box;
    margin-bottom: 8px;
  `,
  buttonNaver: css`
    background-color: #03c75a;
    color: white;
    :hover {
      background-color: #03c75a;
    }
    img {
      width: 30px;
      height: 30px;
    }
  `,
  buttonKakao: css`
    background-color: #fcdf38;
    color: #1e1e1e;
    :hover {
      background-color: #fcdf38;
    }
    img {
      width: 30px;
      height: 30px;
    }
  `,
};
