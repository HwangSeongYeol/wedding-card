import { Box } from "@mui/material";
import style from "./Home.style"
import pic4935 from "@src/assets/pictures/SOK_4935.jpg"
import WaveWrapper from "@src/molecules/WaveWrapper";

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
    <Box css={style.invitationWrapper}>
      <span className="invitation">INVITATION</span>
      <span className="title">소중한 분들을 초대합니다</span>
    </Box>

    <span css={style.description1}>
      황금빛 같은 내일을 향해 <br />
      성큼성큼 함께 걸어가는<br />
      열정으로 가득 찬 우리의 사랑<br />
      이제 우리 함께<br />
      서로를 의지하며<br />
      라떼처럼 달콤하게 살아가요<br />
    </span>
    <span
      css={style.description}
    >
      {'황성열 이서라의 결혼식에 초대합니다.'}
    </span>
    <span>

    </span>
  </div >
}
export default Home;