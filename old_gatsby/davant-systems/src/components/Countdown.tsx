import React, { useState, useEffect } from 'react';
import type { HeadFC, PageProps } from "gatsby";

type CountdownProps = {
    targetDate: string; // expecting a date string like '2024-02-01'
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const targetDateTimeZone = new Date(targetDate + 'T00:00:00-08:00'); // PT standard time (UTC-8)
        const difference = targetDateTimeZone - new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // Use setTimeout to update the countdown every second
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the timer on component unmount or before setting a new timer
        return () => clearTimeout(timer);
    }); // Removed the dependency array to let it run independently

    return (
        <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
            <div className="flex">
                <span className="countdown font-mono text-md mr-1">
                    <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
                </span>
                <span className="text-xs">days</span>
            </div>
            <div className="flex">
                <span className="countdown font-mono text-md mr-1">
                    <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
                </span>
                <span className="text-xs">hours</span>
            </div>
            <div className="flex">
                <span className="countdown font-mono text-md mr-1">
                    <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
                </span>
                <span className="text-xs">min</span>
            </div>
            <div className="flex">
                <span className="countdown font-mono text-md mr-1">
                    <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
                </span>
                <span className="text-xs">sec</span>
            </div>
        </div>
    );
};

export default Countdown;
