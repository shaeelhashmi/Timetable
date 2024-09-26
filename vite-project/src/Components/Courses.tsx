import SecondNav from "./SecondNav"
import Input from "./Input"
export default function Courses() {
  return (
    <>
    <SecondNav></SecondNav>
    <div className="mt-36">
      <h1 className="text-4xl text-center">Add courses</h1>
      <form action="#" className="flex flex-col items-center justify-center mt-12">
        <Input label="Course name:" type="text" placeholder="Enter Name" name="CourseName"/>
        <Input label="Course ID:" type="text" placeholder="Enter unique ID" name="CourseID"/>
       {/* <p className="h-5 text-red-900">{error?"Member already exists":""}</p> */}
        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
      </form>
      <h1 className="mt-12 text-4xl text-center">Remove courses</h1>
      <form action="#" className="flex flex-col items-center justify-center mt-12">
          <Input label="Course ID:" type="text" placeholder="Enter unique ID" name="ID"/>
          {/* <p className="h-5 text-red-900">{error2?"Member does not exist":""}</p> */}
        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
    </>
  )
}
