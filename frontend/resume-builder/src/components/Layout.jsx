// /frontend/resume-builder/src/components/Layout.jsx

import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'; 
import Login from '../pages/Auth/Login';
import SingUp from '../pages/Auth/SingUp';
import Modal from './Modal';

const Layout = () => {
  const navigate = useNavigate();
  
  // State สำหรับควบคุม Modal Login/SignUp
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header ที่จะแสดงในทุกหน้า */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* โลโก้และชื่อแบรนด์ */}
            <Link to="/" className="flex flex-col items-center">
              <img
                src={Logo}
                alt='Logo'
                className='h-10 mb-1'
              />
              <div className="text-xl font-bold text-transparent bg-clip-text bg-[radial-gradient(circle,_#000000_0%,_#808080_30%,_#191970_60%,_#d3d3d3_100%)] bg-[length:200%_200%] animate-text-shine">
                Resume Builder
              </div>
            </Link>
            
            {/* ปุ่ม Login/Sign Up ที่เปิด Modal */}
            <button
              onClick={() => setOpenAuthModal(true)}
              className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* เนื้อหาหลักที่เปลี่ยนไปตามแต่ละหน้า */}
      <div className="flex-grow">
        <Outlet />
      </div>
      
      {/* Footer ที่จะแสดงในทุกหน้า */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col items-start">
                <img
                  src={Logo}
                  alt='Logo'
                  className='h-8 mb-2'
                />
                <div className="text-lg font-semibold mb-3">Resume Builder</div>
                <p className="text-gray-600 text-sm">
                  สร้างเรซูเม่ที่โดดเด่นเพื่อเพิ่มโอกาสความสำเร็จในอาชีพของคุณ
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-800">เมนูหลัก</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-purple-700 transition-colors">หน้าหลัก</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">เทมเพลต</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">แนะนำการเขียนเรซูเม่</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">ราคา</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-800">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">คำถามที่พบบ่อย</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">ติดต่อเรา</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">นโยบายความเป็นส่วนตัว</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">เงื่อนไขการใช้งาน</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-800">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-800">รับข่าวสารจากเรา</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="อีเมลของคุณ" 
                    className="px-3 py-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition-colors">
                    ส่ง
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Resume Builder. สงวนลิขสิทธิ์ทั้งหมด.</p>
          </div>
        </div>
      </footer>

      {/* Modal สำหรับ Login/SignUp */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage}/>}
          {currentPage === "signup" && (
            <SingUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Layout;