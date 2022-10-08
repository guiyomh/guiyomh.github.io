import React, {useRef, useEffect, useState, useContext} from 'react';
import clsx from 'clsx';
import { format } from "date-fns";
import { Exp } from "../model";
import { PositionContext, PositionContextType } from "../context";
import styles from './styles.module.scss';

function calculatePosition(leftPosition: number, offsetWidth: number) : number {
    return (leftPosition * 100) / offsetWidth;
}

function LabelElement({ date }: { date: string }): JSX.Element {
    const d = new Date(date)
    return (
        <div className={clsx(styles.popupSpan)}>
            <span className={clsx(styles.month)}>{ format(d,'MMM')}</span>
            <span className={clsx(styles.year)}>{ format(d,'yyyy')}</span>
        </div>
    );
}

function Milestone({ index, left, date, offsetWidth }: { index: number, left: number, date: string, offsetWidth: number }): JSX.Element {
    const { position } = useContext(PositionContext) as PositionContextType;
    console.log(`position: ${position} vs index: ${index}`)
    return (
        <div className={clsx(styles.milestone,styles.active , position===index? styles.current: "")} style={{left: `${Math.min(95, calculatePosition(left, offsetWidth))}%`
        }} >
            <LabelElement date={ date } />
        </div>
    );
}

function daysBetween(startDate: string, endDate: string): number {
    // The .replace() is necessary in order to avoid issues in the Firefox browser.
    const pointA = new Date(startDate.replace(/-/g,'/'));
    const pointB = new Date(endDate.replace(/-/g,'/'));
    return Math.round(Math.abs(+pointA - +pointB) / 8.64e7);
}



export default function Timeline({ experiences }: { experiences: Exp[] }): JSX.Element {
    const timelineRef = useRef<HTMLHeadingElement>(null)
    const [large, setLarge] = useState(false);

    function Line({ experiences }:{ experiences: Exp[] }): JSX.Element {
        const today = new Date()

        let dates: string[] = experiences.map(experience => experience.startAt)
        dates.push(`${today.getMonth() + 1}-${today.getDay()}-${today.getFullYear()}`)

        if (dates.length < 2) {
            return
        }

        const days: number = daysBetween(dates[0], dates[dates.length - 1]);
        const oneDayInPixels: number = timelineRef.current.offsetWidth/ days;
        console.log(days,timelineRef.current.offsetWidth, oneDayInPixels)

        return (
            <div className={clsx(styles.line)}>
                {dates.map((date, idx) => {
                    let periodInDays: number;
                    let periodWidth: number = 0;
                    if (idx > 0) {
                        periodInDays = daysBetween(dates[0], date)
                        periodWidth = periodInDays * oneDayInPixels;
                    }
                    return <Milestone
                        key={idx}
                        index={idx}
                        left={periodWidth}
                        date={date}
                        offsetWidth={timelineRef.current.offsetWidth}
                    />
                })}
            </div>
        )
    }

    if (experiences.length < 0) {
        return (<></>);
    }
    useEffect(() => {
        if (timelineRef.current) {
            setLarge(true)
        }
    },[])

    return (
        <div className={clsx(styles["bottom-container"])} ref={timelineRef}>
            <div className={clsx(styles.lineCont)}>
                { large && <Line experiences={experiences} /> }
            </div>
            <div className={clsx(styles.mainCont)}></div>
        </div>
    )
}