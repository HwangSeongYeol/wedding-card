import{c as e,r as t,a as l,b as i,F as o}from"./index-Bb8xVzA7.js";const m={wrapper:e`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 8px;
  `,topWrapper:e`
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
  `,mainImageWrapper:e`
    max-width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    aspect-ratio: 2 / 3;
    height: 80vh;
    margin-bottom: 1.2rem;
  `,img:e`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,nameWrapper:a=>e`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "DNFForgedBlade";
    gap: 5px;
    margin-bottom: 4rem;
    .name {
      color: ${a.palette.text.primary};
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .time,
    .place {
      color: ${a.palette.text.secondary};
    }
  `,imageDescription:e`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 3.5rem;
    font-family: "Ownglyph_Dailyokja-Rg";
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  `,description:e`
    font-family: "Ownglyph_Dailyokja-Rg";
    word-break: break-all;
  `,description1:a=>e`
    margin: 1rem 0;
    font-family: "Ownglyph_Dailyokja-Rg";
    font-size: 2.3rem;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    b {
      color: ${a.palette.error.main};
    }
    @media screen and (width < 450px) {
      font-size: 1.8rem;
    }
  `,description2:a=>e`
    margin: 1rem 0;
    font-family: "DNFForgedBlade";
    font-size: 1.1rem;
    word-break: break-all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    .of {
      color: ${a.palette.text.secondary};
      font-size: 0.9rem;
    }
  `},n=a=>t.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",shapeRendering:"auto",preserveAspectRatio:"none",...a},t.createElement("defs",null,t.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),t.createElement("g",{className:"parallax"},t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:0,fill:"rgba(255,255,255,0.7"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:3,fill:"rgba(255,255,255,0.5)"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:5,fill:"rgba(255,255,255,0.3)"}),t.createElement("use",{xlinkHref:"#gentle-wave",x:48,y:7,fill:"rgba(255,255,255,0.9)"}))),r={wrapper:e``,topWaveWrapper:e`
    position: absolute;
    top: -7px;
    width: 100%;
    transform: rotate(180deg);
    transform-origin: center;
  `,bottomWaveWrapper:e`
    position: absolute;
    bottom: -7px;
    width: 100%;
  `,wave:e`
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
  `},p=()=>l(o,{children:[i("div",{css:r.topWaveWrapper,children:i(n,{css:r.wave})}),i("div",{css:r.bottomWaveWrapper,children:i(n,{css:r.wave})})]});export{p as W,m as s};
