import WaveWrapper from "@src/molecules/WaveWrapper";
import style from "./Home.style"
import pic6605 from "@src/assets/pictures/SOK_6605.webp"

const Wrapup = () => {
  return <div className="pages wrapup" css={style.wrapper}>
    <div css={style.mainImageWrapper}>
      <WaveWrapper />
      <img
        css={style.img}
        src={pic6605}
      />
      <span css={style.imageDescription}>
        서로가 마주보며 다져온 사랑을<br />
        이제 함께 한 곳을 바라보며 걸어갈 수 있는<br />
        큰 사랑으로 키우고자 합니다.<br />
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게<br />
        앞날을 축복해 주시면 감사하겠습니다.<br />
      </span>
    </div>
  </div>
}

export default Wrapup;