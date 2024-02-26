import style from "./Photos.style";
import photo1 from "@/assets/photo1.jpg"
import photo2 from "@/assets/photo2.jpg"
import photo3 from "@/assets/photo3.jpg"

const Photos = () => {
  return <div className="pages photos" css={style.wrapper}>
    <div>
      Photos
    </div>
    <div css={style.photoWrapper}>
      <img src={photo1} />
      <img src={photo2} />
      <img src={photo3} />
    </div>
  </div>
}
export default Photos;