import { Outlet, useLocation } from "react-router-dom";
import style from "./Template.style.ts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "@mui/material/Fade";
import { Suspense, createContext, useEffect, useMemo, useState } from "react";
import NameLogo from "./molecules/NameLogo";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import getDesignTokens from "./getDesignTokens.ts";
import musicFile from "./assets/Canon in D (Pachelbel's Canon) - Cello & Piano.mp3"
import TypingAnimation from "./molecules/TypingAnimation.tsx";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fallback from "./molecules/Fallback.tsx";
import { scroller } from "react-scroll";

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


const scrollToElement = (elementName: string) => {
  scroller.scrollTo(elementName, {
    offset: -50,
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
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
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname.replace("/", ""));
  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [showNaviBar, setShowNaviBar] = useState<boolean>(isMobile() ? true : true);
  let startY = 0;
  const deviceMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'dark';
  const [mode, setMode] = useState<'light' | 'dark'>(deviceMode);
  const [song] = useState(new Audio(musicFile));
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleClose = () => {
    setTooltipOpen(false);
  };

  const handleOpen = () => {
    setTooltipOpen(true);
  };

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

  const handleTabClick = (event: React.SyntheticEvent, newValue: string) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      // setValue(newValue);
      // navigate(`${newValue}`, { replace: true }) // 뒤로가기 생기지 않게
      // window.scrollTo(0, 0);
      scrollToElement(newValue)
    }
  };

  useEffect(() => { setValue(pathname.replace("/", "")) }, [pathname])

  useEffect(() => {
    play ? song.play() : song.pause();
    song.loop = true;
    song.volume = 0.5;
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

    if (!show && !isLoading) {
      setTooltipOpen(true);
      setTimeout(() => { setTooltipOpen(false) }, 3000)
    }
  }, [show, isLoading])

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
        {
          <Fade in={show || isLoading} timeout={500} appear={false}>
            <div css={style.welcome}>
              <FavoriteIcon css={style.heartBeating} />
              <TypingAnimation
                text="황성열 이서라 5월 25일 결혼합니다."
                onComplete={() => { setShow(false); }} />
            </div>
          </Fade>
        }
        <Paper elevation={0} square css={style.paper}>
          <Box css={style.navigator(showNaviBar)} sx={{
            bgcolor: 'background.paper',
          }}>
            <Tabs
              css={style.tabs}
              value={value}
              onChange={handleTabClick}
              aria-label="nav tabs example"
              role="navigation"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              indicatorColor="primary"
            >
              <NameLogo />
              <LinkTab label="초대합니다!" value="home" />
              <LinkTab label="사진" value="photos" />
              <LinkTab label="오시는 길" value="directions" />
              <LinkTab label="축하의 마음 전하기" value="wishes" />
              <LinkTab label="지방 피로연 안내" value="reception" />
            </Tabs>
          </Box>
          <Box className="main" css={style.wrapper(showNaviBar)} >
            <Suspense
              fallback={(
                <Fallback
                  onUnmounted={() => setIsLoading(false)}
                />
              )}
            >
              <Outlet />
            </Suspense>
            <Fab
              size="small"
              color="secondary"
              css={style.colorModeFab}
              onClick={colorMode.toggleColorMode}

            >
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </Fab>
            <Tooltip
              open={tooltipOpen}
              onOpen={handleOpen}
              onClose={handleClose}
              title="배경음악이 준비되어있습니다."
              placement="right"
              arrow
            >
              <Fab
                size="small"
                color="secondary"
                css={style.soundFab}
                onClick={playToggle}
              >
                {play ? <PauseIcon /> : <PlayArrowIcon />}
              </Fab>
            </Tooltip>
          </Box>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Template;
