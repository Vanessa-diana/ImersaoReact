import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Vanessa-diana.png" alt="vanessa" />
            <div>
                <strong>Vanessa Diana</strong>
                <p>
                    <img src="icons/level.svg" alt="icon-level" />
                   Level {level}
                </p>
            </div>
        </div>
    );
}
