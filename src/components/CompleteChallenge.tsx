import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import styles from '../styles/components/CompleteChallenge.module.css'

export function CompleteChallenge () {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallengs}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}