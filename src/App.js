import './App.scss';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom'
import Basket from './pages/basket/Basket'
import Base from './pages/base/Base';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Base/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
