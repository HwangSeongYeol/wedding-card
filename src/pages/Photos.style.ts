import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  photoWrapper: css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: repeat(25, 100px); */
    /* grid-template-areas:
      "pic3287 pic3287 pic3399 pic3399"
      "pic3287 pic3287 pic3399 pic3399"
      "pic3190 pic3190 pic3190 pic3190"
      "pic3561 pic3561 pic3561 pic3561"
      "pic3756 pic3756 pic3756 pic3756"
      "pic4480 pic4480 pic4480 pic4480"
      "pic4506 pic4506 pic4506 pic4506"
      "pic4529 pic4529 pic4529 pic4529"
      "pic4553 pic4553 pic4553 pic4553"
      "pic4710 pic4710 pic4710 pic4710"
      "pic4759 pic4759 pic4759 pic4759"
      "pic4853 pic4853 pic4853 pic4853"
      "pic4935 pic4935 pic4935 pic4935"
      "pic5106 pic5106 pic5106 pic5106"
      "pic5320 pic5320 pic5320 pic5320"
      "pic5449 pic5449 pic5449 pic5449"
      "pic5652 pic5652 pic5652 pic5652"
      "pic5946 pic5946 pic5946 pic5946"
      "pic5962 pic5962 pic5962 pic5962"
      "pic6263 pic6263 pic6263 pic6263"
      "pic6337 pic6337 pic6337 pic6337"
      "pic6518 pic6518 pic6518 pic6518"
      "pic6605 pic6605 pic6605 pic6605"; */
    gap: 15px;
    justify-content: center;
    overflow: hidden;
  `,
  img: (area: string) => css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* grid-area: ${area}; */
  `,
};
