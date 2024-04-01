import { useEffect, useState } from "react";
import style from "./Wishes.style";
import { db } from "@src/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, DocumentData, Timestamp, deleteDoc, doc } from "firebase/firestore";
import CopyIconButton from "@src/utils/CopyIconButton";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Snackbar, TextField, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface Comment {
  id?: string;
  username?: string;
  content?: string;
  createdAt?: Timestamp;
  ipAddress?: string;
  password?: string;
}

interface IuserInfo {
  className: string,
  title: string,
  pNum: string,
  address: string,
}

const UserInfo = (
  {
    className,
    title,
    pNum,
    address,
  }: IuserInfo) => {

  return (
    <div className={className} css={style.userInfoWrapper}>
      <span>{title}</span>
      <div>
        <IconButton
          className="phone"
          LinkComponent={"a"}
          href={`tel:${pNum}`}
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          className="sms"
          LinkComponent={"a"}
          href={`sms:${pNum}`}
        >
          <EmailIcon />
        </IconButton >
      </div>
      <CopyIconButton
        css={style.address}
        text={address}
        address
      />
    </div>
  )
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

  const handleCheck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div css={style.wishesWrapper}>
      <span className="wishes-wrapper-header">마음 전하실 곳</span>
      <div className="character-wrapper">
        <UserInfo
          className="broom"
          title="신랑에게 연락하기"
          pNum="010-3527-2726"
          address="745015-52-212191 농협"
        />
        <UserInfo
          className="bride"
          title="신부에게 연락하기"
          pNum="010-5717-9605"
          address="100017864980 토스뱅크"
        />
      </div>
      <span className="wishes-wrapper-header2">혼주에게 연락하기</span>
      <div className="parents-wrapper">
        <span className="broom title">신랑측 혼주</span>
        <UserInfo
          className="broom"
          title="아버지 황홍석"
          pNum="010-5034-2726"
          address="780-01-022817 농협"
        />
        <UserInfo
          className="broom"
          title="어머니 윤영희"
          pNum="010-6242-2726"
          address="745010-52-104095 농협"
        />
        <span className="bride title"> 신부측 혼주</span>
        <UserInfo
          className="bride"
          title="아버지 이칠성"
          pNum="010-5414-9605"
          address="504-21-0711-139 국민"
        />
        <UserInfo
          className="bride"
          title="어머니 탁은정"
          pNum="010-4142-9605"
          address="533-12-125477 농협"
        />
      </div>
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
          variant="outlined"
          size="small"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="닉네임"
          inputProps={{ maxLength: 10, autocomplete: 'off' }}
        />
        <TextField
          className="edit-comment-password"
          hiddenLabel
          type="password"
          variant="outlined"
          size="small"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          inputProps={{ maxLength: 15, autocomplete: 'off' }}
        />
        <TextField
          className="edit-comment-content"
          variant="outlined"
          hiddenLabel
          multiline
          maxRows={3}
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="축사를 남겨주세요.."
          inputProps={{ maxLength: 300, autocomplete: 'off' }}
        />
        <div
          className="edit-comment-actions"
        >
          <Typography>
            {`${content.length} / 300`}
          </Typography>
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
            inputProps={{ maxLength: 15, autocomplete: 'off' }}
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