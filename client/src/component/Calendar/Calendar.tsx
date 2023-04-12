import React, { useContext, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { DateContext } from "../../contexts/DateContext";
import { CalendarInformation } from "../CalendarInformation/CalendarInformation";
import axios from "axios";
import style from './Calendar.module.scss'

interface IDataProps{
  content: string;
  startDateTime: Date;
  endDateTime: Date;
  id: string;
}
const bookedStyle = { border: '#fcee6d 1px dashed' };

export const Calendar = () => {
  const [bookedDays, setBookedDays] = useState<Date[]>([])
  const { selectedDay, setSelectedDay } = useContext(DateContext)

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/appointments');
        setBookedDays(data.map((appointment: IDataProps) => new Date(appointment.startDateTime)))
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    response();
  }, []);

  return (
    <div className={style.container}>
      <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} modifiers={{ booked: bookedDays }}
        modifiersStyles={{ booked: bookedStyle }}/>
      <CalendarInformation />
    </div>
  );
};
