import React, { useState, useEffect } from "react";
import moment from "moment"; 
// import data from './data.json';

function TimeTable() {
  const [courses, setCourses] = useState([]);
  const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri"];
  const startHour = 8;
  const endHour = 18;
  const step = 2;
  const hours = [];

  for (let i = startHour; i <= endHour; i += step) {
    hours.push(i);
  }

  const currentDay = moment().day();
  const currentHour = moment().hour();

  useEffect(() => {
    // Fetch the JSON data
    // In a real application, you would replace the URL with the actual endpoint
    fetch("./data.json")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  // console.log(courses);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {hours.map(hour => (
            <th key={hour} className={hour === currentHour || hour === currentHour - 1 ? "highlight" : ""}>
              {hour}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days.map((day, dayIndex) => (
          <tr key={day}>
            <td className={dayIndex + 1 === currentDay ? "highlight" : ""}>{day}</td>
            {hours.map((hour, hourIndex) => {
              // Find courses for the current day and hour
              const course = courses.find(
                c => c.day === day && hour >= c.startHour
              );

              return (
                <td
                  key={hour}
                  className={(dayIndex + 1 === currentDay && hour === currentHour) || (dayIndex + 1 === currentDay && hour === currentHour - 1) ? "highlight" : ""}
                >
                  {course ? course.courseName : ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimeTable;
