
export default function SecondNav() {
  return (
    <aside className="fixed flex items-center justify-center w-screen p-3 overflow-x-auto text-sm bg-white border-t-2 top-16 md:overflow-x-auto md:whitespace-nowrap sm:text-base">
      <a href="/data/faculty" className="w-[200px] text-center border-b-2 border-white hover:border-black md:ml-[100px]   transition-all duration-300">Faculty</a>
      <a href="/data/courses" className="w-[200px] text-center border-b-2 border-white hover:border-black md:ml-[100px]  transition-all duration-300">Courses</a>
      <a href="/data/sections" className="w-[200px] text-center border-b-2 border-white hover:border-black md:ml-[100px]  transition-all duration-300">Sections</a>
      <a href="/data/semester" className="w-[200px] text-center border-b-2 border-white hover:border-black md:ml-[100px]  transition-all duration-300">Semester</a>
    </aside>
  )
}
