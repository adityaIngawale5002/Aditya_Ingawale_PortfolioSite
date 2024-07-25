
import Appbar from '@/components/Appbar'
import IntroSection from './components/IntroSection'
import ProjectsComponent from './components/ProjectsComponent'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
    <div className='w-full '>
       <Appbar/>
       <IntroSection/>
       <ProjectsComponent/>
       <SkillsSection/>
       <Footer/>
    </div>
  
    </>
  )
}

export default App
