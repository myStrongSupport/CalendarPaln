import React, { useState } from "react";
import classes from "./RecentlyTasks.module.css";
import RecentTask from "./RecentTask";

const defaulText = [
  {
    title: "مدیریت زمان",
    paragraph:
      "این ویژگی به شما امکان می‌دهد تا زمان خود را به بهترین شکل مدیریت کنید. شما می‌توانید وظایف، رویدادها و برنامه‌های خود را به تقویم اضافه کرده و آنها را در روزها، هفته‌ها و ماه‌ها برنامه‌ریزی کنید. این قابلیت به شما کمک می‌کند تا برنامه‌های خود را به صورت جزئی و دقیق برنامه‌ریزی کنید و زمان خود را بهینه کنید.",
    id: "d1",
    color: "red",
  },
  {
    title: "الویت‌دهی",
    paragraph:
      " این ویژگی به شما امکان می‌دهد برنامه‌ها و وظایف خود را بر اساس اولویت‌ها مرتب کنید. شما می‌توانید برای هر وظیفه یا برنامه الویتی تعیین کنید و آنها را بر اساس اولویت به تقویم اضافه کنید. این قابلیت به شما کمک می‌کند تا برنامه‌های مهم‌تر و ضروری‌تر را از برنامه‌های کم‌اهمیت‌تر تمایز دهید و برنامه‌ریزی خود را بر اساس الویت‌ها انجام دهید.",
    id: "d2",
    color: "yellow",
  },
  {
    title: "برنامه‌ریزی شخصی",
    paragraph:
      " این ویژگی به شما امکان می‌دهد تا تقویم را به شخصیت خود و نیازهای خاصتان سازگار کنید. شما می‌توانید رنگ‌ها، برچسب‌ها، دسته‌بندی‌ها و سایر ویژگی‌ها را برای برنامه‌ها و رویدادها تنظیم کنید تا بهتر بتوانید آنها را شناسایی کنید و برنامه‌ریزی کنید. این قابلیت به شما امکان می‌دهد تا تقویم را به شیوه‌ای شخصی سازی کنید که با نیازها و سلیقه شخصی شما همخوانی داشته باشد.",
    id: "d3",
    color: "orange",
  },
];
const RecentlyTasks = (props) => {
  const [RecentText, setRecentText] = useState(defaulText);

  const Items = RecentText.map((item, index) => {
    return (
      <RecentTask
        title={item.title}
        key={item.id}
        id={index}
        color={item.color}
        paragraph={item.paragraph}
      />
    );
  });
  return <ul className={classes.list}>{Items}</ul>;
};

export default RecentlyTasks;
