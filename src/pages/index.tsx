import Head from 'next/head'
import { GetServerSideProps } from 'next';

import { CompleteChallenge } from '../components/CompleteChallenge'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { CountDownProvider } from '../Contexts/CountDownContext'
import { ChallengesProvider } from '../Contexts/ChallengeContext';

interface HomeProps {
    level:number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props) {

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Life Style</title>
        </Head>

        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenge />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}

