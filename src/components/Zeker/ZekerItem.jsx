import classes from "./ZekerItem.module.css";
const ZekerItem = (props) => {
  return (
    <li className={classes["zeker-item"]}>
      <div className={classes["zeker-item_day"]}>{props.day}</div>
      <div className={classes["zeker-item_mention"]}>{props.mention}</div>
    </li>
  );
};

export default ZekerItem;
