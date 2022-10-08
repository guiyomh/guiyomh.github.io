import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FaCameraRetro, FaCode, FaMountain } from "react-icons/fa";
import { IconContext } from "react-icons";

function calcAge(dateString: string): number {
    const birthday: Date = new Date(dateString);
    const diff: number = Date.now() - birthday.getTime();
    const ageDate: Date = new Date(diff);

    return Math.abs(ageDate.getFullYear() - 1970);
}

export default function AboutMe():  JSX.Element {
    return (
        <section className={clsx(styles.about)} itemScope itemType="https://schema.org/AboutPage">
            <div className={clsx(styles["about-container"])} itemScope itemType="https://schema.org/Person">
                <meta itemProp="jobTitle" content="Full-stack Developer" />
                <meta itemProp="knowsLanguage" content="en" />
                <meta itemProp="knowsLanguage" content="fr" />
                <meta itemProp="nationality" content="French" />
                <meta itemProp="gender" content="Male" />
                <meta itemProp="email" content="guillaume.camus@gmail.com" />
                <meta itemProp="birthDate" content="1982-04-29" />
                <div className={clsx(styles["first-column"])}>
                    <h1 id='aboutme'>About me</h1>
                    <h2><span itemProp="name">Guillaume CAMUS</span></h2>
                    <p className={clsx(styles["years-old"])}>
                        <span itemProp="yearsOld">{calcAge("1982-04-29")}</span>
                        &nbsp;<span>years old</span>
                    </p>
                    <p className={clsx(styles.text)} itemProp="summary">
                        I like to design things and check if the design is viable and fits the needs.
                        I am curious, I like to learn new things. I consider computer science as a tool
                        in constant evolution. I’m passionate about technology and automation,
                        I've always been looking to improve my work.
                    </p>
                    <div className={clsx(styles.hobbies)}>
                        <h3>Hobbies</h3>
                        <IconContext.Provider value={{ className: clsx(styles.icon) }}>
                            <span itemProp='hobby'><FaCameraRetro title="photography" /></span>
                            <span itemProp='hobby'><FaCode title="programming" /></span>
                            <span itemProp='hobby'><FaMountain title="hiking" /></span>
                        </IconContext.Provider>
                    </div>
                </div>
                 <div className={clsx(styles["second-column"])}>
                    <div className={clsx(styles["profile-picture"])}></div>
                    <div className={clsx(styles["social-media"])}>

                    </div>
                </div>
            </div>
        </section>
    )
}