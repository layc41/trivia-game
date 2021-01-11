import logo from './logo.svg';
import './App.css';
// import { ApolloProvider } from '@apollo/react-hooks';

// Pages
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz/>
      </header>
    </div>
  );
}

export default App;
