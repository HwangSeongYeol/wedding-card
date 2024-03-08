import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./Template.style.ts";
import { Box, Fab, Paper, Tab, Tabs, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";
import NameLogo from "./molecules/NameLogo";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import getDesignTokens from "./getDesignTokens.ts";


const ColorModeContext = createContext({ toggleColorMode: () => { } });

const samePageLinkNavigation = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}
interface LinkTabProps {
  label?: string;
  value?: string;
  selected?: boolean;
}

const LinkTab = ({ label, value, selected, ...props }: LinkTabProps) => {
  return (
    <Tab
      component="a"
      aria-current={selected && 'page'}
      label={label}
      value={value}
      {...props}
    />
  );
}

const isMobile = () => {
  const user = navigator.userAgent;
  let isCheck = false;

  if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
    isCheck = true;
  }

  return isCheck;
}

const Template = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname.replace("/", ""));
  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [showNaviBar, setShowNaviBar] = useState<boolean>(isMobile() ? true : true);
  let startY = 0;
  const deviceMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'dark';
  const [mode, setMode] = useState<'light' | 'dark'>(deviceMode);

  const [song] = useState(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));
  const [play, setPlay] = useState(true);

  const playToggle = () => setPlay(!play);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
      navigate(`${newValue}`)
    }
  };

  useEffect(() => { setValue(pathname.replace("/", "")) }, [pathname])

  useEffect(() => {
    play ? song.play() : song.pause();
  }, [song, play]);

  useEffect(() => {
    const parentContainer = document.querySelector('.main')
    const childContainer = document.querySelector('.pages')
    // Function to handle scroll events
    const handleScroll = () => {
      if (parentContainer === null || childContainer === null) return;
      const { top: currentScrollPos } = childContainer.getBoundingClientRect();
      if (prevScrollpos < currentScrollPos) {
        console.log('스크롤 내리는 중')
        setShowNaviBar(true)
      } else {
        console.log('스크롤 올리는 중')
        setShowNaviBar(true)
      }
      setPrevScrollpos(currentScrollPos);
    };
    parentContainer?.addEventListener('scroll', handleScroll);
    return () => {
      parentContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  useEffect(() => {
    const parentContainer = document.querySelector('.main')
    const handleTouchStart = (e: any) => {
      startY = e.touches[0].clientY;
    }
    const handleTouchMove = (e: any) => {
      const moveY = e.touches[0].clientY;
      const diffY = moveY - startY;

      if (window.scrollY === 0 && diffY > 0) {
        setShowNaviBar(true)
      }
    }
    parentContainer?.addEventListener('touchstart', handleTouchStart);
    parentContainer?.addEventListener('touchmove', handleTouchMove);
    song.addEventListener('ended', () => setPlay(false));
    return () => {
      parentContainer?.addEventListener('touchstart', handleTouchStart);
      parentContainer?.addEventListener('touchmove', handleTouchMove);
      song.removeEventListener('ended', () => setPlay(false));
    }
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square css={style.paper}>
          <Box css={style.navigator(showNaviBar)} sx={{
            bgcolor: 'background.default',
            zIndex: 50
          }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              role="navigation"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <NameLogo />
              <LinkTab label="초대합니다!" value="home" />
              <LinkTab label="사진" value="photos" />
              <LinkTab label="오시는 길" value="directions" />
              <LinkTab label="축하의 마음 전하기" value="wishes" />
            </Tabs>
          </Box>
          <Box className="main" css={style.wrapper(showNaviBar)} >
            <Outlet />
            <Fab
              size="small"
              color="secondary"
              css={style.colorModeFab}
              onClick={colorMode.toggleColorMode}

            >
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </Fab>
            <Fab
              size="small"
              color="secondary"
              css={style.soundFab}
              onClick={playToggle}

            >
              {play ? <PlayArrowIcon /> : <PauseIcon />}
            </Fab>
          </Box>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Template;
