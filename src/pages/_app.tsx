import '../styles/global.css';

import { ChallengesProvider } from '../Contexts/ChallengeContext'
import { CountDownProvider } from '../Contexts/CountDownContext';

function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
     
   
  )
}

export default MyApp
