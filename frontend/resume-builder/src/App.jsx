import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SingUp';
import Dashboard from './pages/Home/Dashboard';
import EditResume from './pages/ResumeUpdate/EditResume';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* ใช้ Layout เป็น parent สำหรับทุกเส้นทาง */}
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume/:resumeId" element={<EditResume />} />
            
            {/* เพิ่มเส้นทางสำหรับหน้า 404 Not Found ที่ดีขึ้น */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-[50vh] flex-col">
                <h1 className="text-4xl font-bold mb-4">404 - ไม่พบหน้าที่คุณต้องการ</h1>
                <p className="text-lg text-gray-600 mb-8">ขออภัย เราไม่พบหน้าที่คุณกำลังค้นหา</p>
                <a href="/" className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  กลับไปยังหน้าหลัก
                </a>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
      
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          }
        }}
      />   
    </> 
  )
}

export default App