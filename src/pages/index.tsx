import Head from 'next/head'

import { CompleteChallenge } from '../components/CompleteChallenge'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { CountDownProvider } from '../Contexts/CountDownContext'

export default function Home() {
  return (
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
  )
}

