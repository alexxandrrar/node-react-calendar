import { format } from "date-fns";
import { useContext, useState } from "react";
import { DateContext } from "../../contexts/DateContext";
import { AppointmentModal } from "../AppointmentModal/AppointmentModal";

import style from "./CalendarInformation.module.scss"

export const CalendarInformation: React.FC = () => {
  const {selectedDay} = useContext(DateContext)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {selectedDay ? (
        <p className={style.text}>Selected date: {format(selectedDay, "PPP")}</p>
      ) : (
        <p className={style.text}>Current date: {format(Date.now(), "PPP")}</p>
      )}
      <button className={style.button} onClick={handleClickOpen}>Create new appointment</button>
      <AppointmentModal setOpen={setOpen} open={open}></AppointmentModal>
    </div>
  );
};
