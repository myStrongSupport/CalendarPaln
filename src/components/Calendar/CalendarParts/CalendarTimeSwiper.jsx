import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import classes from "./CalendarTimeSwiper.module.css";

const CalendarTimeSwiper = ({ timeType, onChange, className }) => {
  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex].firstChild.innerText;

    onChange(activeSlide);
  };

  const time = timeType.map((item) => (
    <SwiperSlide key={item.value}>
      {({ isActive }) => (
        <div
          value={item.value}
          className={isActive ? classes.hours : classes.notActive}
        >
          {item.value}
        </div>
      )}
    </SwiperSlide>
  ));

  // Custom navigation styles
  const customNavigationStyles = {
    color: "red", // Customize the color of navigation buttons
  };

  return (
    <div>
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        speed={90}
        loop={true}
        navigation={{
          nextEl: `.${className}-next`, // Define the class for the next button
          prevEl: `.${className}-prev`, // Define the class for the previous button
          ...customNavigationStyles, // Apply custom navigation styles
        }}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        className={`time ${classes["time-container"]}`}
      >
        {time}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className={`${className}-next ${classes.next}`}>
        <AiOutlineRight />
      </div>
      <div className={`${className}-prev ${classes.prev}`}>
        <AiOutlineLeft />
      </div>
    </div>
  );
};

export default CalendarTimeSwiper;
