import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const { currentExperience,experienceNextLevel } = useContext(ChallengesContext);

    const percentNextLevel = Math.round(currentExperience * 100) / experienceNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:  `${percentNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentNextLevel}%` }}>
                    {currentExperience}
                </span>
            </div>
            <span>{experienceNextLevel}</span>
        </header>
    )
}


