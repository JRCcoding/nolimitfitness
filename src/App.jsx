// import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'

function App() {
// nolimitfitness.surge.sh
// google domain to come, available are favorited 
  return (
    <div className='wrapper'>
      <Hero />
      <Fade bottom big >
        <Intro />
      </Fade>
      <Footer />
    </div>
  )
}

export default App
