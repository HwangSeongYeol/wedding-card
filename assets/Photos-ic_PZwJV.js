import{c as n,r as t,a as o,b as i}from"./index-BY360Yf7.js";import{T as l}from"./TitleComponent-DtCIjnIO.js";import{D as w}from"./Dialog-BOQFoou4.js";import{F as h}from"./Fade-6IBf8qEm.js";import"./Box-DXbUEkMA.js";import"./createTheme-DZNTmIOu.js";import"./utils-CPSpa8QW.js";const c={wrapper:n`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,photoWrapper:n`
    display: grid;
    width: 100%;
    margin-top: 10px;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-areas:
      "pic3399 pic3399 pic3287 pic3287"
      "pic3399 pic3399 pic3287 pic3287"
      "pic4480 pic4506 pic5449 pic5449"
      "pic4529 pic4553 pic5320 pic5946"
      "pic6337 pic4759 pic4759 pic4710"
      "pic5652 pic5652 pic4853 pic6518"; */
    gap: 15px;
    justify-content: center;
    overflow: hidden;
  `,imgWrapper:(r,e)=>n`
    grid-column-end: span ${r};
    grid-row-end: span ${e};
  `,img:n`
    image-rendering: -webkit-optimize-contrast;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `},C="/wedding-card/assets/SOK_3287-VmuuRj0Q.webp",v="/wedding-card/assets/SOK_3399-BFmyuXwo.webp",b="/wedding-card/assets/SOK_4480-CZUMTPvv.webp",k="/wedding-card/assets/SOK_4506-1NqdNYfd.webp",u="/wedding-card/assets/SOK_4529-BgQ5ah0k.webp",f="/wedding-card/assets/SOK_4553-B4PeNfrM.webp",S="/wedding-card/assets/SOK_4710-oVM-C8at.webp",W="/wedding-card/assets/SOK_4759-5TJT7vJ6.webp",O="/wedding-card/assets/SOK_4853-DuYcA832.webp",K="/wedding-card/assets/SOK_5320-iX4w7YOJ.webp",_="/wedding-card/assets/SOK_5449-BrDrhbRI.webp",x="/wedding-card/assets/SOK_5652-Cce6eJh6.webp",T="/wedding-card/assets/SOK_5946-D5r8LB2o.webp",j="/wedding-card/assets/SOK_6337-DhXl7jWJ.webp",y="/wedding-card/assets/SOK_6518-CNQQ8h9I.webp",s={pic3287:C,pic3399:v,pic4480:b,pic4506:k,pic4529:u,pic4553:f,pic4710:S,pic4759:W,pic4853:O,pic5320:K,pic5449:_,pic5652:x,pic5946:T,pic6337:j,pic6518:y},D=t.forwardRef(function(e,d){return i(h,{ref:d,...e})}),F=()=>{const[r,e]=t.useState(!1),[d,g]=t.useState(),p=m=>{console.log("asdf"),e(!0),g(m)},a=()=>{e(!1)};return o("div",{className:"pages photos",css:c.wrapper,children:[i(l,{subTitle:"GALLERY",title:"우리의 순간"}),o("div",{css:c.photoWrapper,children:[i("div",{onClick:()=>p(s.pic3399),css:c.imgWrapper(2,2),children:i("img",{src:s.pic3399,css:c.img})}),i("div",{onClick:()=>p(s.pic3287),css:c.imgWrapper(2,2),children:i("img",{src:s.pic3287,css:c.img})}),i("div",{onClick:()=>p(s.pic4480),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4480,css:c.img})}),i("div",{onClick:()=>p(s.pic4506),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4506,css:c.img})}),i("div",{onClick:()=>p(s.pic5449),css:c.imgWrapper(2,1),children:i("img",{src:s.pic5449,css:c.img})}),i("div",{onClick:()=>p(s.pic4529),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4529,css:c.img})}),i("div",{onClick:()=>p(s.pic4553),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4553,css:c.img})}),i("div",{onClick:()=>p(s.pic5320),css:c.imgWrapper(1,1),children:i("img",{src:s.pic5320,css:c.img})}),i("div",{onClick:()=>p(s.pic5946),css:c.imgWrapper(1,1),children:i("img",{src:s.pic5946,css:c.img})}),i("div",{onClick:()=>p(s.pic6337),css:c.imgWrapper(1,1),children:i("img",{src:s.pic6337,css:c.img})}),i("div",{onClick:()=>p(s.pic4759),css:c.imgWrapper(2,1),children:i("img",{src:s.pic4759,css:c.img})}),i("div",{onClick:()=>p(s.pic4710),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4710,css:c.img})}),i("div",{onClick:()=>p(s.pic5652),css:c.imgWrapper(2,1),children:i("img",{src:s.pic5652,css:c.img})}),i("div",{onClick:()=>p(s.pic4853),css:c.imgWrapper(1,1),children:i("img",{src:s.pic4853,css:c.img})}),i("div",{onClick:()=>p(s.pic6518),css:c.imgWrapper(1,1),children:i("img",{src:s.pic6518,css:c.img})})]}),i(w,{open:r,TransitionComponent:D,keepMounted:!0,onClose:a,"aria-describedby":"alert-dialog-slide-description",children:i("div",{onClick:a,children:i("img",{src:d,css:c.img})})})]})};export{F as default};
