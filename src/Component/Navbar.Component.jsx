import {useState} from "react";
import {Link} from "react-router-dom";
import {ThemeButton} from "./Button.Component";
import {SidebarButton} from "./Sidebar.Component";

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

export const MiniBarComponent =  ({lights}) => {


    const data = [
        {
            'title' : 'Dashboard',
            'url' : '/',
            'icon' : 'icon-dashboard',
        },
        {
            'title' : 'Task',
            'url' : '/task',
            'icon' : 'icon-task',
        },
        {
            'title' : 'Planning',
            'url' : '/planning',
            'icon' : 'icon-planning',
        },
        {
            'title' : 'Schedule',
            'url' : '/schedule',
            'icon' : 'icon-schedule',
        },
        {
            'title' : 'Finance',
            'url' : '/finance',
            'icon' : 'icon-finance',
        },
    ]


    return (
        <section className={`w-11/12 mx-auto rounded-full ${lights ? 'glasses-white': 'bg-primary-glass'} z-10  fixed border-r-primary border-blue-950 bottom-5 right-0 left-0`}>
            <div className={"w-full "}>
                <div className={"w-11/12 mx-auto "}>
                    <ul className={`w-full my-2  gap-2 flex flex-wrap`}>
                        {data.map((item , index) => {
                            return(
                                <div className={"w-2/12 mx-auto"} id={index}>
                                    <BarButton lights={lights} title={item?.title} url={item?.url} icon={item?.icon} />
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export const BarButton = ({title, url, icon, lights}) => {
    return(
        <>
            <Link to={url}>
                <li className="group my-0.5 w-full relative">
                    <div className={`my-0.5 mx-auto  ${lights ? 'btn-logo-2-light-xl': 'btn-logo-2-xl '}`}>
                        <div className=" -ms-1 -mt-1 h-logo-3">
                            <img
                                className="w-full object-cover h-full"
                                src={`${lights ? `assets/icon/${icon}-blue.svg` : `assets/icon/${icon}.svg`}`}
                                alt={`${title} Icon`}
                            />
                        </div>
                    </div>
                    <div className="hidden group-hover:block absolute -right-20 top-6 z-10">
                        <div className={`w-full px-3 py-2  ${lights ? 'bg-blue-500': 'bg-gray-800'} radius-btn-icon`}>
                            <div className="w-full text-white">
                                <p className={""} style={{fontSize:"15px"}}>{title}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
        </>
    )
}


export const MiniNavbarComponent = ({lights}) => {
    return(
        <>
            <nav className={"w-full "}>
                <header className={"mx-auto block "}>
                    <div className={" mx-auto flex"}>
                        <div className={"w-full flex "}>
                            <div className={"w-full glasses-2 h-full bg-third"}>
                                <div className={"w-11/12 mx-auto h-full py-1 flex justify-between border-b-primary"}>
                                    <div className={"relative h-full"}>
                                        <div className={"bg-blue-600 rounded-xl py-3.5 px-3.5  my-2"}>
                                            <div className={"h-6  w-6 "}>
                                                <img className={"w-full h-full object-cover "} src={"assets/icon/dark/note-logo.svg"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={""}>
                                        <div className={"my-1 w-full"}>
                                            <Link to={"/profile"}>
                                                <div className={`${lights ? 'btn-logo-2-light': 'btn-logo-2-lg '}  p-5 my-1 mx-auto`}>
                                                    <div className={"my-auto mx-auto"}>
                                                        <h1 className={"text-xl my-auto text-blue-600"}>AR</h1>
                                                    </div>
                                                </div>
                                            </Link>
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


