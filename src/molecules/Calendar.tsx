import Box from "@mui/material/Box";
import style from "./Calendar.style"

interface ICalendar {
  year: number;
  month: number;
  day: number;
  holidays: string[];
}

const Calendar = ({ year, month, day, holidays }: ICalendar) => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  const startDay = startDate.getDay();
  const totalDays = endDate.getDate();

  const isHoliday = (date: number) => {
    const checkDate = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
    console.log(checkDate, holidays, holidays.includes(checkDate))
    return holidays.includes(checkDate);
  };



  const generateCalendar = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }
    // 각 날짜별 셀 생성
    for (let d = 1; d <= totalDays; d++) {
      const isSun = (startDay + d - 1) % 7 === 0;
      const isHol = isHoliday(d);
      days.push(
        <td
          key={d}
          className={isSun || isHol ? "Holiday" : d === day ? "D-day" : undefined}
        >
          {d}
        </td>
      );
    }
    // 배열을 행으로 나누기
    const rows = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(<tr key={`row-${i}`}>{days.slice(i, i + 7)}</tr>);
    }
    return rows;
  };


  return (
    <Box className="Calendar-wrapper" css={style.wrapper}>
      <table css={style.calendar}>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {generateCalendar()}
        </tbody>
      </table>
    </Box>
  )
}

export default Calendar