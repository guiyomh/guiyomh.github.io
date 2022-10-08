import React, {useRef,useState, useContext} from 'react';
import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { format } from "date-fns";
import { Parser } from 'html-to-react'
import Timeline from "./Timeline";

import styles from './styles.module.scss';
import { Exp } from "./model";
import { PositionContext, PositionContextType } from "./context";



const ExpList: Exp[] = [
    {
        "id": 1,
        "position": 1,
        "startAt": "09-01-2004",
        "endAt": "10-01-2006",
        "companyName": "Renault",
        "website": "https://www.renaultgroup.com/",
        "logo": "/img/experience/logo/renault.png",
        "city": "Le plessis Robinsson",
        "country": "France",
        "role": "Digital Flow Technician",
        "description": "Development of an internal online store for the management of personalized stationery. Consultant in collaborative publishing and document security in companies.",
        "technologies": [
            "PHP", "Zend Framework","HTML", "CSS", "Javascript", "jQuery", "AJAX", "SOAP", "SVN", "SQL", "MySQL", "Windows"
        ],
        "backgroundUrl": "/img/experience/renault.png"
    },
    {
        "id": 2,
        "position": 2,
        "startAt": "10-01-2006",
        "endAt": "03-01-2007",
        "companyName": "Vozavi",
        "logo": "/img/experience/logo/vozavi.png",
        "city": "Paris",
        "country": "France",
        "role": "Web developer",
        "description": "Vozavi offers 33 specialized comparators to allow you to choose the right products and services at the best price.",
        "technologies": [
            "PHP", "Java", "HTML", "CSS", "Javascript", "jQuery", "SSH", "SSL", "Linux"
        ],
        "backgroundUrl": "/img/experience/concorde.png"
    },
    {
        "id": 3,
        "position": 3,
        "startAt": "03-01-2007",
        "endAt": "08-01-2013",
        "companyName": "Modis",
        "website": "https://www.modisfrance.fr/",
        "logo": "/img/experience/logo/modis.png",
        "city": "Nanterre",
        "country": "France",
        "role": "Service Center Manager",
        "description": "blabla.",
        "technologies": [
            "Magento 1.X", "PHP", "Zend Framework", "PERL", "JAVA", "C", "HTML", "CSS",
            "CSS3", "Javascript", "jQuery", "SOAP", "SVN", "Payment Services", "SSH", "SSL", "Linux",
            "Oracle", "MySQl", "REST", "Flash"
        ],
        "backgroundUrl": "/img/experience/defense.png"
    },
    {
        "id": 4,
        "position": 4,
        "startAt": "09-01-2013",
        "endAt": "05-01-2018",
        "companyName": "Infogene",
        "website": "https://www.infogene.fr/",
        "logo": "/img/experience/logo/infogene.png",
        "city": "Neuilly-sur-Seine",
        "country": "France",
        "role": "Consultant / Software Architect",
        "description": "blabla.",
        "technologies": [
            "Magento 1.X", "PHP", "Zend Framework", "PERL", "JAVA", "C", "HTML", "CSS",
            "CSS3", "Javascript", "jQuery", "SOAP", "SVN", "Payment Services", "SSH", "SSL", "Linux",
            "Oracle", "MySQl", "REST", "Flash"
        ],
        "backgroundUrl": "/img/experience/paris.png"
    },
    {
        "id": 5,
        "position": 5,
        "startAt": "05-01-2018",
        "companyName": "ManoMano",
        "website": "https://www.manomano.fr/",
        "logo": "/img/experience/logo/manomano.png",
        "city": "Paris",
        "country": "France",
        "role": "Quality Engineer",
        "description": "I'm in charge of improving the developer ecosystem. The goal is to reduce the friction and time wasted due to an ecosystem whose bricks may not fit together well to improve the developer experience. I contribute to the implementation of tools for the development environment. I contribute to the maintenance of the CI and CD pipelines. I develop training on best practices and tool usage. I assist developers in the start-up of their projects or during the implementation of features. I develop utilities to automate processes (changelog generation, openapi). I do technology watch and I evaluate some discoveries to assess their impact on the production chain.",
        "technologies": [
            "Magento 1.X", "PHP", "Zend Framework", "PERL", "JAVA", "C", "HTML", "CSS",
            "CSS3", "Javascript", "jQuery", "SOAP", "SVN", "Payment Services", "SSH", "SSL", "Linux",
            "Oracle", "MySQl", "REST", "Flash"
        ],
        "backgroundUrl": "/img/experience/triomphe.png"
    }
]


