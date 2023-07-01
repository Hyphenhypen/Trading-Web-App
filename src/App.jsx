import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {StockOverviewPage} from './pages/StockOverviewPage';

import {StockDetailPage} from './pages/StockDetailPage.jsx'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<StockOverviewPage />}/>
      <Route path = '/detail/:symbol' element = {<StockDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
