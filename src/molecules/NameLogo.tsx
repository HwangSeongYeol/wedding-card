import { Box } from "@mui/material"
import style from "./NameLogo.style"
import FavoriteIcon from '@mui/icons-material/Favorite';

const NameLogo = () => {
  return (
    <Box className="logo-wrapper" css={style.wrapper} sx={{ bgcolor: 'primary.main' }}>
      <strong>황성열</strong>
      <i>
        <FavoriteIcon fontSize="inherit" />
      </i>
      <strong>이서라</strong>
    </Box>
  )
}

export default NameLogo