export const BannerPreviewTaskCard = ({light , type , title , description }) => {
    return(
        <div className={` ${light ? `bg-hover-${type}` :  `bg-hover-${type}-dark` }  cursor-pointer rounded-full  shadow py-3 md:py-2 px-2`}>
            <div className={"flex justify-between"}>
                <div className={"flex gap-3"}>
                    <div className={`wh-icon text-${type} rounded-full relative`}>
                        <h1 className={" w-1 h-1 text-2xl font-medium my-auto absolute  -left-3 right-0 top-1  mx-auto"}>A</h1>
                    </div>
                    <div className={""}>
                        <div className={""}>
                            <h3 className={`text-md md:text-sm ${light ? 'oneline-truncate' : 'text-white oneline-truncate'} `}>{title}</h3>
                            <p className={`text-sm md:text-xs  ${light ? 'text-gray-600': 'text-gray-200'} oneline-truncate `}>{description}</p>
                        </div>
                    </div>
                </div>
                <div className={""}>
                    <button className={`btn-menu ${light ?'bg-white hover:bg-gray-50' :  'bg-hover-button-dark'} `}>
                        <div className={"h-menu-banner-2 md:h-menu-banner"}>
                            <img className={"w-full h-full object-fill"} src={"./assets/icon/icon-menu-blue.svg"} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const BannerStackPreview = ({width , title, description, percent, roundHour, status , type , light}) => {

    function truncate20(str) {
        if (str.length > 20) {
            return str.substring(0, 20) + '...';
        }
        return str;
    }

    function truncate10(str) {
        if (str.length > 7) {
            return str.substring(0, 7) + '...';
        }
        return str;
    }


    return(
        <div className={` absolute ${light ? `bg-${type}` : `bg-${type}-dark` } bg-${type}  rounded-full md:rounded-md gap-6 py-2 px-5 md:py-2 md:px-2`} style={{width: `${width} `}}>
            <div className={"block "}>
                <div className={"w-11/12 md:w-full mx-auto flex justify-between"}>
                    <div className={"flex w-10/12"}>
                        <div className={""}>
                            <div className={"text-left"}>
                                <h2 className={`flex flex-wrap text-white text-sm md:text-sm`}>
                                    {truncate20(title)}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={"w-2/12 text-right"}>
                        <h1 className={`text-white  ${light} my-auto font-medium`}>{Math.round(percent)}%</h1>
                    </div>
                </div>
                <div className={"w-11/12 md:w-full mx-auto flex justify-between"}>
                    <div className={"my-auto"}>
                        <p className={`text-xs text-white my-auto`}>{roundHour} MIN</p>
                    </div>
                    <div>
                        <div className={"bg-green-600 py-0.5 px-2 rounded-md"}>
                            <p className={`text-xs text-white `}>{truncate10(status)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BannerTargetPreview = ({light , type , title , description }) => {
    return(
        <div className={` ${light ? `bg-hover-task` :  `bg-hover-task-dark` }  cursor-pointer border-l-4 border-l-blue-300 rounded-md  shadow py-3 md:py-2 px-2`}>
           <div className={"w-11/12 mx-auto"}>
               <div className={""}>
                   <h2 className={`text-md md:text-md font-medium ${light ? 'text-gray-900 oneline-truncate' : 'text-white oneline-truncate'}`}>{title}</h2>
               </div>
               <div className={"my-0"}>
                   <p className={`text-sm font-light md:text-sm  ${light ? 'text-gray-600 oneline-truncate' : 'text-white oneline-truncate'}`}>{description}</p>
               </div>
           </div>
        </div>
    )
}

export const BannerNotePreview = ({color , title, content, mode,date}) =>{

    return(
        <div className={` bg-${color}-notes mx-auto h-note rounded-md py-1.5 border-r-2 border-r-${color}-400 px-4`} style={{width:"96%"}}>
            <div className={"relative  w-full"}>
                <div className={"w-full my-1"}>
                    <div className={"pb-2 "}>
                        <h2 className={"text-xl md:text-lg  text-gray-700 font-semibold"}>{title}</h2>
                        <div className={""}>
                            <p className={`text-xs text-gray-500 text-mode-${mode}`}>{date}</p>
                        </div>
                    </div>
                    <div className={"my-1"}>
                        <p className={"text-sm md:text-md text-gray-600 oneline-truncate font-normal"}>{content}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const ChartBanner = ({height, lights , title , percentase , total , color}) => {
    return(
        <div className={"w-full relative mt-auto"}>
            <div
                className={`w-full group mt-auto relative ${color} cursor-pointer rounded-bar`}
                style={{ height: percentase > 30 ? '200px' : `${height}px` }}
            >
                <div className="hidden group-hover:block absolute right-0 top-6 z-10">
                    <div className={`w-full px-3 py-2  ${lights ? 'bg-gray-500': 'bg-gray-900'} radius-btn-icon-r`}>
                        <div className="w-full ">
                            <p className={"text-13 text-white"} style={{fontSize:"13px"}}>{title}</p>
                            {percentase > 38 ? (
                                <p className={"text-13 text-gre-85"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                            ): (percentase >28) ?(
                                <p className={"text-13 text-gre-70"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                            ): (percentase > 20) ?(
                                <p className={"text-13 text-gre-50"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>

                            ): (percentase > 13 ) ?(
                                <p className={"text-13 text-gre-30"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                            ): (percentase < 8) ?(
                                <p className={"text-13 text-gre-15"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                            ) :(
                                <p className={"text-13 text-chart"} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

