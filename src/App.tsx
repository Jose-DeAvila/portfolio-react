import './App.css'
import MainPage from './components/pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
