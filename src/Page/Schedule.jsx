import {useState} from "react";

function Schedule({light}){

    const [activeState, setActiveState] = useState ('all')

    return(
        <section className={"sticky pt-20"}>
            <div className={"w-full"}>
                <div className={"w-full"}>
                    <div className={"w-full"}>
                        <div className={""}>
                            <div className={"flex justify-between "}>
                                <div className={""}>
                                    <h1 className={""}>Schedule</h1>
                                    <p className={""}>
                                        Dskripsi
                                    </p>
                                </div>
                                <div className={""}>
                                    <div className={""}>
                                        <StateButtonSchedule state={activeState} setState={setActiveState} light={light} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={""}>
                            <div className={""}>
                                <div className={""}>
                                    <div className={""}>
                                        <div className={""}>
                                            <button className={""}>
                                                Lihat tanggal
                                            </button>
                                        </div>
                                    </div>
                                    <div className={""}>
                                        <div className={""}>
                                            <h2 className={""}>July</h2>
                                            <p className={""}>2024</p>
                                        </div>
                                    </div>
                                    <div className={""}>
                                        <div className={""}>
                                            <button className={""}>
                                                Add Event
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={""}>
                                <div className={""}>
                                    <div className={""}>
                                        <ul className={""}>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                            <li className={""}>
                                                <ScheduleCard />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={""}>
                    <div className={""}>
                        <div className={""}>
                            <div className={""}>
                                <button className={""}>
                                    <div className={""}>
                                        <div className={""}>
                                            <img className={""} />
                                        </div>
                                        <div className={""}>
                                            <p className={""}>
                                                Add New Task
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={""}>
                            <div className={""}>
                                <div className={""}>
                                    <div className={""}>
                                        <h3 className={""}>Reminders</h3>
                                    </div>
                                    <div className={""}>
                                        <div className={""}>
                                            <img className={""} />
                                        </div>
                                    </div>
                                </div>
                                <ul className={""}>
                                    <li className={""}>
                                        <ReminderCard />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Schedule

export const ScheduleCard = () => {
    return(
        <div className={""}>
            <button className={""}>
                <div className={""}>
                    <div className={""}>
                        <h3 className={""}>Tanggal</h3>
                    </div>
                    <div className={""}>
                        <div className={""}>
                            <div className={""}>
                                <p className={""}>Shedule harian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}

export const ReminderCard = () => {
    return(
        <div className={""}>
            <div className={""}>
                <img className={""} />
            </div>
            <div className={""}>
                <div className={""}>
                    <div className={""}>
                        <h3 className={""}>Title Reminders</h3>
                    </div>
                    <div className={""}>
                        <p className={""}>Pesan Reminder</p>
                    </div>
                </div>
                <div className={""}>
                    <p className={""}>Waktu reminder</p>
                </div>
            </div>
        </div>
    )
}

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