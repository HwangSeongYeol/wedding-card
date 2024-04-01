import { Theme, css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,
  title: css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  infoWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  userInfoWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  wishesWrapper: css`
    font-family: "DNFForgedBlade";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .wishes-wrapper-header {
      font-size: 2rem;
      margin-bottom: 50px;
    }
    .character-wrapper {
      display: flex;
      gap: 3rem;
      margin-bottom: 3rem;
      .broom {
        .phone {
          color: #78c0e9;
        }
      }
      .bride {
        .phone {
          color: #f79e9e;
        }
      }
    }
    .wishes-wrapper-header2 {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
    .parents-wrapper {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: 0.1fr 1fr 1fr;
      gap: 1rem 3rem;
      text-align: center;
      .broom {
        .phone,
        &.title {
          color: #78c0e9;
        }
      }
      .bride {
        .phone,
        &.title {
          color: #f79e9e;
        }
      }
    }
  `,
  address: css`
    font-family: "DNFForgedBlade";
    border-radius: 50px;
    font-size: 13px;
  `,

  commentsWrapper: (theme: Theme) => css`
    .comments-header {
    }
    .comments-body {
      border-top: 2px solid ${theme.palette.primary.main};
      border-bottom: 2px solid ${theme.palette.primary.main};
      padding: 4px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .comment {
      display: grid;
      padding: 8px;
      .comment-ipAddress {
        color: pink;
        font-size: 0.8rem;
      }
      .comment-delete {
        float: right;
      }
      .comment-date {
        text-align: end;
        font-size: 0.8rem;
      }
    }
  `,
  deleteDialog: css`
    .MuiDialogActions-root {
      padding: 0 24px 8px 24px;
    }
  `,
  editComment: css`
    display: grid;
    padding: 5px;
    gap: 5px;
    .edit-comment-header {
      grid-area: header / header / header / header;
    }
    .edit-comment-nickName {
      grid-area: nickname;
    }
    .edit-comment-password {
      grid-area: password;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    .edit-comment-content {
      grid-area: content;
      height: 100%;
    }
    .edit-comment-actions {
      grid-area: actions;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media screen and (width <= 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "header   header"
        "nickname password "
        "content  content"
        "actions actions";
    }
    @media screen and (600px < width) {
      grid-template-columns: 150px 1fr;
      grid-template-areas:
        "header   header  header"
        "nickname content content"
        "password content content"
        "emptyA   actions actions";
    }
  `,
  submitButton: css`
    margin-left: auto;
  `,
};
