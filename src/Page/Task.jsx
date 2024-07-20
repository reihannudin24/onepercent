import {taskAll} from "../Helper/Data";
import colors from "tailwindcss/colors";

function Task({light}){
    return(
        <>
            <section className={"w-full pt-20"}>
                <div className={"w-full block "}>
                    <div className={"w-full "}>
                        <div className={"w-full"}>
                            <div className={"w-full"}>
                                <div className={"py-3"}>
                                    <h1 className={` text-xl md:text-2xl ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Task Kamu</h1>
                                    <p className={""}>semua task kamu</p>
                                </div>
                                <div className={"w-full"}>
                                    <div className={"w-full"}>
                                        <div className={"w-full my-2"}>
                                            <ul className={"w-full flex flex-wrap justify-between"}>
                                                <li className={"w-6/12"}>
                                                   <CardReviewTaskComponent />
                                                </li>
                                                <li className={"w-6/12"}>
                                                    <CardReviewTaskComponent />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <div className={"w-full"}>
                                <div className={"w-full"}>
                                    <div className={"w-full"}>
                                        <ul className={"w-full block"}>
                                            {taskAll.map((item, index) => {
                                                return(
                                                    <li key={index} className={"w-full my-3"}>
                                                        <CardTaskComponent light={light} color={colors} title={item?.title} percent={item?.percent}  count_success={item?.count_success} count_from={item?.count_from} task={item?.task}  />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const CardReviewTaskComponent = ({light, color , title, counting, percent }) => {
    return(
        <div className={"w-98 bg-blue-500 border-blue-600 shadow rounded-md"}>
           <div className={"w-11/12 mx-auto"}>
               <div className={"w-full py-1"}>
                   <div className={"my-2 w-full"}>
                       <p className={"text-sm w-full text-white"}>{title}</p>
                   </div>
                   <div className={"my-2 flex justify-between"}>
                       <div className={"my-auto"}>
                           <h2 className={"text-xl my-auto text-white font-semibold"}>{counting}</h2>
                       </div>
                       <div className={"flex gap-2 my-auto"}>
                           <div className={"my-auto"}>
                               <div className={"h-icon-up"}>
                                   <img className={"w-full h-full object-cover"} src={""} alt={"icon-up-down"} />
                               </div>
                           </div>
                           <div className={"my-auto"}>
                               <p className={"text-white my-auto text-xs"}>{percent}%</p>
                           </div>
                       </div>
                   </div>
               </div>

           </div>
        </div>
    )
}

const CardTaskComponent = ({light, color, title, percent , count_success, count_from, task }) => {
    return(
        <div className={"bg-white shadow py-3 px-3 rounded-md"}>
            <div className={"w-11/12  mx-auto"}>
                <div className={"w-full"}>
                    <div className={"flex pb-3 border-b border-b-gray-100 justify-between w-full"}>
                        <div className={"my-auto"}>
                            <h1 className={"text-xl my-auto font-medium"}>{title}</h1>
                        </div>
                        <div className={"text-center"}>
                            <h1 className={"text-md text-gray-800 font-semibold"}>{percent}%</h1>
                            <div className={""}>
                                <p className={"text-xs"}>{count_success} dari {count_from}</p>
                            </div>
                        </div>
                    </div>
                    <div className={"my-4 w-full"}>
                        <div className={"w-full py-2"}>
                            <div className={"w-full"}>
                                <ul className={"w-full block"}>
                                    {task.map((item, index) => {
                                        return(
                                            <li key={index} className={"py-3 border-b border-b-gray-100"}>
                                                <div className={"w-full"}>
                                                    <div className={"flex gap-4"}>
                                                        <div className={"radio"}>
                                                            <input className={"w-full h-full"} type={'radio'}/>
                                                        </div>
                                                        <div className={""}>
                                                            <div>
                                                                <p className={"font-normal text-md text-gray-600"}>{item.title}</p>
                                                            </div>
                                                            <div>
                                                                <p className={"font-normal text-md text-gray-600"}>{item.status}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    } )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Task