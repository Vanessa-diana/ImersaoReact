import {  createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountDownContextData {
    minutes: number,
    seconds: number,
    hasFinish: boolean,
    isActive: boolean,
    startCount:() => void,
    resetCount: () => void
}

interface CountDownProviderProps {
    children: ReactNode;
}

let countDownTimeOut: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData )

export function CountDownProvider ({ children } : CountDownProviderProps) {
    
    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinish] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCount() {
        setIsActive(true);
    }

    function resetCount() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(0.1*60);
        setHasFinish(false);

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut= setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time ===0) {
            setHasFinish(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinish,
            isActive,
            startCount,
            resetCount,
        }}
        >
            {children}
        </CountDownContext.Provider>
    )
}