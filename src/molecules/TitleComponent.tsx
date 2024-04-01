import Box from "@mui/material/Box";
import style from "./TitleComponent.style"

const TitleComponent = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <Box className="TitleComponent" css={style.wrapper}>
      <span className="subTitle">{subTitle}</span>
      <span className="title">{title}</span>
    </Box>
  )
}

export default TitleComponent