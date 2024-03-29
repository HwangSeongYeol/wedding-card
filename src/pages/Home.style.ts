import { css } from "@emotion/react";
import { Theme } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  `,
  topWrapper: css`
    display: flex;
    flex-direction: column;
    font-family: "Crimson Pro", serif;
    align-items: center;
    .date {
      font-size: 2.5rem;
    }
    .day {
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  `,
  mainImageWrapper: css`
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    aspect-ratio: 2 / 3;
    height: 80vh;
    margin-bottom: 1.2rem;
  `,
  img: css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,
  nameWrapper: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "DNFForgedBlade";
    gap: 5px;
    margin-bottom: 4rem;
    .name {
      color: ${theme.palette.text.primary};
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .time,
    .place {
      color: ${theme.palette.text.secondary};
    }
  `,
  invitationWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    .invitation {
      font-size: 0.6rem;
      letter-spacing: 5px;
      font-family: "Crimson Pro";
    }
    .title {
      font-size: 1.2rem;
      font-family: "DNFForgedBlade";
    }
  `,
  description: css`
    font-family: "Ownglyph_Dailyokja-Rg";
    word-break: break-all;
  `,
  description1: css`
    margin: 1rem 0;
    font-family: "Ownglyph_Dailyokja-Rg";
    font-size: 2.3rem;
    word-break: break-all;
    display: flex;
    justify-content: center;
    text-align: center;
  `,
};
