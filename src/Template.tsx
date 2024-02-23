import { Outlet, useNavigate } from "react-router-dom";
import style from "./style";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

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
  const [value, setValue] = useState(0);
  // State variables to manage scroll behavior
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-50); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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

  return (
    <>
      <div css={style.navigator(top)}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          <LinkTab label="초대합니다!" value="home" />
          <LinkTab label="사진" value="photos" />
          <LinkTab label="오시는 길" value="directions" />
          <LinkTab label="축하의 마음 전하기" value="wishes" />
        </Tabs>
      </div>
      <div css={style.wrapper} >
        <Outlet />
      </div>
    </>
  );
};

export default Template;
