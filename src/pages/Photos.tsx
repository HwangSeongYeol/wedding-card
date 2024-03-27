import style from "./Photos.style";
import pictures from "@src/assets/pictures";

const Photos = () => {
  return <div className="pages photos" css={style.wrapper}>
    <div css={style.photoWrapper}>
      {
        Object.values(pictures).map((src) => {
          return <img src={src} />
        })
      }
    </div>
  </div>
}
export default Photos;