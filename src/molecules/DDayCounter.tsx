import Box from "@mui/material/Box";
import style from "./DdayCounter.style"
import { useEffect, useState } from "react";

interface IDDayCounter {
  year: number;
  month: number;
  day: number;
  eventName: string;
  finalMessage: string;
}

const DDayCounter = ({ year, month, day, eventName, finalMessage }: IDDayCounter) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(year, month - 1, day);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [year, month, day]);

  return (
    <Box className="DDayCounter-wrapper" css={style.wrapper}>
      <div className="date-wrapper">
        <div className="card">
          <div className="desc">DAYS</div>
          <span className="data-days">{timeLeft.days}</span>
        </div>
        <div className="card">
          <div className="desc">&nbsp;</div>
          <span >:</span>
        </div>
        <div className="card">
          <div className="desc">HOUR</div>
          <span className="data-days">{timeLeft.hours}</span>
        </div>
        <div className="card">
          <div className="desc">&nbsp;</div>
          <span >:</span>
        </div>
        <div className="card">
          <div className="desc">MIN</div>
          <span className="data-days">{timeLeft.minutes}</span>
        </div>
        <div className="card">
          <div className="desc">&nbsp;</div>
          <span >:</span>
        </div>
        <div className="card">
          <div className="desc">SEC</div>
          <span className="data-days">{timeLeft.seconds}</span>
        </div>
      </div>
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <p css={style.finalMessage}>{finalMessage}</p>
      ) : (
        <p css={style.finalMessage}>
          {eventName} 앞으로 <b>{timeLeft.days}</b>일 남았습니다.
        </p>
      )}
    </Box>
  )
}

export default DDayCounter