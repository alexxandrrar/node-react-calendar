export const formatDate = (selectedDay: Date, selectedTime: string | Date) => { 
    const dateArray = selectedDay.toString().split(' ')
    dateArray[4] = selectedTime as string
    return new Date(dateArray.join(' '))
}  