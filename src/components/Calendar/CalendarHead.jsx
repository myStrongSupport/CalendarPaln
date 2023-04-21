import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import classes from "./CalendarHead.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CalendarActions } from "../../store/CalendarSlice/CalendarSlice";
const CalendarHead = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.cal);
  const shamsiMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const monthHandler = (type) => {
    dispatch(CalendarActions.monthChange(type));
    dispatch(CalendarActions.rendarCalendarPersian());
  };

  return (
    <div className={classes.head}>
      <p>{`${shamsiMonths[time.month]} ${time.year}`}</p>
      <div className={classes.icons}>
        <AiOutlineRight onClick={monthHandler.bind(null, "prev")} />
        <AiOutlineLeft onClick={monthHandler.bind(null, "next")} />
      </div>
    </div>
  );
};

export default CalendarHead;
