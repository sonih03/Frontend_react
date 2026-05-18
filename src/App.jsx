import './App.css'// component는 대문자, 파일은 소문자
import ScorePage from './pages/ScorePage';// .으로 한 칸 올라가서 src안에 페이지 안에 스코어페이지 접근
import UserPage from './pages/UserPage';
import EmployeePage from './pages/EmployeePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';



function App() {
  
  return (
    <BrowserRouter>
      <HeaderBar/>
      <Routes>
        <Route path="/score" element={<ScorePage/>}/>//안에 score의 역할이 뭐라 검색해야 그 페이지로 이동하는지 결정함
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/employee" element={<EmployeePage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App;