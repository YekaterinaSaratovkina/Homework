import './App.css';
import FirstComponent  from "./components/FirstComponent/FirstComponent";
import Counter from './components/Counter/Counter';
// import buttonsCounter from './components/buttons/buttonsCounter';


function App() {
  return (
    <div className="App">
        <h1>Hello</h1>

        <Counter />

        <FirstComponent userName={"Ivan"}/>
        <FirstComponent userName={"Alex"}/>
        <FirstComponent userName={"Gena"}/>

    </div>
  );
}

export default App;
