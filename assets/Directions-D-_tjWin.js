import{c as u,r as b,a as m,b as o}from"./index-CVKQOKpe.js";import{C as A,B as M}from"./CopyIconButton-BHKjZgj4.js";import{T as D}from"./TitleComponent-BX08iHuw.js";import"./createTheme-DEQYbKi5.js";import"./createSvgIcon-CcsMevf_.js";import"./utils-DVGfHm9g.js";import"./Box-C6_wkM93.js";const g={wrapper:u`
    display: flex;
    flex-direction: column;
    margin: 0 auto 100px auto;
    padding: 8px;
  `,mapWrapper:u`
    width: 100%;
    height: 300px;
    button {
      display: none;
    }
    .gmnoprint {
      display: none;
    }
  `,map:u`
    height: 100%;
  `,descriptionWrapper:u`
    display: grid;
    margin-top: 10px;
    margin-bottom: 30px;
    grid-template-columns: 120px auto;
    align-items: center;

    .subtitle {
    }
    .description {
    }
  `,buttonWrapper:u`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    box-sizing: border-box;
    margin-bottom: 8px;
  `,buttonNaver:u`
    background-color: #03c75a;
    color: white;
    :hover {
      background-color: #03c75a;
    }
    img {
      width: 30px;
      height: 30px;
    }
  `,buttonKakao:u`
    background-color: #fcdf38;
    color: #1e1e1e;
    :hover {
      background-color: #fcdf38;
    }
    img {
      width: 30px;
      height: 30px;
    }
  `};function L(r,e,t,i){function s(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function c(l){try{h(i.next(l))}catch(p){a(p)}}function d(l){try{h(i.throw(l))}catch(p){a(p)}}function h(l){l.done?n(l.value):s(l.value).then(c,d)}h((i=i.apply(r,[])).next())})}function T(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var O,j;function $(){return j||(j=1,O=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,s,n;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!r(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(n=Object.keys(e),i=n.length,i!==Object.keys(t).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[s]))return!1;for(s=i;s--!==0;){var a=n[s];if(!r(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}),O}var F=$(),K=T(F);const C="__googleMapsScriptId";var y;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(y||(y={}));class f{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:s,id:n=C,language:a,libraries:c=[],mapIds:d,nonce:h,region:l,retries:p=3,url:E="https://maps.googleapis.com/maps/api/js",version:v}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=s,this.id=n||C,this.language=a,this.libraries=c,this.mapIds=d,this.nonce=h,this.region=l,this.retries=p,this.url=E,this.version=v,f.instance){if(!K(this.options,f.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(f.instance.options)}`);return f.instance}f.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?y.FAILURE:this.done?y.SUCCESS:this.loading?y.LOADING:y.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(n=>!i[n]&&delete i[n]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(n=>{let a,c,d,h="The Google Maps JavaScript API",l="google",p="importLibrary",E="__ib__",v=document,w=window;w=w[l]||(w[l]={});const I=w.maps||(w.maps={}),_=new Set,k=new URLSearchParams,R=()=>a||(a=new Promise((x,S)=>L(this,void 0,void 0,function*(){var N;yield c=v.createElement("script"),c.id=this.id,k.set("libraries",[..._]+"");for(d in n)k.set(d.replace(/[A-Z]/g,P=>"_"+P[0].toLowerCase()),n[d]);k.set("callback",l+".maps."+E),c.src=this.url+"?"+k,I[E]=x,c.onerror=()=>a=S(Error(h+" could not load.")),c.nonce=this.nonce||((N=v.querySelector("script[nonce]"))===null||N===void 0?void 0:N.nonce)||"",v.head.append(c)})));I[p]?console.warn(h+" only loads once. Ignoring:",n):I[p]=(x,...S)=>_.add(x)&&R().then(()=>I[p](x,...S))})(i);const s=this.libraries.map(n=>this.importLibrary(n));s.length||s.push(this.importLibrary("core")),Promise.all(s).then(()=>this.callback(),n=>{const a=new ErrorEvent("error",{error:n});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}const q="/wedding-card/assets/naver_icon-8sWvjQNp.png",G="/wedding-card/assets/kakao_map-BeF2tk1s.png",U=new f({apiKey:void 0,version:"weekly"}),W=()=>{const r=b.useRef(null),[e,t]=b.useState(null),i=()=>{const s=new window.google.maps.Map(r.current,{center:{lat:35.7980151,lng:127.0925674},zoom:18});return new window.google.maps.Marker({map:s,position:{lat:35.7980151,lng:127.0925674},title:"전주 엔타워 웨딩홀 컨벤션"}),s};return b.useEffect(()=>{const s=i();t(s)},[]),b.useEffect(()=>{e&&new window.google.maps.Marker({position:{lat:-34.397,lng:150.644},map:e})},[e]),o("div",{ref:r,css:g.map})},X=()=>{const[r,e]=b.useState(!1);return b.useEffect(()=>{U.load().then(()=>{e(!0)}).catch(t=>{console.error("Sorry, something went wrong: Please try again later. Error:",t)})},[]),m("div",{className:"pages directions",css:g.wrapper,children:[o(D,{subTitle:"LOCATION",title:"오시는 길"}),m("div",{css:g.descriptionWrapper,children:[o("span",{className:"subtitle",children:"오시는 길"}),o("span",{className:"description",children:"전주 엔타워컨밴션웨딩홀"}),o("span",{className:"subtitle"}),o("span",{className:"description",children:"2층 카시오페아홀 "}),o("span",{className:"subtitle"}),m("span",{className:"description",children:["전북특별자치도 전주시 완산구 쑥고개로 242",o(A,{text:"전북특별자치도 전주시 완산구 쑥고개로 242"})]}),o("span",{className:"subtitle",children:"주차 안내"}),o("span",{className:"description",children:"대형 주차시설 구비(700대 / 무료) "}),o("span",{className:"subtitle",children:"문경발 전세버스"}),o("span",{className:"description",children:"타는 곳 : ~~~~~ 시간 : ~~:~~ "})]}),m("div",{css:g.buttonWrapper,children:[m(M,{css:g.buttonNaver,fullWidth:!0,href:"https://naver.me/GKv2TeBK",target:"_blank",children:[o("img",{src:q}),"네이버 지도로 이동하기"]}),m(M,{css:g.buttonKakao,fullWidth:!0,href:"https://place.map.kakao.com/17713995",target:"_blank",children:[o("img",{src:G}),"카카오 지도로 이동하기"]})]}),o("div",{css:g.mapWrapper,children:r?o(W,{}):o("div",{children:"Loading..."})})]})};export{X as default};
