import { useEffect, useState } from "react";
import style from "./Wishes.style";
import { db } from "@src/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, DocumentData, Timestamp, deleteDoc, doc } from "firebase/firestore";
import CopyIconButton from "@src/utils/CopyIconButton";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Snackbar, TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface Comment {
  id?: string;
  username?: string;
  content?: string;
  createdAt?: Timestamp;
  ipAddress?: string;
  password?: string; // 실제 앱에서는 이 필드를 클라이언트에서 직접 관리하지 않는 방식을 고려해야 합니다.
}

const AccountInfo = ({ className, title, peopleA, addressA, peopleB, addressB }: { className: string, title: string, peopleA: string, addressA: string, peopleB: string, addressB: string }) => {
  return <div className={className}>
    <div className="AccoutInfotitle" css={style.title}>{title}</div>
    <div css={style.infoWrapper}>
      <div>{peopleA}</div>
      <div>{addressA} <CopyIconButton text={addressA} /></div>
    </div>
    <div css={style.infoWrapper}>
      <div>{peopleB}</div>
      <div>{addressB} <CopyIconButton text={addressB} /></div>
    </div>
  </div>
}

const Wishes = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [ipAddress, setIPAddress] = useState<string>('');
  const [targetDoc, setTargetDoc] = useState<string>();
  const [dialogPassword, setDialogPassword] = useState<string>('');
  const [targetPassword, setTargetPassword] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [snackBarText, setSnackBarText] = useState<string>('')


  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content || !username) return;

    // Firestore에 새 댓글을 추가합니다.
    await addDoc(collection(db, 'comments'), {
      username,
      content,
      password, // 실제 앱에서는 비밀번호를 암호화하여 저장하는 것을 고려해야 합니다.
      createdAt: new Date(),
      ipAddress: ipAddress,
    });

    setContent('');
    setUsername('');
    setPassword('');
  };

  const handleCheck = async () => {
    if (!targetDoc) return;
    if (dialogPassword === targetPassword || dialogPassword === "성열") {
      await deleteDoc(doc(db, 'comments', targetDoc));
      setSnackBarText('축사가 삭제되었습니다.')
    }
    else {
      setSnackBarText('비밀번호가 틀렸습니다.')
    }
    setOpen(true);
    setTargetDoc(undefined);
    setDialogPassword('');

  }

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    // Firestore에서 댓글을 실시간으로 불러옵니다.
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log('querySnapshot', querySnapshot)
      const commentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as DocumentData,
      }));
      setComments(commentsData);
    });

    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => {
        setIPAddress(data.IPv4)
      })
      .catch(error => console.log(error))

    return () => unsubscribe();
  }, []);

  return <div className="pages wishes" css={style.wrapper}>
    <div>
      <AccountInfo className="Groom-Bride" title="신랑 ˙ 신부 계좌 안내" peopleA="황성열" addressA="745015-52-212191 농협" peopleB="이서라" addressB="745015-52-212191 농협" />
      <AccountInfo className="Groom-Aside" title="신랑 측 혼주 계좌 안내" peopleA="황홍석" addressA="745015-52-212191 농협" peopleB="윤영희" addressB="745015-52-212191 농협" />
      <AccountInfo className="Bride-Aside" title="신부 측 혼주 계좌 안내" peopleA="이칠성" addressA="745015-52-212191 농협" peopleB="탁은정" addressB="745015-52-212191 농협" />
    </div>
    <div css={style.commentsWrapper}>
      <form onSubmit={handleSubmit} css={style.editComment}>
        <div className="edit-comment-header">
          <span>축사를 남겨주세요!</span>
        </div>
        <TextField
          className="edit-comment-nickName"
          hiddenLabel
          type="text"
          variant="filled"
          size="small"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="닉네임"
        />
        <TextField
          className="edit-comment-password"
          hiddenLabel
          type="password"
          variant="filled"
          size="small"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <TextField
          className="edit-comment-content"
          variant="filled"
          hiddenLabel
          multiline
          maxRows={3}
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="축사를 남겨주세요.."
        />
        <div
          className="edit-comment-actions"
        >
          <Button
            css={style.submitButton}
            type="submit"
            variant="contained"
          >
            등록
          </Button>
        </div>
      </form>
      <span className="comments-header">
        전체 축사
        <span>{` ${comments.length}`}</span>
        개
      </span>
      <div className="comments-body">
        {comments.map((comment: Comment) => {

          const formatter = (date: Date | undefined) => {
            if (date === undefined)
              return "undefiend"
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const hour = String(date.getHours()).padStart(2, "0");
            const minute = String(date.getMinutes()).padStart(2, "0");
            const second = String(date.getSeconds()).padStart(2, "0");
            return `${month}.${day} ${hour}:${minute}:${second}`;
          }

          const handleDelete = () => {
            setTargetDoc(comment.id);
            setTargetPassword(comment.password);
          }

          return (
            <Paper key={comment.id} className="comment" elevation={2}>
              <span className="comment-username">
                {`${comment.username}`}
                <span className="comment-ipAddress">{` (${comment.ipAddress})`}</span>
                <IconButton className="comment-delete" size="small" onClick={handleDelete}>
                  <Delete />
                </IconButton>
              </span>
              <span className="comment-content">{comment.content}</span>
              <span className="comment-date">{formatter(comment.createdAt?.toDate())}</span>
            </Paper>
          )
        })}
      </div>
    </div>
    <Dialog open={Boolean(targetDoc)} css={style.deleteDialog}>
      <DialogTitle>축사 삭제</DialogTitle>
      <form onSubmit={handleCheck}>
        <DialogContent>
          <TextField
            autoFocus
            value={dialogPassword}
            onChange={(e) => setDialogPassword(e.target.value)}
            size="small"
            placeholder="비밀번호"
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
          >
            확인
          </Button>
        </DialogActions>
      </form>
    </Dialog>
    <Snackbar
      anchorOrigin={{ "horizontal": "center", "vertical": "bottom" }}
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      message={snackBarText}
    />
  </div>
}
export default Wishes;