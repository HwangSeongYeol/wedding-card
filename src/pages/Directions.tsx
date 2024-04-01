import { useEffect, useRef, useState } from "react";
import style from "./Directions.style";
import { Loader } from "@googlemaps/js-api-loader"
import Button from "@mui/material/Button";
import naverIcon from "@src/assets/naver_icon.png";
import kakaoMapIcon from "@src/assets/kakao_map.png";
import CopyIconButton from "@src/utils/CopyIconButton";
import TitleComponent from "@src/molecules/TitleComponent";

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_PLATFORM_API,
  version: "weekly",
});

const GMap = () => {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState<any | null>(null);

  const initGoogleMap = () => {
    const map = new window.google.maps.Map((googleMapRef as any).current, {
      center: { lat: 35.7980151, lng: 127.0925674 },
      zoom: 18,
    });
    new window.google.maps.Marker({
      map: map,
      position: { lat: 35.7980151, lng: 127.0925674 },
      title: '전주 엔타워 웨딩홀 컨벤션'
    });

    return map;
  }

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map
    });
  }, [map])

  return <div
    ref={googleMapRef}
    css={style.map}
  />
}

const Directions = () => {
  const [loadMap, setLoadMap] = useState(false);


  useEffect(() => {
    loader.load().then(() => {
      setLoadMap(true);
    }).catch(e => {
      console.error('Sorry, something went wrong: Please try again later. Error:', e);
    });
  }, []);

  return <div className="pages directions" css={style.wrapper}>
    <TitleComponent
      subTitle="LOCATION"
      title="오시는 길" />
    <div css={style.descriptionWrapper}>
      <span className="subtitle">오시는 길</span>
      <span className="description">전주 엔타워컨밴션웨딩홀</span>
      <span className="subtitle"></span>
      <span className="description">2층 카시오페아홀  </span>
      <span className="subtitle"></span>
      <span className="description">
        전북특별자치도 전주시 완산구 쑥고개로 242
        <CopyIconButton text="전북특별자치도 전주시 완산구 쑥고개로 242" />
      </span>
      <span className="subtitle">주차 안내</span>
      <span className="description">대형 주차시설 구비(700대 / 무료) </span>
      <span className="subtitle">문경발 전세버스</span>
      <span className="description">타는 곳 : ~~~~~ 시간 : ~~:~~ </span>
    </div>
    <div css={style.buttonWrapper}>
      <Button css={style.buttonNaver} fullWidth href={"https://naver.me/GKv2TeBK"} target='_blank'>
        <img src={naverIcon} />
        네이버 지도로 이동하기
      </Button>
      <Button css={style.buttonKakao} fullWidth href={"https://place.map.kakao.com/17713995"} target='_blank'>
        <img src={kakaoMapIcon} />
        카카오 지도로 이동하기
      </Button>
    </div>
    <div css={style.mapWrapper}>
      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  </div >
}
export default Directions;