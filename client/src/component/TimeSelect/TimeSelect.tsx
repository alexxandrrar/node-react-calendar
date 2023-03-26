import TimePicker, { TimePickerValue } from "react-time-picker";

interface ITimeSelectProps {
  value: TimePickerValue;
  setValue: (value: TimePickerValue) => void;
}

export const TimeSelect: React.FC<ITimeSelectProps> = ({ value, setValue }) => {
  return <TimePicker disableClock={true} onChange={setValue} value={value} />;
};
