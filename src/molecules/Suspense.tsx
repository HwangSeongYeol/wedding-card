import { css } from "@emotion/react";

const SuspenseView = () => {
  return (
    <div css={
      css`
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to bottom, #f1eab9ee, #ff8c8cee);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 5000;
      `}
    />
  )
}

export default SuspenseView;