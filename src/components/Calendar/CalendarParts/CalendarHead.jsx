import { useEffect, useState, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import classes from "./CalendarHead.module.css";
// Import Swiper styles
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { CalendarActions } from "../../../store/CalendarSlice/CalendarSlice";
const CalendarHead = () => {
  const [isInit, setIsInit] = useState(true);
  const month = useSelector((state) => state.cal.month);
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(month);

  const shamsiMonths = [
    { name: "فروردین", value: 0 },
    { name: "اردیبهشت", value: 1 },
    { name: "خرداد", value: 2 },
    { name: "تیر", value: 3 },
    { name: "مرداد", value: 4 },
    { name: "شهریور", value: 5 },
    { name: "مهر", value: 6 },
    { name: "آبان", value: 7 },
    { name: "آذر", value: 8 },
    { name: "دی", value: 9 },
    { name: "بهمن", value: 10 },
    { name: "اسفند", value: 11 },
  ];

  useEffect(() => {
    if (!isInit) {
      return;
    } else {
      setIsInit(false);
      return;
    }
  }, [isInit]);

  useEffect(() => {
    dispatch(CalendarActions.monthChange(activeSlide));
    dispatch(CalendarActions.rendarCalendarPersian());
  }, [activeSlide, dispatch]);

  const onSwiperChangeHandler = useCallback(
    (swiper) => {
      if (!isInit) {
        const newSlide = swiper.realIndex;
        setActiveSlide(() => newSlide);
      }
    },
    [isInit]
  );

  return (
    <div className={classes.head}>
      <div className={classes.months}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={1000}
          centeredSlides={true}
          className="mySwiper"
          initialSlide={month}
          onActiveIndexChange={onSwiperChangeHandler}
        >
          {shamsiMonths.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div className={isActive ? classes.month : classes.notActive}>
                    {item.name}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CalendarHead;
