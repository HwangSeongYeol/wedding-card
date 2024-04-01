import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,
  photoWrapper: css`
    display: grid;
    width: 100%;
    margin-top: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: repeat(25, 100px); */
    grid-template-areas:
      "pic3399 pic3399 pic3287 pic3287"
      "pic3399 pic3399 pic3287 pic3287"
      "pic4480 pic4506 pic5449 pic5449"
      "pic4529 pic4553 pic5320 pic5946"
      "pic6337 pic4759 pic4759 pic4710"
      "pic5652 pic5652 pic4853 pic6518";
    gap: 15px;
    justify-content: center;
    overflow: hidden;
  `,
  img: (area: string) => css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    grid-area: ${area};
  `,
};