function ExperienceItem(exp : Exp): JSX.Element {

    return (
        <div className={clsx(styles['header-block'])}>
            <div className={clsx(styles['header-block'])}>
                <div className={clsx(styles['logo-block'])}>
                    <a href={exp.website} target="_blank">
                        <img src={exp.logo} alt={exp.companyName} />
                    </a>
                </div>
                <div className={clsx(styles['info-block'])}>
                    <div className={clsx(styles['company-name'])}><a href={exp.website} target="_blank">{exp.companyName}</a></div>
                    <div className={clsx(styles.role)}>{exp.role}</div>
                    <div className={clsx(styles.periode)}>
                        <span>{format(new Date(exp.startAt), 'MMM yyyy')}</span>
                        <span className={clsx(styles.devider)}>-</span>
                        <span>{ exp.endAt? format(new Date(exp.endAt), 'MMM yyyy'): "today"}</span>
                    </div>
                    <div className={clsx(styles.location)}>
                        <span className={clsx(styles.city)}>{exp.city}</span>
                        <span className={clsx(styles.devider)}>, &nbsp;</span>
                        <span className={clsx(styles.country)}>{exp.country}</span>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.description)}>{ Parser().parse(exp.description) }</div>
            <div className={clsx(styles.technologies)}>
                {exp.technologies.map((techno,idx)=> (<span className={clsx(styles.hashtag)} key={idx}>{ techno }</span>))}
            </div>
        </div>
    )
}

export default function Experience(): JSX.Element {

    const previousRef = useRef(null);
    const nextRef = useRef(null);
    const listRef = useRef(null);

    const { position, setPosition } = useContext(PositionContext) as PositionContextType
    const [nextActive,setNextActive] = useState(true)
    const [prevActive,setPrevActive] = useState(false)

    function changeSlide(from: number, to: number) {
        if (from === to) {
            return
        }
        const list = (listRef.current as Element).querySelectorAll(`li`)
        const current = list[from]
        const next = list[to]

        const leaveStyle = to > from ? "leave-left": "leave-right"
        const enterStyle = to > from ? "enter-right" : "enter-left"

        console.log(position)

        // leave viewport
        current.setAttribute("class", clsx(styles[leaveStyle]))
        setTimeout(() => {
            current.removeAttribute("class");
        }, 400)

        // enter viewport
        next.setAttribute("class", clsx(styles.selected, styles[enterStyle]))
        setTimeout(() => {
            next.setAttribute("class", clsx(styles.selected))
        }, 400)

        setPosition(to)
        if (to === 0) {
            setPrevActive(false)
            setNextActive(true)
        } else {
            setPrevActive(true)
        }
        if (list.length-1 === to) {
            setNextActive(false)
        } else {
            setNextActive(true)
        }
    }

    function next() {
        let nextPos = position + 1
        if (nextPos >= ExpList.length - 1) {
            nextPos = ExpList.length - 1
        }
        changeSlide(position, nextPos)
    }

    function previous() {
        let previousPos = position - 1
        if (previousPos < 0) {
            previousPos = 0
        }
        changeSlide(position, previousPos)
    }

    return (
        <section id="experience" className={clsx(styles.landscape)} style={{ backgroundImage:`url(${ExpList[position].backgroundUrl})`}}>
            <div className={clsx(styles.overlay)}>
                <div className={clsx(styles.container)}>
                    <div className={clsx(styles["top-container"])}>
                        <div className={clsx(styles.title)}>
                            <h1>Experiences</h1>
                        </div>
                        <div className={clsx(styles.navigation)}>
                            <button className={clsx(styles.previous, prevActive? '': styles.disabled)} ref={previousRef}  onClick={previous}>
                                <span>Previous</span>
                                <FaChevronLeft title='previous' className={clsx(styles.icon)} />
                            </button>
                            <div className={clsx(styles.devider)}>|</div>
                            <button className={clsx(styles.next, nextActive? '' : styles.disabled)} ref={nextRef} onClick={next}>
                                <span>Next</span>
                                <FaChevronRight title='next' className={clsx(styles.icon) } />
                            </button>
                        </div>
                    </div>
                    <div className={clsx(styles["middle-container"])}>
                        <div className={clsx(styles["events-content"])}>
                            <ol ref={listRef}>
                                {ExpList.map((props, idx) => (
                                    <li className={(idx === 0) ? clsx(styles.selected) : ""} key={idx} data-id={idx}>
                                        <ExperienceItem key={idx} {...props} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <Timeline experiences={ ExpList} />
                </div>
            </div>
        </section>
    )
}