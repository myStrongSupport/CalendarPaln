import { useState, useRef } from "react";
import { HiColorSwatch } from "react-icons/hi";
import classes from "./CalendarForm.module.css";
import { Form, useParams } from "react-router-dom";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
import { useDispatch } from "react-redux";
import CalendarTimeSwiper from "./CalendarTimeSwiper";
import { motion } from "framer-motion";
import sound from "../../../assets/sounds/ticking.mp3";
import sound1 from "../../../assets/sounds/type.mp3";

const CalendarForm = () => {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const params = useParams();
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Get Housrs
  const hours = Array.from({ length: 24 }, (_, index) => {
    const hour = index.toString().padStart(2, "0");
    return { value: hour };
  });
  // Get Minutes
  const minutes = Array.from({ length: 60 }, (_, index) => {
    const minute = index.toString().padStart(2, "0");
    return { value: minute };
  });

  // Months
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
  // Get DAy month year from params
  const dateParams = params.date;

  const dayOfWeek = dateParams.split("_")[3];
  const day = dateParams.split("_")[2];
  const month = dateParams.split("_")[1];
  const year = dateParams.split("_")[0];

  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "yellow" },
    { color: "orange" },
  ];
  // Handlers
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    const audio = new Audio(sound1);
    audio.play();
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
    const audio = new Audio(sound1);
    audio.play();
  };

  const onChangeHourHandler = (value) => {
    if (value === hour) {
      return;
    } else {
      setHour(value);
      const audio = new Audio(sound);
      audio.play();
    }
  };
  const onChangeMinHandler = (value) => {
    if (value === min) {
      return;
    } else {
      setMin(value);
      const audio = new Audio(sound);
      audio.play();
    }
  };

  // Handle Resize

  const handleResize = () => {
    const element = textareaRef.current;

    element.style.height = "auto";
    element.style.height = Math.min(element.scrollHeight, 500) + "px";
  };

  // Form Submit hander
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Form Validitity
    let formValidity =
      title.trim().length === 0 || description.trim().length === 0;
    if (formValidity) {
      console.log("form is not Valid");
      return;
    } else {
      const DATE_TASK = {
        date: params.date,
        task: {
          hour,
          min,
          title,
          description,
        },
      };
      dispatch(tasksActions.addTask(DATE_TASK));
    }
  };
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      className={classes["form"]}
    >
      {/* Header */}
      <div className={classes["form-header"]}>
        <h4>{dayOfWeek}</h4>
        <p>
          {day} {shamsiMonths[month - 1]} {year}
        </p>
      </div>
      {/* Form */}
      <Form onSubmit={onSubmitHandler} className={classes["main-form"]}>
        {/* Time */}
        <div className={classes.time}>
          <div className={classes["form-container"]}>
            <CalendarTimeSwiper
              className="swiper2"
              timeType={minutes}
              onChange={onChangeMinHandler}
            />
          </div>
          <div className={classes["form-container"]}>
            <CalendarTimeSwiper
              className="swiper1"
              timeType={hours}
              onChange={onChangeHourHandler}
            />
          </div>
        </div>
        {/* Title */}
        <div className={classes.text}>
          <div className={classes["form-container"]}>
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={titleChangeHandler}
            />
            <label>عنوان</label>
            <i></i>
          </div>
          {/* Text Area */}
          <div className={classes["form-container"]}>
            <textarea
              ref={textareaRef}
              name="description"
              id="description"
              required
              onChange={descriptionChangeHandler}
              onInput={handleResize}
            ></textarea>
            <label>توضیح مختصر</label>
            <i></i>
          </div>
          <div className={classes["form-container"]}>
            <HiColorSwatch />
            <div className={classes.colors}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={classes.color}
                  style={{ background: color.color }}
                ></div>
              ))}
            </div>
            .
          </div>
        </div>
        <button>
          <span>اضافه کارکردن</span>
        </button>
      </Form>
    </motion.div>
  );
};

export default CalendarForm;
