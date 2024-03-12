export default function Input(props){
    return(
        <div className="flex flex-col">
            <label className= "text-white">{props.label}</label>
            <span className="text-sm text-gray-200">{props.description}</span>
            <input type={props.type} className="p-4 text-black rounded-md shadow-md flex jsutfy-items items-center" placeholder={props.placeholder}></input>
        </div>
    )
}