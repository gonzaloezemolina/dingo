import React, { useState } from 'react';
import { getCalendarDays, getMonthName } from '../../utils/calendarUtils';
import { MdOutlineCalendarToday } from 'react-icons/md'; 
import './Calendario.css'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = getCalendarDays(year, month);
  const monthName = getMonthName(month);

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2><MdOutlineCalendarToday/> {monthName} {year}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'].map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`calendar-day ${day === null ? 'empty' : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

