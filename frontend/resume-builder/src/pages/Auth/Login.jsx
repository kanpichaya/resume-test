import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';
const Login = ({setCurrentPage}) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState(null);

 const navigate = useNavigate();

// Handle Login Form Submit
const handleLogin = async (e) => {
 e.preventDefault();
 
 if (!validateEmail(email)) {
   setError("Please enter a valid email address.");
   return;
 }
 
 if (!password) {
   setError("Please enter the password");
   return;
 }
 
 setError("");
 
 //Login API Call
 try {
   
 } catch (error) {
   
 }
};

 
 return (
<div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center bg-white rounded-lg">
  {/* ปุ่มปิด (X) ที่มุมขวาบน */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
  </div>
  
  <p className="text-xs text-slate-700 mt-[5px] mb-6">
    Please enter your details to log in
  </p>
  
  <form onSubmit={handleLogin}>

    <Input
      value={email}
      onChange={({ target }) => setEmail(target.value)}
      label='Email Address'
      placeholder='john@example.com'
      type='text'
      />

      <Input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        label='Password'
        placeholder='Min 8 Characters'
        type='password'

      />
   
    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
    
    {/* ช่องใส่ข้อมูลควรอยู่ตรงนี้ แต่ไม่เห็นในรูป */}
    
    {/* ปุ่ม LOGIN สีดำ */}
    <button 
      type="submit" 
      className="w-full bg-black text-white py-3 rounded text-center font-medium my-4 cursor-pointer hover:bg-purple-500 transition-colors"
    >
      LOGIN
    </button>
    
    <p className="text-[13px] text-slate-800 text-center">
      Don't have an account?{" "}
      <button
        className="font-medium text-purple-600 underline cursor-pointer"
        onClick={() => {
          setCurrentPage("signup");
        }}
      >
        SignUp
      </button>
    </p>
  </form>
</div>
 )
}

export default Login