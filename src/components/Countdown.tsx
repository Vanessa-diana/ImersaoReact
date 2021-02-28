import { useContext } from 'react';
import { CountDownContext } from '../Contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const { minutes,
            seconds,
            hasFinish,
            isActive,
            startCount,
            resetCount } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinish ? (
                <button
                    disabled
                    type='button'
                   className={styles.countdownButton}>
                   Ciclo encerrado
               </button>
            ):
            <>
            { isActive ? (
                <button
                    onClick={resetCount}
                    type='button'
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                    Abandonar ciclo
                </button>
            ) : (
                    <button
                        onClick={startCount}
                        type='button'
                        className={styles.countdownButton}>
                        Iniciar ciclo
                    </button>
               )}
            </> 
            }   
         </div>
    );
}