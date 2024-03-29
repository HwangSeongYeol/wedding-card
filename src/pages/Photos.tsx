import style from "./Photos.style";
import pictures from "@src/assets/pictures";

const Photos = () => {
  return <div className="pages photos" css={style.wrapper}>
    <div css={style.photoWrapper}>
      {
        Object.entries(pictures).map(([key, src]) => {
          return <img key={src} src={src} css={style.img(key)} />
        })
      }
    </div>
  </div>
}
export default Photos;