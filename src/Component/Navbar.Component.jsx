import {useState} from "react";
import {Link} from "react-router-dom";
import {ThemeButton} from "./Button.Component";

export const MainNavbarComponent = ({lights, setLights}) => {

    const [search, setSearch] = useState('');

    const handleOnSearch = (e) => {
        let value = e.target.value
        setSearch(value)
    }

    const onChangeLights = () => {
        setLights(!lights)
        localStorage.setItem('lights', lights)
    }

    return(
        <>
            <nav className={"w-full "}>
                <header className={"mx-auto block "}>
                    <div className={" mx-auto flex"}>
                        <div className={"w-full flex "}>
                            <div className={`w-3/12 ${lights ? 'glasses-white': 'glasses'}  bg-secondary py-3`}>
                                <div className={"w-11/12  mx-auto"}>
                                    <div className={"w-full"}>
                                        <input name={"search"} value={search} id={"search"} onChange={handleOnSearch} className={`w-full rounded-md ${lights ? 'input-light': 'input-dark'} text-sm`} placeholder={"Cari Schedule harian anda"}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-9/12 ${lights ? 'glasses-white': 'glasses-2'} h-full bg-third`}>
                                <div className={"h-full my-auto"}>
                                    <div className={"w-11/12 mx-auto h-full my-auto"}>
                                        <div className={"h-full flex justify-between my-auto"}>
                                            <div className={"w-8/12 h-full my-auto"}>
                                                <ul className={"flex h-full gap-10 items-center"}>
                                                    <li className={"my-auto h-full flex items-center"}>
                                                        <Link to={"/"}>
                                                            <div className={"cursor-pointer h-full flex items-center"}>
                                                                <div className={"h-full flex items-center"}>
                                                                    <p className={`${lights ? "text-gray-500 hover:text-blue-600" : "text-gray-400 hover:text-gray-200"} text-md`}>Reminder</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className={"my-auto h-full flex items-center"}>
                                                        <Link to={"/"}>
                                                            <div className={"cursor-pointer h-full flex items-center"}>
                                                                <div className={"h-full flex items-center"}>
                                                                    <p className={`${lights ? "text-gray-500 hover:text-blue-600" : "text-gray-400 hover:text-gray-200"} text-md`}>Schedule</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className={"my-auto h-full flex items-center"}>
                                                        <Link to={"/"}>
                                                            <div className={"cursor-pointer h-full flex items-center"}>
                                                                <div className={"h-full flex items-center"}>
                                                                    <p className={`${lights ? "text-gray-500 hover:text-blue-600" : "text-gray-400 hover:text-gray-200"} text-md`}>All</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>

                                                </ul>

                                            </div>
                                            <div className={"w-4/12 h-full my-auto"}>
                                                <div className={"flex h-full justify-between my-auto"}>
                                                    <div>

                                                    </div>
                                                    <div className={"my-auto"}>
                                                        <ThemeButton lights={lights} onChangeLights={onChangeLights} />
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}

export const MiniNavbarComponent = () => {



    return(
        <>
            <nav className={"w-full "}>
                <header className={"mx-auto block "}>
                    <div className={" mx-auto flex"}>
                        <div className={"w-full flex "}>
                            <div className={"w-full glasses-2 h-full bg-third"}>
                                <div className={"w-11/12 mx-auto flex justify-between border-b-primary"}>
                                    <div className={""}>
                                        <div className={"btn-logo my-3 mx-auto"}>
                                            <div className={"h-logo my-auto"}>
                                                <img className={"image"} src={"assets/icon/dark/note-logo.svg"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={""}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
}
