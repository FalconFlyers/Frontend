
import './App.css';
import {NavBar, Header, Events,LogoBox,Fitness,Yoga} from './Components';
import FitHead from './Components/Events/FitHead';
import YogaHead from './Components/Events/YogaHead';



function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoBox/>
      <YogaHead/>
      <Fitness/>
      {/* <Header /> */}
      {/* <Events /> */}
    
    </div>
  );
}

export default App;
