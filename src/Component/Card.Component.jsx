
export const ScheduleCardComponent = () => {
    return(
        <>
            <div className={"w-full shadow border-b pt-4 pb-3 border-b-gray-900  cursor-pointer hover:bg-gray-900 border-gray-100"}>
                <div className={"block w-11/12 mx-auto"}>
                    <div className={"flex gap-2 w-full"}>
                        <div className={"btn-icon rounded-full"}>
                            <div className={"my-auto text-center mx-auto"}>
                                <h2 className={"-my-2.5 text-md -mx-2"}>17</h2>
                            </div>
                        </div>
                        <div className={"block"}>
                            <div className={""}>
                                <h2 className={"text-sm font-normal"}>Hahaha</h2>
                            </div>
                            <div className={""}>
                                <p className={"text-gray-300 text-xs font-light"}>Sisa Tugas</p>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-4 flex justify-between"}>
                        <div className={""}>
                            <div className={""}>
                                <p className={"text-sm text-gray-100 "}>Tugasnya</p>
                            </div>
                        </div>
                        <div className={""}>
                            <button className={""}>
                                <img className={""} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CardSchedule = ({ light, color, title, startTime, endTime, date }) => {
    return (
        <div className={`bg-${color}-schedule relative px-4 py-4 round-schedule`}>
            <div className={`motif-rounded-${color}`}></div>
            <div className={"w-full relative z-10"}>
                <div className={"w-full flex"}>
                    <div className={"my-auto"}>
                        <h1 className={"text-white  font-semibold text-md"}>{title}</h1>
                    </div>
                </div>
                <div className={"w-full relative"}>
                    <div className={"flex w-full justify-between"}>
                        <div className={"w-full mt-3 block justify-between"}>
                            <div>
                                <p className={"text-white font-light text-xs"}>{date}</p>
                            </div>
                            <div>
                                <h1 className={"text-white font-medium text-xs"}>{startTime} - {endTime}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CardCalendar = ({date, month, years}) => {

    return(
        <div className={"w-11/12 mb-2 mx-auto md:w-full px-2 py-2 border border-gray-50 rounded-md bg-gray-50 hover:bg-blue-50 cursor-pointer"}>
            <div className={""}>
                <div className={"text-center"}>
                    <h1 className={"text-2xl font-semibold text-blue-600 "}>{date}</h1>
                    <div className={""}>
                        <div className={""}>
                            <p className={"text-sm text-gray-500"}>{month}</p>
                            <p className={"text-xs text-gray-400"}>{years}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
