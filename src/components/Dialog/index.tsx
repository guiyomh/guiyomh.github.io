import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Typed from 'react-typed'

export default function Dialog():  JSX.Element {
    return (
        <div className={clsx(styles["dialog-container"])}>
            <img loading="lazy" src="img/welcome/bubble-frame.png" alt="Welcome Speech Bobble" />
            <div className={clsx(styles.console)}>
                <p className={clsx(styles.hello)}>Hello!</p>
                    <Typed className={clsx(styles["txt-rotate"])}
                        strings={[
                            'Be welcome on my live resume',
                            'Be welcome on my live resume',
                            'My name is Guillaume',
                            'I am an Engineer',
                            'I am a Developer',
                            'I am a Critical Thinker',
                            'Down below, you will know me better',
                            'Down below, you will know me better',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop>
                    </Typed>
            </div>
        </div>
    )
}