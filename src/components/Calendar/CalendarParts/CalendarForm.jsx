import { useState, useRef, useEffect } from "react";
import { HiColorSwatch } from "react-icons/hi";
import classes from "./CalendarForm.module.css";
import { Form, useParams, useNavigate } from "react-router-dom";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
import { useDispatch } from "react-redux";
import { UiActions } from "../../../store/UiSlice/UiSlice";
import { v4 } from "uuid";
import CalendarTimeSwiper from "./CalendarTimeSwiper";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowLeft } from "react-icons/rx";
import sound from "../../../assets/sounds/ticking.mp3";
import sound1 from "../../../assets/sounds/type.mp3";

const CalendarForm = ({ task }) => {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  // Title
  const [title, setTitle] = useState("");
  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [titleIsFoucsed, setTitleIsFoucsed] = useState(false);
  const titleIsValid = title.trim() !== "";
  const titleInputIsValid = !titleIsValid && titleIsTouched;
  const lableTitle = titleIsValid && titleIsFoucsed;
  // Hours
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");

  // Desciptions
  const [description, setDescription] = useState("");
  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);
  const [descriptionIsFocused, setDescriptionIsFoucsed] = useState(false);
  const descriptionIsValid = description.trim() !== "";
  const descriptionTextareaIsValid =
    !descriptionIsValid && descriptionIsTouched;
  const labelDes = descriptionIsValid && descriptionIsFocused;
  // Color
  const [color, setColor] = useState("45deg,#e50084c2,#492AAE");
  const [selectedColor, setSelectedColor] = useState("45deg,#e50084c2,#492AAE");
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
  // Form Validity
  const formValidity = titleIsValid && descriptionIsValid;

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
    { color: "45deg,#450b0cde,#E60001" },
    {
      color: "45deg, #f9484b80,#fbd72bb3",
    },
    { color: "45deg,#08adde80,#29ED93" },
    { color: "45deg,#20caf76b,#933DF5" },
    { color: "45deg,#e50084c2,#492AAE" },
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

  const pickColorHandler = (e, selectdColor) => {
    setColor(selectdColor);
    setSelectedColor(selectdColor);
  };
  const onBackHandler = () => {
    navigate("..");
  };
  // ON BLUR
  const titleOnBlurHandler = () => {
    setTitleIsTouched(true);
  };

  const descriptionOnBlurHandler = () => {
    setDescriptionIsTouched(true);
  };
  // On Foucs
  const titleOnFoucsHandler = () => {
    setTitleIsFoucsed(true);
  };
  const descriptionOnFoucsHandler = () => [setDescriptionIsFoucsed(true)];
  // Handle Resize

  const handleResize = () => {
    const element = textareaRef.current;

    element.style.height = "auto";
    element.style.height = Math.min(element.scrollHeight, 500) + "px";
  };

  // Validation classes
  const titleLabelClasses = lableTitle
    ? classes.labelActive
    : classes.labelInActive;
  const desLabelClasses = labelDes
    ? classes.labelActive
    : classes.labelInActive;

  const titleInputClasses = !titleInputIsValid
    ? classes["form-container"]
    : `${classes["form-container"]} ${classes.errorInput}`;

  const desciprionInputClasses = !descriptionTextareaIsValid
    ? classes["form-container"]
    : `${classes["form-container"]} ${classes.errorInput}`;

  // Form Submit hander
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!task) {
      setTitleIsTouched(true);
      setDescriptionIsTouched(true);
      if (!titleIsValid || !descriptionIsValid) {
        return;
      }

      // // Form Validitity
      const id = v4();

      const DATE_TASK = {
        date: params.date,
        task: {
          id: id,
          hour,
          min,
          title,
          description,
          color,
        },
      };
      dispatch(tasksActions.addTask(DATE_TASK));

      setTitle("");
      setDescription("");
      setTitleIsTouched(false);
      setDescriptionIsTouched(false);
      dispatch(UiActions.showTasks());
    } else {
      const DATE_TASK = {
        date: params.date,
        task: {
          id: task.id,
          hour,
          min,
          title,
          description,
          color,
        },
      };

      dispatch(tasksActions.updateTask(DATE_TASK));
    }
  };
  useEffect(() => {
    const updateFormToEdit = () => {
      setHour(task.hour);
      setMin(task.min);
      setTitle(task.title);
      setDescription(task.description);
      setColor(task.color);
      setSelectedColor(task.color);
      setTitleIsFoucsed(true);
      setDescriptionIsFoucsed(true);
    };

    if (!task) {
      return;
    } else {
      updateFormToEdit();
    }
  }, [task]);
  return (
    <motion.div
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{
        type: "spring",
      }}
      exit={{ y: 100, opacity: 0 }}
      className={classes["form"]}
    >
      <div className={classes.back}>
        <RxArrowLeft onClick={onBackHandler} />
      </div>
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
              init={task ? task.min : 0}
            />
          </div>
          <div className={classes["form-container"]}>
            <CalendarTimeSwiper
              className="swiper1"
              timeType={hours}
              onChange={onChangeHourHandler}
              init={task ? task.hour : 0}
            />
          </div>
        </div>
        <div className={classes.text}>
          {/* Title */}
          <div className={titleInputClasses}>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={titleChangeHandler}
              onBlur={titleOnBlurHandler}
              onFocus={titleOnFoucsHandler}
            />
            <label className={titleLabelClasses}>عنوان</label>
            <AnimatePresence>
              {titleInputIsValid && (
                <motion.p
                  animate={{
                    y: [-30, 10],
                    opacity: [0, 1],
                  }}
                  transition={{
                    type: "spring",
                  }}
                  exit={{
                    y: -10,
                    opacity: 0,
                  }}
                  className={classes.error}
                >
                  عنوان نباید خالی باشد
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          {/* Text Area */}
          <div className={desciprionInputClasses}>
            <textarea
              ref={textareaRef}
              name="description"
              id="description"
              rows={1}
              value={description}
              onChange={descriptionChangeHandler}
              onBlur={descriptionOnBlurHandler}
              onFocus={descriptionOnFoucsHandler}
              onInput={handleResize}
            ></textarea>
            <label className={desLabelClasses}>توضیح مختصر</label>
            <AnimatePresence>
              {descriptionTextareaIsValid && (
                <motion.p
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                  }}
                  exit={{
                    y: -30,
                    opacity: 0,
                  }}
                  className={classes.error}
                >
                  توضیحات نباید خالی باشد
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          {/* Color */}
          <div className={classes["form-container"]}>
            <HiColorSwatch />
            <div className={classes.colors}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={(e) => pickColorHandler(e, color.color)}
                  className={`${classes.color} ${
                    selectedColor === color.color ? classes.selected : ""
                  }`}
                  style={{ background: `linear-gradient(${color.color})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <button disabled={!formValidity}>
          <span className={classes.btnOverlay}></span>
          {!task ? <span>اضافه کارکردن</span> : <span>اصلاح کارکردن</span>}
        </button>
      </Form>
    </motion.div>
  );
};

export default CalendarForm;
