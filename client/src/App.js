import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <MainPages/>
      </Router>
    </div>
  );
}

export default App;
