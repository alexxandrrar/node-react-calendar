import { createContext } from 'react';

export interface DateContextProps {
    selectedDay: Date | undefined;
    setSelectedDay: (value: Date | undefined) => void;
    selectedStartTime: string | Date;
    setSelectedStartTime: (value: string | Date) => void;
    selectedEndTime: string | Date;
    setSelectedEndTime: (value: string | Date) => void;
    content: string | null;
    setContent : (value: string | null) => void;
} 

export const DateContext = createContext({} as DateContextProps);