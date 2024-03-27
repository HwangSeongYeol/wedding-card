import { Box } from "@mui/material"
import style from "./NameLogo.style"
import FavoriteIcon from '@mui/icons-material/Favorite';

const NameLogo = () => {
  return (
    <Box className="logo-wrapper" css={style.wrapper} sx={{ bgcolor: 'primary.main' }}>
      <span>황성열</span>
      <i>
        <FavoriteIcon fontSize="inherit" />
      </i>
      <span>이서라</span>
    </Box>
  )
}

export default NameLogo