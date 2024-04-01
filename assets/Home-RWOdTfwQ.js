import{c as m,b as e,a as s,r as w}from"./index-Bb8xVzA7.js";import{s as d,W as D}from"./WaveWrapper-BYYbaXX6.js";import{p as M}from"./SOK_4935-CFb43LBf.js";import{B as f}from"./Box-BE9Ys4Lz.js";import{T as S}from"./TitleComponent-zMvEH_bX.js";import"./createTheme-69HO1rcy.js";const x={wrapper:m`
    width: 100%;
    max-width: 300px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-color: #eee;
    padding: 15px 0;
    margin: 35px 0;
    font-family: DNFForgedBlade;
  `,calendar:m`
    width: 100%;
    th,
    td {
      text-align: center;
      padding: 6px 0;
      font-weight: 400;
      font-size: 1.2rem;
      height: 10px;
    }
    .Holiday {
      color: #f79e9e;
    }
    th:first-child {
      color: #f79e9e;
    }
    .D-day {
      background-color: #f79e9e;
      border-radius: 100%;
      color: white;
    }
  `},T=({year:c,month:i,day:h,holidays:l})=>{const y=new Date(c,i-1,1),n=new Date(c,i,0),o=y.getDay(),N=n.getDate(),p=r=>{const t=`${c}-${i.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}`;return console.log(t,l,l.includes(t)),l.includes(t)},g=()=>{const r=[];for(let a=0;a<o;a++)r.push(e("td",{},`empty-${a}`));for(let a=1;a<=N;a++){const u=(o+a-1)%7===0,b=p(a);r.push(e("td",{className:u||b?"Holiday":a===h?"D-day":void 0,children:a},a))}const t=[];for(let a=0;a<r.length;a+=7)t.push(e("tr",{children:r.slice(a,a+7)},`row-${a}`));return t};return e(f,{className:"Calendar-wrapper",css:x.wrapper,children:s("table",{css:x.calendar,children:[e("thead",{children:s("tr",{children:[e("th",{children:"일"}),e("th",{children:"월"}),e("th",{children:"화"}),e("th",{children:"수"}),e("th",{children:"목"}),e("th",{children:"금"}),e("th",{children:"토"})]})}),e("tbody",{children:g()})]})})},v={wrapper:c=>m`
    width: 100%;
    max-width: 300px;
    letter-spacing: -0.5px;
    border-left: 0;
    border-right: 0;
    font-size: 0.9rem;
    text-align: center;
    font-family: "Crimson Pro", serif;
    .date-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 3px;
    }
    .desc {
      color: ${c.palette.text.secondary};
      opacity: 0.4;
    }
    .card {
      width: auto;
    }
    .data-days {
      display: flex;
      justify-content: center;
      font-size: 2.4rem;
      width: 32px;
    }
    div > span {
      padding: 0 2.5px;
    }
  `,finalMessage:m`
    font-family: "DNFForgedBlade";
    text-align: center;
    b {
      color: #f79e9e;
    }
  `},C=({year:c,month:i,day:h,eventName:l,finalMessage:y})=>{const[n,o]=w.useState({days:0,hours:0,minutes:0,seconds:0});return w.useEffect(()=>{const N=new Date(c,i-1,h),p=setInterval(()=>{const g=new Date,r=N.getTime()-g.getTime();if(r<=0)clearInterval(p),o({days:0,hours:0,minutes:0,seconds:0});else{const t=Math.floor(r/864e5),a=Math.floor(r/(1e3*60*60)%24),u=Math.floor(r/1e3/60%60),b=Math.floor(r/1e3%60);o({days:t,hours:a,minutes:u,seconds:b})}},1e3);return()=>clearInterval(p)},[c,i,h]),s(f,{className:"DDayCounter-wrapper",css:v.wrapper,children:[s("div",{className:"date-wrapper",children:[s("div",{className:"card",children:[e("div",{className:"desc",children:"DAYS"}),e("span",{className:"data-days",children:n.days})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:" "}),e("span",{children:":"})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:"HOUR"}),e("span",{className:"data-days",children:n.hours})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:" "}),e("span",{children:":"})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:"MIN"}),e("span",{className:"data-days",children:n.minutes})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:" "}),e("span",{children:":"})]}),s("div",{className:"card",children:[e("div",{className:"desc",children:"SEC"}),e("span",{className:"data-days",children:n.seconds})]})]}),n.days===0&&n.hours===0&&n.minutes===0&&n.seconds===0?e("p",{css:v.finalMessage,children:y}):s("p",{css:v.finalMessage,children:[l," 앞으로 ",e("b",{children:n.days}),"일 남았습니다."]})]})},B=()=>s("div",{className:"pages home",css:d.wrapper,children:[s(f,{css:d.topWrapper,children:[e("span",{className:"date",children:"2024.05.25 "}),e("span",{className:"day",children:"SATURDAY"})]}),s("div",{css:d.mainImageWrapper,children:[e(D,{}),e("img",{css:d.img,src:M})]}),s(f,{css:d.nameWrapper,children:[e("span",{className:"name",children:"황성열   ·   이서라"}),e("span",{className:"time",children:"2024년 5월 25일 토요일 오후 1시 10분"}),e("span",{className:"place",children:"전주 엔타워 컨벤션 웨딩홀 2층 카시오페아홀"})]}),e(S,{title:"소중한 분들을 초대합니다",subTitle:"INVITATION"}),s("div",{css:d.description1,children:[s("span",{children:[e("b",{children:"황"}),"금빛 같은 내일을 향해 ",e("br",{})]}),s("span",{children:[e("b",{children:"성"}),"큼성큼 함께 걸어가는",e("br",{})]}),s("span",{children:[e("b",{children:"열"}),"정으로 가득 찬 우리의 사랑",e("br",{})]}),s("span",{children:[e("b",{children:"이"}),"제 우리 함께",e("br",{})]}),s("span",{children:[e("b",{children:"서"}),"로를 의지하며",e("br",{})]}),s("span",{children:[e("b",{children:"라"}),"떼처럼 달콤하게 살아가겠습니다",e("br",{})]})]}),s("span",{css:d.description2,children:[s("span",{children:["황홍석 · 윤영희",e("span",{className:"of",children:"의 차남"})," 황성열"]}),s("span",{children:["이칠성 · 탁은정",e("span",{className:"of",children:"의 장녀"})," 이서라"]})]}),e(T,{year:2024,month:5,day:25,holidays:["2024-05-06","2024-05-15"]}),e(C,{year:2024,month:5,day:25,eventName:"성열, 서라의 결혼식이",finalMessage:"와주신 하객 여러분 진심으로 감사드립니다."})]});export{B as default};
