import Input from "./Input"
import { Link } from "react-router-dom"
export default function Signup() {
  return (
    <div className='flex items-center justify-center w-full h-screen  bg-[rgb(235_232_232)] '>
         <form action="#" className='bg-white rounded-lg p-7'>
         <h1 className='m-2 mb-3 text-4xl font-semibold text-center'>Signup</h1>
         <Input label="ID:" type="text" name="ID" placeholder="ID"></Input>
         <Input label="Password:" type="password" name="password" placeholder="password"></Input>
         <Input label="Confirm password:" type="password" name="password2" placeholder="Confirm password"></Input>
         <div className='grid grid-cols-[100px_1fr]  p-3 justify-center items-center' >
            <div>
            <label htmlFor="department">Department:</label>
            </div>
            <div>
            <select
  name="department"
  id="department"
  className='h-[40px] p-2 border-black border-b-2 border-solid bg-white w-[250px] focus:outline-blue-600'
  defaultValue=""
  aria-placeholder="Select Department"
>
    <option value="" disabled>Select Department</option>
    <option value="HR">CS</option>
    <option value="Finance">AI</option>
    <option value="IT">IT</option>
</select>
        </div>
       </div>
       <p className="m-3 text-sm">Already have an account? <Link to="/login"  className="text-blue-800 ">Login</Link></p>
       <div className='flex justify-end p-3'>
            <button type="submit" className='bg-blue-600  h-[40px] w-[150px] text-white hover:bg-blue-500 transition-all duration-500'>Signup</button>
        </div>
         </form>   
    </div>
  )
}
