import {Link} from "react-router-dom";

export const SidebarComponent = ({lights}) => {

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

    return(
        <>
            <section className={`w-full ${lights ? 'glasses-white': 'glasses'} z-10 border-r-primary border-blue-950 min-h-screen`}>
                <header className={"w-11/12 mx-auto"}>
                    <div className={"block"}>
                        <div className={`w-full ${lights ? 'border-b-gray-300 border-b': 'border-b-primary'}`}>
                            <div className={"btn-logo my-4 mx-auto"}>
                                <div className={"h-logo my-auto"}>
                                    <img className={"w-5 h-5 object-cover"} src={"assets/icon/dark/note-logo.svg"} />
                                </div>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <ul className={`w-full my-5 ${lights ? 'border-b-gray-300 border-b': 'border-b-primary'} gap-2 block`}>
                                {data.map((item , index) => {
                                    return(
                                        <div id={index}>
                                            <SidebarButton lights={lights} title={item?.title} url={item?.url} icon={item?.icon} />
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={"my-3 fixed  bottom-0 w-full"}>
                            <Link to={"/profile"}>
                                <div className={`${lights ? 'btn-logo-2-light': 'btn-logo-2 '}  my-2 mx-auto`}>
                                    <div className={"-my-1 -mx-2"}>
                                        <h1 className={"text-xl my-auto text-blue-600"}>AR</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}


export const SidebarButton = ({title, url, icon, lights}) => {
    return(
        <>
            <Link to={url}>
                <li className="group my-3 w-full relative">
                    <div className={`my-2 mx-auto  ${lights ? 'btn-logo-2-light': 'btn-logo-2 '}`}>
                        <div className="w-full h-logo-2">
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