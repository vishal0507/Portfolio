import './App.css';
import Contact from './components/Contact';
import ExperienceContainer from './components/ExperienceContainer';
import Header from './components/Header';
import ProjectContainer from './components/ProjectContainer';
import SkillContainer from './components/SkillContainer';
import TopContainer from './components/TopContainer';

function App() {
  return (
    <div>
    <Header/>
    <TopContainer/>
    <SkillContainer/>
    <ProjectContainer/>
    <ExperienceContainer/>
    <Contact/>
    </div>
  );
}

export default App;
