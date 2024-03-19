export default function Button(props) {
    return (
        <button
            className="text-xl mt-4 p-2 bg-blue-500 text-white rounded-md disabled: bg-gray-300 disabled:cursor-not-allowed"
            type={props.type}
        >
            {props.name}
        </button>
    )
}