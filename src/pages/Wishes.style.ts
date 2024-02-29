import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    padding: 8px;
    margin-bottom: 50px;
    .Groom-Bride .AccoutInfotitle {
      background-color: #fa3a51;
    }
    .Groom-Aside .AccoutInfotitle {
      background-color: #173263;
      color: white;
    }
    .Bride-Aside .AccoutInfotitle {
      background-color: #e83a39;
      color: white;
    }
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
  commentsWrapper: css`
    .comments-header {
    }
    .comments-body {
      border-top: 2px solid #fa3a51;
      border-bottom: 2px solid #fa3a51;
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
      grid-area: nickname / nickname / nickname / nickname;
    }
    .edit-comment-password {
      grid-area: password / password / password / password;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    .edit-comment-content {
      grid-area: content / content / content / content;
      height: 100%;
    }
    .edit-comment-actions {
      grid-area: actions / actions / actions / actions;
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
