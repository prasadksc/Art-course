
import './App.css';
import Layout from './components/Layout';

//json data
import Data from './data.json';




function App() {
  return (
    <div className="App">
      <Layout data={Data}/>
    </div>
  );
}

export default App;
