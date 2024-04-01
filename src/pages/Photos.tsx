import TitleComponent from "@src/molecules/TitleComponent";
import style from "./Photos.style";
import pictures from "@src/assets/pictures";

const Photos = () => {
  return <div className="pages photos" css={style.wrapper}>
    <TitleComponent
      subTitle="GALLERY"
      title="우리의 순간" />
    <div css={style.photoWrapper}>
      {
        Object.entries(pictures).map(([key, src]) => {
          if ([
            "pic3399",
            "pic3287",
            "pic4480",
            "pic4506",
            "pic4529",
            "pic4553",
            "pic4710",
            "pic4759",
            "pic4853",
            "pic5320",
            "pic5449",
            "pic5652",
            "pic5946",
            "pic6337",
            "pic6518"
          ].includes(key))
            return <img key={src} src={src} css={style.img(key)} />
        })
      }
    </div>
  </div>
}
export default Photos;