
export default function Navbar() {
  return (
    <nav className='fixed top-0 flex items-center justify-center w-screen p-1 bg-white'>
      <a href="/data/timetable" className='w-20 h-6 m-5 mx-12 text-center transition-all duration-300 border-b-2 border-white border-solid hover:border-black'>
      Time table</a>
      <a href="/data/faculty" className='w-20 h-6 m-5 mx-12 text-center transition-all duration-300 border-b-2 border-white border-solid hover:border-black'>
        Faculty</a>
        <a href="/data/view" className='w-20 h-6 m-5 mx-12 text-center transition-all duration-300 border-b-2 border-white border-solid hover:border-black'>
        View</a>
    </nav>
  )
}
