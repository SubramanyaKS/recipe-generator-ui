import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react"
import InputFeild from "../component/InputField";
import Submitbutton from "../component/SubmitButton";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
 const [email,setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

    return (
   <div className="flex justify-center bg-white h-screen items-center">
    <div className="w-full max-w-md blue-shadow border border-blue-600 p-8  rounded-lg shadow-2xl">
        <h2 className="text-2xl text-blue-700 font-bold mb-6 text-center">Forgot Password</h2>
    <form onSubmit={handleSubmit}>
      <InputFeild value={email}  title="Email" name="email"  OnChange={(e) => setEmail((e.target as HTMLInputElement).value)} id="email" type="email"/>
      <div className="mt-3">
        <Submitbutton title={"Proceed"}/>
      </div>
      {message && <div className="text-green-400 text-center"><p>{message}</p></div>}
      {error?<div className='text-red-700 text-center'><p>{error}</p></div>:null}

    </form>
    <div className='m-3 justify-center flex'>
      <button className='shadow-lg rounded-2xl cursor-pointer'  onClick={()=>navigate('/auth')}><p className='text-black text-center'>Back to Login?</p></button>
     </div>
      </div>
    </div>
  )
}

export default ForgotPassword