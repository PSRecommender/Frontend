import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Page from './pages/page';

function App() {
  return (
    <BrowserRouter>
      <Page></Page>
    </BrowserRouter>
  );
}

export default App;
