import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import { CountDownContext } from '../Contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge,completeChallenge } = useContext(ChallengesContext);
    const { resetCount } = useContext(CountDownContext);

    function handleChallengeSuccess () {
        completeChallenge();
        resetCount();
    }


    function handleChallengeFailed () {
        resetChallenge();
        resetCount();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {  activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailed}
                            onClick={handleChallengeFailed}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccess}
                            onClick={handleChallengeSuccess}>    
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxContainerActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )}
        </div>
    )

}