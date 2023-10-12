import React, { useState, useEffect } from "react";
import moment from "moment";
import data from './data.json';

function TimeTable() {
    const [courses, setCourses] = useState([]);
    const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri"];
    const startHour = 10;
    const endHour = 18;
    const step = 2;
    const hours = [];
    const TEST_BOOL = false;
    let currentDay;
    let currentHour;

    if (TEST_BOOL === true) {
        currentDay = 1;
        currentHour = 12;
    } else {
        currentDay = moment().day();
        currentHour = moment().hour();
    }

    for (let i = startHour; i <= endHour; i += step) {
        hours.push(i);
    }

    useEffect(() => {
        if (data)
            setCourses(data);
    }, []);

    // console.log(courses);

    if (currentDay > 5) {
        return (
            <div>
                <h1>
                    {"Nu se fac cursuri astăzi"}
                </h1>
            </div>
        );
    }

    return (
        <div className="">
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th></th>
                        {hours.map(hour => (
                            <th key={hour} className={hour === currentHour || hour === currentHour - 1 ? "hour highlight" : "hour"}>
                                {hour}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, dayIndex) => (
                        <tr key={day}>
                            <td className={dayIndex + 1 === currentDay ? "day highlight" : "day"}>{day}</td>
                            {hours.map((hour, hourIndex) => {
                                // Find courses for the current day and hour
                                const course = courses.find(
                                    c => c.day === day && hour >= c.startHour && hour < c.startHour + 2
                                );

                                return (
                                    <td
                                        key={hour}
                                        className={(dayIndex + 1 === currentDay && hour === currentHour) || (dayIndex + 1 === currentDay && hour === currentHour - 1) ? "highlight" : ""}
                                    >
                                        <div className="row">
                                            <p className="col-5 text-start">
                                                {course ? course.courseName : ""}
                                            </p>
                                            <p className="col-5 text-end">
                                                {course ? course.subgroup : ""}
                                            </p>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="row">
                                            <p className="col-5 text-start">
                                                {course ? course.prof : ""}
                                            </p>
                                            <p className="col-5 text-end">
                                                {course ? course.loc : ""}
                                            </p>
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TimeTable;
