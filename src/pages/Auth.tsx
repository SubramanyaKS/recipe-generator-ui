import React, { useState } from 'react'
import InputFeild from '../component/InputField';
import Submitbutton from '../component/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Auth:React.FC = () => {
    const [data,setData] = useState({email:"",password:""})
    const [isLogined,setIsLogined] = useState<boolean>(false);
     const [error, setError] = useState('');
     const navigate = useNavigate();

     const handleChange =  async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    try {
      if(isLogined){
        await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate('/home');
      }
      else{
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error logging in:", err.message);
        setError(err.message);
      } else {
        console.error("Error logging in:", err);
        setError('An unknown error occurred.');
      }
    }

    
  }


  return (
   <div className="flex justify-center bg-white h-screen items-center">
    <div className="w-full max-w-md blue-shadow border border-blue-600 p-8  rounded-lg shadow-2xl">
        <h2 className="text-2xl text-blue-700 font-bold mb-6 text-center">{isLogined?"Login":"Signup"}</h2>
    <form onSubmit={handleSubmit}>
      <InputFeild value={data.email}  title="Email" name="email"  OnChange={handleChange} id="email" type="email"/>
      <InputFeild value={data.password} title="Password" name="password"  OnChange={handleChange} id="password" type="password"/>
      <div className='text-black text-end mb-4'><a href='/forgot-password'>forgot password?</a></div>
      <Submitbutton title={isLogined?"Login":"Signup"}/>
      {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}

    </form>
     <div className='m-3 justify-center flex'>
      <button className='shadow-lg rounded-2xl cursor-pointer'  onClick={()=>setIsLogined(!isLogined)}><p className='text-black text-center'>{isLogined?"Create an account?":"Already have an account?"}</p></button>
     </div>
      </div>
    </div>

  )
}

export default Auth