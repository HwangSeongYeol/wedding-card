import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export default {
  wrapper: (theme: Theme) => css`
    width: 100%;
    max-width: 300px;
    letter-spacing: -0.5px;
    border-left: 0;
    border-right: 0;
    font-size: 0.9rem;
    text-align: center;
    font-family: "Crimson Pro", serif;
    .date-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 3px;
    }
    .desc {
      color: ${theme.palette.text.secondary};
      opacity: 0.4;
    }
    .card {
      width: auto;
    }
    .data-days {
      display: flex;
      justify-content: center;
      font-size: 2.4rem;
      width: 32px;
    }
    div > span {
      padding: 0 2.5px;
    }
  `,
  finalMessage: css`
    font-family: "DNFForgedBlade";
    text-align: center;
    b {
      color: #f79e9e;
    }
  `,
};
