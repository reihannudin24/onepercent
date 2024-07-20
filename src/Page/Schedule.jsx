import {useState} from "react";
import {Link} from "react-router-dom";
import {addDays, format} from "date-fns";
import { startOfMonth, getDaysInMonth } from 'date-fns';
import {schedule} from "../Helper/Data";

function Schedule({light}){

    const [activeState, setActiveState] = useState ('all')
    const [dates, setDate] = useState(new Date());
    const generateDates = () => {
        const daysInMonth = getDaysInMonth(dates);
        return Array.from({ length: daysInMonth }, (_, i) => addDays(dates, i));
    };

    const monthDates = generateDates();



    return(
        <section className={"sticky pt-20"}>
            <div className={"w-full"}>
                <div className={"w-full"}>
                    <div className={""}>
                        <div className={"w-full block md:flex justify-between my-6 md:my-3"}>
                            <div className={"mb-5"}>
                                <h1 className={`text-2xl ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Schedule Rutinitas Harian</h1>
                                <p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>12/07/2024</p>
                            </div>
                        </div>
                        <div className={"bg-primary-ice py-4 px-4  rounded-xl"}>
                            {/*<div className={""}>*/}
                            {/*    <div className={""}>*/}
                            {/*        <div className={""}>*/}
                            {/*            <div className={""}>*/}
                            {/*                <button className={""}>*/}
                            {/*                    Lihat tanggal*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={""}>*/}
                            {/*            <div className={""}>*/}
                            {/*                <h2 className={""}>July</h2>*/}
                            {/*                <p className={""}>2024</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className={""}>*/}
                            {/*            <div className={""}>*/}
                            {/*                <button className={""}>*/}
                            {/*                    Add Event*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className={"w-full "}>
                                <div className={"w-full"}>
                                    <div className={"w-full"}>
                                        <ul className={"w-full flex flex-wrap"}>
                                            {monthDates?.map((item) => {
                                                return(
                                                    <li className={"wh-calendar-con"}>
                                                        <ScheduleCard
                                                            task={schedule}
                                                            date={format(dates, 'dd')}
                                                                        month={format(dates, 'MMMM')}
                                                                        years={format(dates, 'yyyy')}
                                                        />
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
            </div>
        </section>
    )
}
export default Schedule


export const ScheduleCard = ({task, date, days, fullYear}) => {


    return (
        <div className="mx-auto w-full pb-4 border border-gray-50 bg-white shadow ">
            <div className={"bg-primary-gray pt-2 rounded-xl-t"}>
                <div className={"w-11/12 flex justify-between mx-auto"}>
                    <div className="flex gap-2">
                        <p className=" text-blue-600 text-sm">{days}</p>
                    </div>
                    <p className="text-gray-600 text-xs">{fullYear}</p>
                </div>
            </div>
            <div className="w-full h-full mx-auto">
                <div className="block w-11/12 mx-auto  my-1 border-b border-gray-100 justify-between">
                    <div className={"my-1.5"}>
                        <h3 className="text-lg text-gray-800 font-semibold">{date}</h3>
                    </div>
                </div>
                <div className="w-full h-full py-0.5 max-h-calendar-schedule overflow-y-scroll scrollbar-hide">
                    <ul className="w-11/12 mx-auto relative block flex-wrap overflow-y-scroll h-calendar-schedule scrollbar-hide">
                        {task.map((item, index ) => {
                            // type is  : schedule type and planning
                            return(
                                <li key={index} className="w-full my-1">
                                    <div className={`w-full bg-hover-${item?.type}-mini py-2 px-2 rounded-full`}>
                                        <div className="w-11/12 mx-auto">
                                            <h3 className="text-xs text-red-700 font-semibold">{item}</h3>
                                        </div>
                                    </div>
                                </li>
                            )
                        } )}

                    </ul>
                </div>
            </div>
        </div>
    );
};



export const StateButtonSchedule = ({state, setState}) => {

    const onChangeStateAll = () => {
        setState('all')
    }

    const onChangeStateSchedule = () => {
        setState('schedule')
    }

    const onChangeStateReminder = () => {
        setState('reminder')
    }

    return(
        <ul className={"flex bg-white border border-gray-100   text-sm px-2 rounded-full  "}>
            <li className={""}>
                <div className={""}>
                    <button className={"bg-white py-1.5  text-sm px-4 rounded-full "}>
                        Semua
                    </button>
                </div>
            </li>
            <li className={""}>
                <div className={""}>
                    <button className={"bg-blue-500 text-white border border-gray-100 py-1.5  text-sm px-4 rounded-full "}>
                        Jadwal
                    </button>
                </div>
            </li>
            <li className={""}>
                <div className={""}>
                    <button className={"bg-white py-1.5  text-sm px-4 rounded-full "}>
                        Pengingat
                    </button>
                </div>
            </li>
        </ul>
    )
}