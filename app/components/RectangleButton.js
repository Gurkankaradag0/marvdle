const RectangleButton = ({ title, onClick, icon, className = '', disabled = false, children }) => {
    return (
        <button
            title={title}
            onClick={onClick}
            type='button'
            className={`${className} w-40 h-12 rounded-lg flex justify-evenly items-center border-2 border-solid border-marvel-red bg-marvel-black duration-300 ease hover:scale-105 disabled:hover:scale-100 disabled:bg-backdrop disabled:border-info disabled:text-info group-hover:scale-105`}
            disabled={disabled}
        >
            <div className='border-r-2 border-marvel-red w-1/3 h-full flex justify-center items-center'>{icon}</div>
            <div className='w-24 font-bold flex-1'>{children}</div>
        </button>
    )
}

export default RectangleButton
