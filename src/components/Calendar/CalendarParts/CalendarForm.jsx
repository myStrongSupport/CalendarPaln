import { useState } from "react";
import { HiColorSwatch } from "react-icons/hi";
import classes from "./CalendarForm.module.css";
import { Form, useParams } from "react-router-dom";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
import { useDispatch } from "react-redux";
import CalendarTimeSwiper from "./CalendarTimeSwiper";
const CalendarForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hours = Array.from({ length: 24 }, (_, index) => {
    const hour = index.toString().padStart(2, "0");
    return { value: hour };
  });

  const minutes = Array.from({ length: 60 }, (_, index) => {
    const minute = index.toString().padStart(2, "0");
    return { value: minute };
  });

  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
    { color: "yellow" },
    { color: "orange" },
  ];
  // Handlers
  const hourChangeHandler = (e) => {
    setHour((prev) => e.target.value);
  };
  const minChangeHandler = (e) => {
    setMin((prev) => e.target.value);
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
    <div className={classes["form"]}>
      <div className={classes["form-header"]}>
        <h4>Monday</h4>
        <p>January 03 2023</p>
      </div>
      <Form onSubmit={onSubmitHandler} className={classes["main-form"]}>
        <div className={classes.time}>
          <div className={classes["form-container"]}>
            <CalendarTimeSwiper className="swiper1" timeType={hours} />
          </div>
          <div className={classes["form-container"]}>
            <CalendarTimeSwiper className="swiper2" timeType={minutes} />
          </div>
        </div>
        <div className={classes.text}>
          <div className={classes["form-container"]}>
            <input
              type="text"
              name="title"
              id="title"
              onChange={titleChangeHandler}
            />
            <label>عنوان</label>
            <i></i>
          </div>
          <div className={classes["form-container"]}>
            <textarea
              name="description"
              id="description"
              onChange={descriptionChangeHandler}
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
          </div>
        </div>
        <button>اضافه کردن کار</button>
      </Form>
    </div>
  );
};

export default CalendarForm;
