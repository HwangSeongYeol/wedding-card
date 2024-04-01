import { css } from "@emotion/react";
import { Theme } from "@mui/material";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 8px;
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
    max-width: 100%;
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
  imageDescription: css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 3.5rem;
    font-family: "Ownglyph_Dailyokja-Rg";
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  `,
  description: css`
    font-family: "Ownglyph_Dailyokja-Rg";
    word-break: break-all;
  `,
  description1: (theme: Theme) => css`
    margin: 1rem 0;
    font-family: "Ownglyph_Dailyokja-Rg";
    font-size: 2.3rem;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    b {
      color: ${theme.palette.error.main};
    }
    @media screen and (width < 450px) {
      font-size: 1.8rem;
    }
  `,
  description2: (theme: Theme) => css`
    margin: 1rem 0;
    font-family: "DNFForgedBlade";
    font-size: 1.1rem;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    .of {
      color: ${theme.palette.text.secondary};
      font-size: 0.9rem;
    }
  `,
};
