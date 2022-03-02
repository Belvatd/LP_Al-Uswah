import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MainPage from './components/pages/MainPage';
import SecondPage from './components/pages/SecondPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/desc' element={<SecondPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
