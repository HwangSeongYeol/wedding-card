
import { IconButton, Snackbar } from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useState } from "react";

const CopyIconButton = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);

  const onClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setOpen(true);
    } catch (error) {
      console.log(error, "복사 실패!");
    }
  }
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    event.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return <>
    <IconButton size="small" onClick={() => onClick(text)}>
      <ContentPasteIcon />
    </IconButton>
    <Snackbar
      anchorOrigin={{ "horizontal": "center", "vertical": "bottom" }}
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      message={`${text}(이)가 클립보드에 복사되었습니다.`}
    />

  </>
};

export default CopyIconButton;
