
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