import SecondNav from "./SecondNav"
import Input from "./Input"
export default function Sections() {
  return (
    <>
    <SecondNav></SecondNav>
    <div className="mt-52">
      <h1 className="text-4xl text-center">Add sections</h1>
      <form action="#" className="flex flex-col items-center justify-center my-12">
        <Input label="Section:" type="text" placeholder="Enter section" name="CourseName"/>
        <div className='grid grid-cols-[100px_1fr]  p-3 justify-center items-center'>
        <label htmlFor="semester" >Select semester:</label>
        <select
  name="semester"
  id="semester"
  className='h-[40px] p-2 border-black border-b-2 border-solid bg-white w-[250px] focus:outline-blue-600'
  defaultValue=""
>
    <option value="" disabled>Select semester</option>
</select>
</div>
<button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
</form>
<h1 className="text-4xl text-center">Remove sections</h1>
<form action="" className="flex flex-col items-center justify-center my-12"> 
<div className='grid grid-cols-[100px_1fr]  p-3 justify-center items-center'>
        <label htmlFor="semester" >Select semester:</label>
        <select
  name="semester"
  id="semester"
  className='h-[40px] p-2 border-black border-b-2 border-solid bg-white w-[250px] focus:outline-blue-600'
  defaultValue=""
>
    <option value="" disabled>Select semester</option>
</select>

</div>
<Input label="Section:" type="text" placeholder="Enter section" name="CourseName"/>
<button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
</form>
    </div>
    </>
  )
}
