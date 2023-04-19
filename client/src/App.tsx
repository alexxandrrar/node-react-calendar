import React, { useState } from 'react';
import { DateContext } from './contexts/DateContext';
import { Calendar } from './component/Calendar/Calendar';

import 'react-day-picker/dist/style.css';
import './App.css';


function App() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();
  const [selectedStartTime, setSelectedStartTime] = useState<string | Date>('00:00')
  const [selectedEndTime, setSelectedEndTime] = useState<string | Date>('23:00')
  const [content, setContent] = useState< string | null>('')
  return (
    <DateContext.Provider value={{
      selectedDay, setSelectedDay, selectedStartTime, setSelectedStartTime, selectedEndTime, setSelectedEndTime, content, setContent
    }}>
      <div className="App">
        <Calendar />
    </div>
    </DateContext.Provider>
  );
}

export default App;
