import { TextField } from "@mui/material"
import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { TimeSelect } from "../TimeSelect/TimeSelect";
import { format } from "date-fns";
import { formatDate } from "../../utils/formatDate";

import style from './Appointment.module.scss'
import axios from "axios";

interface IDataProps{
  content: string;
  startDateTime: Date;
  endDateTime: Date;
}

export const Appointment = () => {
  const { selectedStartTime, setSelectedStartTime, selectedEndTime, setSelectedEndTime, selectedDay, content, setContent} = useContext(DateContext)
  const day = selectedDay ? selectedDay as Date : Date.now() as unknown as Date
  
  const data: IDataProps = {
    content: content as string,
    startDateTime: formatDate(day, selectedStartTime),
    endDateTime: formatDate(day, selectedEndTime)
  }   

  const onCreateAppointmentHandler = async () => {
    try {
      await axios.post('http://localhost:5000/api/appointment', data)
      console.log('success')
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    setContent('')
  };

    return(
    <div className={style.container}>
      <div className={style.timeBox}>
        <div>{format(day, "PPP")}</div>
        <div>
          <p>Start:</p>
          <TimeSelect value={selectedStartTime} setValue={setSelectedStartTime}/>
        </div>
        <div>
          <p>End:</p>
          <TimeSelect value={selectedEndTime} setValue={setSelectedEndTime}/>
        </div>
      </div>
        <TextField
          label="Appointment"
          fullWidth
          multiline
          rows={8}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button onClick={onCreateAppointmentHandler}>Create an appointment</button>
    </div>)
}