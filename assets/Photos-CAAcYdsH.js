import{c as i,b as s}from"./index-Cj55uGZC.js";import{p as t}from"./SOK_4935-CFb43LBf.js";import{p as e}from"./SOK_6605-CTOoLsI5.js";const p={wrapper:i`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,photoWrapper:i`
    display: grid;
    width: 100%;
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
  `},a="/wedding-card/assets/SOK_3190-8k2WKdpB.jpg",n="/wedding-card/assets/SOK_3287-TWlgiAxV.jpg",r="/wedding-card/assets/SOK_3399-WT0tikyM.jpg",g="/wedding-card/assets/SOK_3561-CSziPDBb.jpg",o="/wedding-card/assets/SOK_3756-D7CaChs5.jpg",w="/wedding-card/assets/SOK_4480-CzLgM2TG.jpg",j="/wedding-card/assets/SOK_4506-CEtwJOOg.jpg",O="/wedding-card/assets/SOK_4529-kjTbmw8v.jpg",K="/wedding-card/assets/SOK_4553-BDORtyFH.jpg",S="/wedding-card/assets/SOK_4710-BMv-lHsh.jpg",_="/wedding-card/assets/SOK_4759-CVBKnyeD.jpg",l="/wedding-card/assets/SOK_4853-CqIUFCE_.jpg",m="/wedding-card/assets/SOK_5106-Dct5ecjc.jpg",f="/wedding-card/assets/SOK_5320-CcYsSB7p.jpg",h="/wedding-card/assets/SOK_5449-BGHC5EJZ.jpg",C="/wedding-card/assets/SOK_5652-DHT8h_ta.jpg",u="/wedding-card/assets/SOK_5946-eCnRXdca.jpg",B="/wedding-card/assets/SOK_5962-CcMSrtTW.jpg",x="/wedding-card/assets/SOK_6263-Cn-yWfaV.jpg",y="/wedding-card/assets/SOK_6337-iviqYUGK.jpg",T="/wedding-card/assets/SOK_6518-BcZTG3NB.jpg",W={pic3190:a,pic3287:n,pic3399:r,pic3561:g,pic3756:o,pic4480:w,pic4506:j,pic4529:O,pic4553:K,pic4710:S,pic4759:_,pic4853:l,pic4935:t,pic5106:m,pic5320:f,pic5449:h,pic5652:C,pic5946:u,pic5962:B,pic6263:x,pic6337:y,pic6518:T,pic6605:e},G=()=>s("div",{className:"pages photos",css:p.wrapper,children:s("div",{css:p.photoWrapper,children:Object.entries(W).map(([c,d])=>{if(["pic3399","pic3287","pic4480","pic4506","pic4529","pic4553","pic4710","pic4759","pic4853","pic5320","pic5449","pic5652","pic5946","pic6337","pic6518"].includes(c))return s("img",{src:d,css:p.img(c)},d)})})});export{G as default};
