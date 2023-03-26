import { useContext } from "react";
import { Dialog } from "@mui/material";
import { Appointment } from "../Appointment/Appointment";
import { DateContext } from "../../contexts/DateContext";

interface IAppointmentModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const AppointmentModal: React.FC<IAppointmentModalProps> = ({
  open,
  setOpen,
}) => {
  const { setContent } = useContext(DateContext)
  const handleClose = () => {
    setOpen(false);
    setContent('')
  };
  return (
    <Dialog open={open}>
      {open ? <button onClick={handleClose}>X</button> : null}
      <Appointment />
    </Dialog>
  );
};
