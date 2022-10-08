import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import stylesBg from './background.module.scss'

interface WrapperProps {
  children: React.ReactNode
}

function Background() {
  return (
    <div className={clsx(stylesBg.skills)}>
      <img loading="lazy" className={clsx(stylesBg.background)} src="img/welcome/illustration-back.png" alt="Background circle"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.first)} src="img/welcome/icons/docker.svg" alt="Docker"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.second)} src="img/welcome/icons/css3.svg" alt="CSS3"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.third)} src="img/welcome/icons/git.svg" alt="Git"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.fourth)} src="img/welcome/icons/html5.svg" alt="HTML5"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.fifth)} src="img/welcome/icons/sql.svg" alt="SQL"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.sixth)} src="img/welcome/icons/php.svg" alt="PHP"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.seventh)} src="img/welcome/icons/rust.svg" alt="RUST"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.eighth)} src="img/welcome/icons/golang.svg" alt="Golang"/>
      <img loading="lazy" className={clsx(stylesBg["skill-icon"],stylesBg.ninth)} src="img/welcome/icons/android.svg" alt="Android"/>
    </div>
  )
}

export default function Welcome({children}: WrapperProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section id="welcome" className={clsx(styles.welcome)}>
      <div className={clsx(styles.layer_one)}>
        <div className={clsx(styles.avatar_container)}>
          <img loading="lazy" className={clsx(styles.illustration)} src="img/welcome/guillaume.png" alt={siteConfig.title} />
          <Background />
        </div>
        { children }
      </div>
  </section>
  );
}
