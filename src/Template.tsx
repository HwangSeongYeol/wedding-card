import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./style";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";


function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
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


const Template = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname.replace("/", ""));
  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(-50);
  const [test, setTest] = useState<any>();
  let startY = 0;
  const getTest = async () => {
    const docRef = doc(db, "comments", "0TDnfDHHxwOUKw9RTPyN");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if (docSnap.exists()) {
      setTest(docSnap.data())
    }
  }

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

  useEffect(() => {
    const parentContainer = document.querySelector('.main')
    const childContainer = document.querySelector('.pages')
    // Function to handle scroll events
    const handleScroll = () => {
      if (parentContainer === null || childContainer === null) return;
      const { top: currentScrollPos } = childContainer.getBoundingClientRect();
      if (prevScrollpos < currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-50); // Hide navbar
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
      let moveY = e.touches[0].clientY;
      let diffY = moveY - startY;

      if (window.scrollY === 0 && diffY > 0) {
        setTop(0);
      }
    }
    parentContainer?.addEventListener('touchstart', handleTouchStart);
    parentContainer?.addEventListener('touchmove', handleTouchMove);
    getTest();
    return () => {
      parentContainer?.addEventListener('touchstart', handleTouchStart);
      parentContainer?.addEventListener('touchmove', handleTouchMove);
    }
  }, [])

  return (
    <>
      <span>{String(test)}</span>
      <div css={style.navigator(top)}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <LinkTab label="초대합니다!" value="home" />
          <LinkTab label="사진" value="photos" />
          <LinkTab label="오시는 길" value="directions" />
          <LinkTab label="축하의 마음 전하기" value="wishes" />
        </Tabs>
      </div>
      <div className="main" css={style.wrapper(50 + top)} >
        <Outlet />
      </div>
    </>
  );
};

export default Template;
