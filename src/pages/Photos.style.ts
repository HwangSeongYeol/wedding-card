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
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-areas:
      "pic3399 pic3399 pic3287 pic3287"
      "pic3399 pic3399 pic3287 pic3287"
      "pic4480 pic4506 pic5449 pic5449"
      "pic4529 pic4553 pic5320 pic5946"
      "pic6337 pic4759 pic4759 pic4710"
      "pic5652 pic5652 pic4853 pic6518"; */
    gap: 15px;
    justify-content: center;
    overflow: hidden;
  `,
  imgWrapper: (column: number, row: number) => css`
    grid-column-end: span ${column};
    grid-row-end: span ${row};
  `,
  img: css`
    image-rendering: -webkit-optimize-contrast;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
