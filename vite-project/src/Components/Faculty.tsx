import Input from "./Input";
import { useState } from "react";
import SecondNav from "./SecondNav";
export default function Faculty() {
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
  return (
     <>
    <SecondNav></SecondNav>
    <div className="mt-52">
      <h1 className="text-4xl text-center">Add Faculty</h1>
      <form action="#" className="flex flex-col items-center justify-center mt-12">
        <Input label="First name:" type="text" placeholder="Enter Name" name="firstName"/>
        <Input label="Last name:" type="text" placeholder="Enter Name" name="lastName"/>
        <Input label="ID:" type="text" placeholder="Enter unique ID" name="ID"/>
       <p className="h-5 text-red-900">{error?"Member already exists":""}</p>
        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
      </form>
        <h1 className="mt-12 text-4xl text-center">Remove faculty</h1>
      <form action="#" className="flex flex-col items-center justify-center mt-12">
          <Input label="ID:" type="text" placeholder="Enter unique ID" name="ID"/>
          <p className="h-5 text-red-900">{error2?"Member does not exist":""}</p>
        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
    </>
  )
}
