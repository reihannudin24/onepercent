export const InputComponent = ({id, name, type, state, setState, onChange, value , color,  placeholder}) => {
    return(
        <>
            <div className={"my-3 py-1.5"}>
                <div className={`relative w-full input-container h-input block border px-4 rounded-lg border-gray-200 ${state ? 'focused' : ''}`}>
                    <div className={"h-full w-full"}>
                        <input className={"w-full text-15 h-full font-light text-gray-600 focus:outline-none"} id={`${id}`} name={`${id}`} value={value} onChange={onChange} type={`${type}`} placeholder={`${placeholder}`} onFocus={() => setState(true)}
                               onBlur={() => setState(false)}/>
                    </div>
                    <label className={"text-sm absolute left-3 bg-white px-3 -top-3 text-gray-500 font-normal"} htmlFor={`${id}`}>{name}</label>
                </div>
            </div>
        </>
    )
}