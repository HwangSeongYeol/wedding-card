/* eslint-disable @typescript-eslint/no-explicit-any */
import TitleComponent from "@src/molecules/TitleComponent";
import style from "./Photos.style";
import pictures from "@src/assets/pictures";
import { forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Dialog from '@mui/material/Dialog';
import Fade from "@mui/material/Fade";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});
const Photos = () => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>();

  const handleClickOpen = (src: string) => {
    console.log('asdf')
    setOpen(true);
    setImgSrc(src);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return <div className="pages photos" css={style.wrapper}>
    <TitleComponent
      subTitle="GALLERY"
      title="우리의 순간" />
    <div css={style.photoWrapper}>
      <div onClick={() => handleClickOpen(pictures.pic3399)} css={style.imgWrapper(2, 2)}>
        <img src={pictures.pic3399} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic3287)} css={style.imgWrapper(2, 2)}>
        <img src={pictures.pic3287} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4480)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4480} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4506)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4506} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic5449)} css={style.imgWrapper(2, 1)}>
        <img src={pictures.pic5449} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4529)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4529} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4553)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4553} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic5320)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic5320} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic5946)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic5946} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic6337)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic6337} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4759)} css={style.imgWrapper(2, 1)}>
        <img src={pictures.pic4759} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4710)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4710} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic5652)} css={style.imgWrapper(2, 1)}>
        <img src={pictures.pic5652} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic4853)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic4853} css={style.img} />
      </div>
      <div onClick={() => handleClickOpen(pictures.pic6518)} css={style.imgWrapper(1, 1)}>
        <img src={pictures.pic6518} css={style.img} />
      </div>
    </div>

    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div onClick={handleClose}>
        <img src={imgSrc} css={style.img} />
      </div>
    </Dialog>
  </div>
}
export default Photos;
