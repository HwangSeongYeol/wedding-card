import { Link, Outlet, useNavigate } from "react-router-dom";
import style from "./style";


const Template = () => {
  const navigate = useNavigate();

  return (
    <>
      <div css={style.navigator}>
        <button onClick={() => { navigate("/home") }}>초대합니다!</button>
        <button onClick={() => { navigate("/photos") }}>사진</button>
        <button onClick={() => { navigate("/directions") }}>오시는 길</button>
        <button onClick={() => { navigate("/wishes") }}>축하의 마음 전하기</button>
      </div>
      <div css={style.wrapper} >
        <Outlet />
      </div>
    </>
  );
};

export default Template;
