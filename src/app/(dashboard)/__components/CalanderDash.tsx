"use client";

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Holidays from "date-holidays";
import moment from 'moment';


type TTileContent = {
    date: Date;
    view: string;
}

type Holiday = {
    date: string;
    start: Date;
    end?: Date;
    name: string;
    type: string;
};

const CalanderDash = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    useEffect(() => {
        const hd = new Holidays("BD"); // বাংলাদেশ
        const holidayList = hd.getHolidays(2025); // ২০২৫ সালের ছুটি

        setHolidays(holidayList);
    }, []);
    // console.log(holidays)

    const markedDates = holidays.map(
        (holiday) => (moment(holiday.date).format().split("T")[0])
    ); // মার্কার দেখানোর তারিখ
    // console.log(markedDates)

    const tileContent = ({date, view }: TTileContent) => {
        const localDate = date.toLocaleDateString("en-CA"); // ISO তারিখ ফরম্যাট (YYYY-MM-DD)

        if (view === "month" && markedDates?.includes(localDate)) {
            return <span style={{ color: "red" }} className='animate-ping'>●</span>;
        }
        return null;
    };


    return (
        <div className="w-full bg-white h-[200px] rounded-md">
            <Calendar
                className='bg-red-500 h-[200px] rounded-md overflow-y-scroll'
                value={new Date()}
                tileContent={tileContent}
                calendarType='islamic'
            />
        </div>
    );
};

export default CalanderDash;