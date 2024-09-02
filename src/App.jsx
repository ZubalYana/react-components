import './App.css'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import Futer from './components/Futer/Futer'
function App() {
  return (
    <> 
    <div className="test">
    <Header>
    <Logo/>
    </Header>
    <Futer>
    <Logo/>
    </Futer>
    </div>
    </>
  )
}

export default App
//app - wrap, компонент 
//<> - фрагмент 