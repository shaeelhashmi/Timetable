import Input from "./Input"
import { Link } from "react-router-dom"
export default function Login() {
  return (
    <div className='flex items-center justify-center w-full h-screen  bg-[rgb(235_232_232)] '>
      <form action="#" className='bg-white rounded-lg p-7'>
        <h1 className='m-2 mb-3 text-4xl font-semibold text-center'>Login</h1>
        <Input label="ID:" type="text" name="ID" placeholder="ID"></Input>
        <Input label="Password:" type="password" name="password" placeholder="Password"></Input>
        <div className='grid grid-cols-[100px_1fr]  p-3 justify-center items-center' >
            <div>
            <label htmlFor="department">Department:</label>
            </div>
  
       </div>
       <p className="m-3 text-sm">Don't have an account? <Link to="/signup" className="text-blue-800 ">Signup</Link></p>
        <div className='flex justify-end p-3'>
            <button type="submit" className='bg-blue-600  h-[40px] w-[150px] text-white hover:bg-blue-500 transition-all duration-500'>Login</button>
        </div>
      </form>
    </div>
  )
}
