import {taskAll} from "../Helper/Data";

function Task({light , color}){


    const dashTask = [
        {
            'id' : 1,
            'title' : 'selesai',
            'content' : '10',
        }, {
            'id' : 1,
            'title' : 'Belum terselesaikan',
            'content' : '2',
        }
    ]


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
                                                {dashTask.map((item, index) => {
                                                    return(
                                                        <li key={index} className={"w-6/12"}>
                                                            <CardReviewTaskComponent title={item?.title} color={color} percent={item}  light={light} counting={item?.content} />
                                                        </li>
                                                    )
                                                })}
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
                                                        <CardTaskComponent light={light} color={color} title={item?.title} percent={item?.percent}  count_success={item?.count_success} count_from={item?.count_from} task={item?.task}  />
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
        <div className={`w-98 ${light ?'' : ''}  bg-${color}-primary border-${color}-primary shadow rounded-md`}>
           <div className={"w-11/12 mx-auto"}>
               <div className={"w-full py-1"}>
                   <div className={"my-2 w-full"}>
                       <p className={`text-sm w-full ${light ? 'text-gray-500' : 'text-white'} `}>{title}</p>
                   </div>
                   <div className={"my-2 flex justify-between"}>
                       <div className={"my-auto"}>
                           <h2 className={`text-xl my-auto ${light ? 'text-white' : 'text-white'}  font-semibold`}>{counting}</h2>
                       </div>
                       <div className={"flex gap-2 my-auto"}>
                           <div className={"my-auto"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#32bd43" viewBox="0 0 256 256"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path></svg>
                           </div>
                           <div className={"my-auto"}>
                               <p className={`${light ? 'text-white' : 'text-white'} my-auto text-xs`}>{percent}%</p>
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
        <div className={`${light ? ` bg-${color}-primary-task` : ` bg-${color}-primary-task-dar`}  shadow py-3 px-3 rounded-md`}>
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