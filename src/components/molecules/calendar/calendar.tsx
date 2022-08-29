import { setDateDiff, setGoalDate } from "bll/slices/amount";
import { Image,  } from "components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ImageTypes } from "utils/constants";
//styles
import styles from "./calendar.module.scss";



export const Calendar = () => {
  const [date] = useState(new Date())
  const [month, setMonth] = useState(date.getMonth())
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let currentMonth = months.find((item,index)=> index === month)
  let currentYear = date.getFullYear()
  const dispatch = useDispatch();


  const monthDiff = (d1:Date, d2:Date) => {
    let diff;
    diff = (d2.getFullYear() - d1.getFullYear()) * 12;
    diff -= d1.getMonth() ;
    diff += d2.getMonth();
    return diff <= 0 ? 0 : diff;
}



  useEffect(()=>{
    date.setMonth(month)
    if(month > 11){
      setMonth(0)
    }
    if (month>12){
      date.setFullYear(date.getFullYear()+1)
    }
    if(month < 0){
      setMonth(11)
    }
    const dateDiff = monthDiff(new Date(),date)
    dispatch(setDateDiff(dateDiff))
    dispatch(setGoalDate(`${currentMonth} ${currentYear}`))
  },[month ,date,dispatch])



  return (
    <div className={styles.calendarBody}>
      <button className={styles.button} onClick={()=>setMonth(month-1)}>
        <Image type={ImageTypes.arrow}/>
      </button>
      <div className={styles.dateSection}>
          <p className={styles.dateMonth}>{currentMonth}</p>
          <p  className={styles.dateYear}>{currentYear}</p>
      </div>
      <button className={styles.button} onClick={()=>setMonth(month+1)}>
        <Image type={ImageTypes.arrowRight}/>
      </button>
    </div>
  );
};
