import{c as a,r as t,a as i,b as e,F as p}from"./index-DLuMfhQl.js";import{p as c}from"./SOK_4935-CFb43LBf.js";import{B as l}from"./Box-CbbCQNx8.js";import"./createTheme-raV_MpVe.js";import"./extendSxProp-DDyJW1fP.js";const r={wrapper:a`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  `,topWrapper:a`
    display: flex;
    flex-direction: column;
    font-family: "Crimson Pro", serif;
    align-items: center;
    .date {
      font-size: 2.5rem;
    }
    .day {
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  `,mainImageWrapper:a`
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    aspect-ratio: 2 / 3;
    height: 80vh;
    margin-bottom: 1.2rem;
  `,img:a`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,nameWrapper:n=>a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "DNFForgedBlade";
    gap: 5px;
    margin-bottom: 4rem;
    .name {
      color: ${n.palette.text.primary};
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .time,
    .place {
      color: ${n.palette.text.secondary};
    }
  `,invitationWrapper:a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    .invitation {
      font-size: 0.6rem;
      letter-spacing: 5px;
      font-family: "Crimson Pro";
    }
    .title {
      font-size: 1.2rem;
      font-family: "DNFForgedBlade";
    }
  `,description:a`
    font-family: "Ownglyph_Dailyokja-Rg";
    word-break: break-all;
  `,description1:a`
    margin: 1rem 0;
    font-family: "Ownglyph_Dailyokja-Rg";
    font-size: 2.3rem;
    word-break: break-all;
    display: flex;
    justify-content: center;
    text-align: center;
  `},o=n=>t.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",shapeRendering:"auto",preserveAspectRatio:"none",...n},t.createElement("defs",null,t.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),t.createElement("g",{className:"parallax"},t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:0,fill:"rgba(255,255,255,0.7"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:3,fill:"rgba(255,255,255,0.5)"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:5,fill:"rgba(255,255,255,0.3)"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:7,fill:"rgba(255,255,255,0.9)"}))),s={wrapper:a``,topWaveWrapper:a`
    position: absolute;
    top: -7px;
    width: 100%;
    transform: rotate(180deg);
    transform-origin: center;
  `,bottomWaveWrapper:a`
    position: absolute;
    bottom: -7px;
    width: 100%;
  `,wave:a`
    width: 100%;
    height: 50px;
    .parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }
    @keyframes move-forever {
      0% {
        transform: translate3d(-90px, 0, 0);
      }
      100% {
        transform: translate3d(85px, 0, 0);
      }
    }
  `},m=()=>i(p,{children:[e("div",{css:s.topWaveWrapper,children:e(o,{css:s.wave})}),e("div",{css:s.bottomWaveWrapper,children:e(o,{css:s.wave})})]}),v=()=>i("div",{className:"pages home",css:r.wrapper,children:[i(l,{css:r.topWrapper,children:[e("span",{className:"date",children:"2024.05.25 "}),e("span",{className:"day",children:"SATURDAY"})]}),i("div",{css:r.mainImageWrapper,children:[e(m,{}),e("img",{css:r.img,src:c})]}),i(l,{css:r.nameWrapper,children:[e("span",{className:"name",children:"황성열   ·   이서라"}),e("span",{className:"time",children:"2024년 5월 25일 토요일 오후 1시 10분"}),e("span",{className:"place",children:"전주 엔타워 컨벤션 웨딩홀 2층 카시오페아홀"})]}),i(l,{css:r.invitationWrapper,children:[e("span",{className:"invitation",children:"INVITATION"}),e("span",{className:"title",children:"소중한 분들을 초대합니다"})]}),i("span",{css:r.description1,children:["황금빛 같은 내일을 향해 ",e("br",{}),"성큼성큼 함께 걸어가는",e("br",{}),"열정으로 가득 찬 우리의 사랑",e("br",{}),"이제 우리 함께",e("br",{}),"서로를 의지하며",e("br",{}),"라떼처럼 달콤하게 살아가요",e("br",{})]}),e("span",{css:r.description,children:"황성열 이서라의 결혼식에 초대합니다."}),e("span",{})]});export{v as default};
