import{c as u,r as b,a as m,b as o}from"./index-Cj55uGZC.js";import{C as R,B as M}from"./CopyIconButton-Bcbt4-KO.js";import"./createSvgIcon-B9VkxCuz.js";import"./createTheme-CQLYyZAF.js";const g={wrapper:u`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 8px;
  `,mapWrapper:u`
    width: 100%;
    height: 500px;
  `,map:u`
    height: 100%;
  `,descriptionWrapper:u`
    display: grid;
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
  `};function A(r,e,t,i){function s(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function c(l){try{p(i.next(l))}catch(h){a(h)}}function d(l){try{p(i.throw(l))}catch(h){a(h)}}function p(l){l.done?n(l.value):s(l.value).then(c,d)}p((i=i.apply(r,e||[])).next())})}function C(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var D=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,s,n;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!r(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(n=Object.keys(e),i=n.length,i!==Object.keys(t).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[s]))return!1;for(s=i;s--!==0;){var a=n[s];if(!r(e[a],t[a]))return!1}return!0}return e!==e&&t!==t},K=C(D);const _="__googleMapsScriptId";var y;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(y||(y={}));class f{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:s,id:n=_,language:a,libraries:c=[],mapIds:d,nonce:p,region:l,retries:h=3,url:E="https://maps.googleapis.com/maps/api/js",version:w}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=s,this.id=n||_,this.language=a,this.libraries=c,this.mapIds=d,this.nonce=p,this.region=l,this.retries=h,this.url=E,this.version=w,f.instance){if(!K(this.options,f.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(f.instance.options)}`);return f.instance}f.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?y.FAILURE:this.done?y.SUCCESS:this.loading?y.LOADING:y.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(n=>!i[n]&&delete i[n]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(n=>{let a,c,d,p="The Google Maps JavaScript API",l="google",h="importLibrary",E="__ib__",w=document,v=window;v=v[l]||(v[l]={});const I=v.maps||(v.maps={}),O=new Set,k=new URLSearchParams,j=()=>a||(a=new Promise((S,x)=>A(this,void 0,void 0,function*(){var N;yield c=w.createElement("script"),c.id=this.id,k.set("libraries",[...O]+"");for(d in n)k.set(d.replace(/[A-Z]/g,P=>"_"+P[0].toLowerCase()),n[d]);k.set("callback",l+".maps."+E),c.src=this.url+"?"+k,I[E]=S,c.onerror=()=>a=x(Error(p+" could not load.")),c.nonce=this.nonce||((N=w.querySelector("script[nonce]"))===null||N===void 0?void 0:N.nonce)||"",w.head.append(c)})));I[h]?console.warn(p+" only loads once. Ignoring:",n):I[h]=(S,...x)=>O.add(S)&&j().then(()=>I[h](S,...x))})(i);const s=this.libraries.map(n=>this.importLibrary(n));s.length||s.push(this.importLibrary("core")),Promise.all(s).then(()=>this.callback(),n=>{const a=new ErrorEvent("error",{error:n});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}const $="/wedding-card/assets/naver_icon-8sWvjQNp.png",L="/wedding-card/assets/kakao_map-BeF2tk1s.png",G=new f({apiKey:"AIzaSyDe8mY6bMGP4OO0Rz9t7wig6U07gKDp2zs",version:"weekly"}),U=()=>{const r=b.useRef(null),[e,t]=b.useState(null),i=()=>{const s=new window.google.maps.Map(r.current,{center:{lat:35.7980151,lng:127.0925674},zoom:18});return new window.google.maps.Marker({map:s,position:{lat:35.7980151,lng:127.0925674},title:"전주 엔타워 웨딩홀 컨벤션"}),s};return b.useEffect(()=>{const s=i();t(s)},[]),b.useEffect(()=>{e&&new window.google.maps.Marker({position:{lat:-34.397,lng:150.644},map:e})},[e]),o("div",{ref:r,css:g.map})},q=()=>{const[r,e]=b.useState(!1);return b.useEffect(()=>{G.load().then(()=>{e(!0)}).catch(t=>{console.error("Sorry, something went wrong: Please try again later. Error:",t)})},[]),m("div",{className:"pages directions",css:g.wrapper,children:[m("div",{css:g.descriptionWrapper,children:[o("span",{className:"subtitle",children:"오시는 길"}),o("span",{className:"description",children:"전주 엔타워컨밴션웨딩홀"}),o("span",{className:"subtitle"}),o("span",{className:"description",children:"2층 카시오페아홀  "}),o("span",{className:"subtitle"}),m("span",{className:"description",children:["전북특별자치도 전주시 완산구 쑥고개로 242",o(R,{text:"전북특별자치도 전주시 완산구 쑥고개로 242"})]}),o("span",{className:"subtitle",children:"주차 안내"}),o("span",{className:"description",children:"대형 주차시설 구비(700대 / 무료) "}),o("span",{className:"subtitle",children:"문경발 전세버스"}),o("span",{className:"description",children:"타는 곳 : ~~~~~ 시간 : ~~:~~ "})]}),m("div",{css:g.buttonWrapper,children:[m(M,{css:g.buttonNaver,fullWidth:!0,href:"https://naver.me/GKv2TeBK",target:"_blank",children:[o("img",{src:$}),"네이버 지도로 이동하기"]}),m(M,{css:g.buttonKakao,fullWidth:!0,href:"https://place.map.kakao.com/17713995",target:"_blank",children:[o("img",{src:L}),"카카오 지도로 이동하기"]})]}),o("div",{css:g.mapWrapper,children:r?o(U,{}):o("div",{children:"Loading..."})})]})};export{q as default};
