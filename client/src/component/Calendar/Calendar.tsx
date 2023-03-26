import React, { useContext } from "react";
import { DayPicker } from "react-day-picker";
import { DateContext } from "../../contexts/DateContext";


export const Calendar = () => {
  const { selectedDay, setSelectedDay } = useContext(DateContext)
  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
  );
};
