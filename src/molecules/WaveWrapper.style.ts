import { css } from "@emotion/react";

export default {
  wrapper: css``,
  topWaveWrapper: css`
    position: absolute;
    top: -7px;
    width: 100%;
    transform: rotate(180deg);
    transform-origin: center;
  `,
  bottomWaveWrapper: css`
    position: absolute;
    bottom: -7px;
    width: 100%;
  `,
  wave: css`
    width: 100%;
    height: 50px;
    .parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }
    @keyframes move-forever {
      0% {
        transform: translate3d(-90px, 0, 0);
      }
      100% {
        transform: translate3d(85px, 0, 0);
      }
    }
  `,
};
