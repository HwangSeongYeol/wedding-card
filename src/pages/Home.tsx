import { Box } from "@mui/material";
import style from "./Home.style"
import pic4935 from "@src/assets/pictures/SOK_4935.jpg"
import WaveWrapper from "@src/molecules/WaveWrapper";
import Calendar from "@src/molecules/Calendar";
import DDayCounter from "@src/molecules/DDayCounter";
import TitleComponent from "@src/molecules/TitleComponent";

const Home = () => {
  return <div className="pages home" css={style.wrapper}>
    <Box css={style.topWrapper}>
      <span className="date">2024.05.25 </span>
      <span className="day">SATURDAY</span>
    </Box>
    <div css={style.mainImageWrapper}>
      <WaveWrapper />
      <img
        css={style.img}
        src={pic4935}
      />
    </div>
    <Box css={style.nameWrapper}>
      <span className="name">황성열&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;이서라</span>
      <span className="time">2024년 5월 25일 토요일 오후 1시 10분</span>
      <span className="place">전주 엔타워 컨벤션 웨딩홀 2층 카시오페아홀</span>
    </Box>
    <TitleComponent
      title="소중한 분들을 초대합니다"
      subTitle="INVITATION"
    />
    <div css={style.description1}>
      <span><b>황</b>금빛 같은 내일을 향해 <br /></span>
      <span><b>성</b>큼성큼 함께 걸어가는<br /></span>
      <span><b>열</b>정으로 가득 찬 우리의 사랑<br /></span>
      <span><b>이</b>제 우리 함께<br /></span>
      <span><b>서</b>로를 의지하며<br /></span>
      <span><b>라</b>떼처럼 달콤하게 살아가겠습니다<br /></span>
    </div>
    <span
      css={style.description2}
    >
      <span>황홍석 · 윤영희<span className="of">의 차남</span> 황성열</span>
      <span>이칠성 · 탁은정<span className="of">의 장녀</span> 이서라</span>
    </span>
    <Calendar
      year={2024}
      month={5}
      day={25}
      holidays={["2024-05-06", "2024-05-15"]}
    />
    <DDayCounter
      year={2024}
      month={5}
      day={25}
      eventName="성열, 서라의 결혼식이"
      finalMessage="와주신 하객 여러분 진심으로 감사드립니다."

    />
  </div >
}
export default Home;