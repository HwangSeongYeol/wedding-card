import style from "./Reception.style";
import reception_info from "@src/assets/reception_info.jpg"


const Photos = () => {
  return <div className="pages reception" css={style.wrapper}>
    <img
      css={style.img}
      src={reception_info}
    />
  </div>
}
export default Photos;