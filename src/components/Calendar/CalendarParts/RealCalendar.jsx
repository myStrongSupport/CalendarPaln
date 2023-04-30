import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";
import classes from "./RealCalendar.module.css";
const RealCalendar = () => {
  return (
    <div className={classes.calendar}>
      <CalendarHead />
      <CalendarBody />
    </div>
  );
};

export default RealCalendar;
