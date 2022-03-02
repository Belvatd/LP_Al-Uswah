import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import MainPage from './components/pages/MainPage';
import TkitPage from './components/pages/tkitPage';
import PgitPage from './components/pages/pgitPage/pgitPage';
import SditPage from './components/pages/sditPage/sditPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/tkit' element={<TkitPage/>}></Route>
        <Route path='/pgit' element={<PgitPage />}></Route>
        <Route path='/sdit' element={<SditPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
