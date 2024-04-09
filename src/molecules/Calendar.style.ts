import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    max-width: 300px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-color: #eee;
    padding: 15px 0;
    margin: 35px 0;
    font-family: "Nanum Myeongjo";
  `,
  calendar: css`
    width: 100%;
    th,
    td {
      text-align: center;
      padding: 6px 0;
      font-weight: 400;
      font-size: 1.2rem;
      height: 10px;
    }
    .Holiday {
      color: #f79e9e;
    }
    th:first-child {
      color: #f79e9e;
    }
    .D-day {
      background-color: #f79e9e;
      border-radius: 100%;
      color: white;
    }
  `,
};
