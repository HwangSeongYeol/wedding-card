import{c as i,a as e,b as s}from"./index-Bb8xVzA7.js";import{T as d}from"./TitleComponent-zMvEH_bX.js";import{p as a}from"./SOK_4935-CFb43LBf.js";import{p as n}from"./SOK_6605-CTOoLsI5.js";import"./Box-BE9Ys4Lz.js";import"./createTheme-69HO1rcy.js";const p={wrapper:i`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,photoWrapper:i`
    display: grid;
    width: 100%;
    margin-top: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-rows: repeat(25, 100px); */
    grid-template-areas:
      "pic3399 pic3399 pic3287 pic3287"
      "pic3399 pic3399 pic3287 pic3287"
      "pic4480 pic4506 pic5449 pic5449"
      "pic4529 pic4553 pic5320 pic5946"
      "pic6337 pic4759 pic4759 pic4710"
      "pic5652 pic5652 pic4853 pic6518";
    gap: 15px;
    justify-content: center;
    overflow: hidden;
  `,img:c=>i`
    width: 100%;
    height: 100%;
    object-fit: contain;
    grid-area: ${c};
  `},r="/wedding-card/assets/SOK_3190-8k2WKdpB.jpg",g="/wedding-card/assets/SOK_3287-TWlgiAxV.jpg",o="/wedding-card/assets/SOK_3399-WT0tikyM.jpg",w="/wedding-card/assets/SOK_3561-CSziPDBb.jpg",j="/wedding-card/assets/SOK_3756-D7CaChs5.jpg",O="/wedding-card/assets/SOK_4480-CzLgM2TG.jpg",m="/wedding-card/assets/SOK_4506-CEtwJOOg.jpg",K="/wedding-card/assets/SOK_4529-kjTbmw8v.jpg",S="/wedding-card/assets/SOK_4553-BDORtyFH.jpg",_="/wedding-card/assets/SOK_4710-BMv-lHsh.jpg",l="/wedding-card/assets/SOK_4759-CVBKnyeD.jpg",f="/wedding-card/assets/SOK_4853-CqIUFCE_.jpg",h="/wedding-card/assets/SOK_5106-Dct5ecjc.jpg",C="/wedding-card/assets/SOK_5320-CcYsSB7p.jpg",u="/wedding-card/assets/SOK_5449-BGHC5EJZ.jpg",x="/wedding-card/assets/SOK_5652-DHT8h_ta.jpg",T="/wedding-card/assets/SOK_5946-eCnRXdca.jpg",B="/wedding-card/assets/SOK_5962-CcMSrtTW.jpg",y="/wedding-card/assets/SOK_6263-Cn-yWfaV.jpg",W="/wedding-card/assets/SOK_6337-iviqYUGK.jpg",b="/wedding-card/assets/SOK_6518-BcZTG3NB.jpg",v={pic3190:r,pic3287:g,pic3399:o,pic3561:w,pic3756:j,pic4480:O,pic4506:m,pic4529:K,pic4553:S,pic4710:_,pic4759:l,pic4853:f,pic4935:a,pic5106:h,pic5320:C,pic5449:u,pic5652:x,pic5946:T,pic5962:B,pic6263:y,pic6337:W,pic6518:b,pic6605:n},R=()=>e("div",{className:"pages photos",css:p.wrapper,children:[s(d,{subTitle:"GALLERY",title:"우리의 순간"}),s("div",{css:p.photoWrapper,children:Object.entries(v).map(([c,t])=>{if(["pic3399","pic3287","pic4480","pic4506","pic4529","pic4553","pic4710","pic4759","pic4853","pic5320","pic5449","pic5652","pic5946","pic6337","pic6518"].includes(c))return s("img",{src:t,css:p.img(c)},t)})})]});export{R as default};
