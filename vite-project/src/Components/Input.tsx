interface props{
    label:string;
    type:string;
    name:string;
}
export default function Input(props:props) {
  return (
    <div className='grid grid-cols-[100px_1fr]  p-3 justify-center items-center'>
    <label htmlFor={props.name}>{props.label}</label>
    <input type={props.type} id={props.name} name={props.name} className=' h-[40px] p-2 border-black border-b-2 border-solid w-[250px] focus-within:outline-none'/>
</div>
  )
}
