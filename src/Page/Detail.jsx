import {ScheduleCardComponent} from "../Component/Card.Component";

function Detail(){
    return(
        <div className={"flex justify-between"}>
            <div className={"w-4/12 "}>
                <div className={"bg-secondary-new min-h-screen w-10/12  "}>
                    <div className={"pt-20 w-96 mx-auto text-white"}>
                        <div className={"w-11/12 border-b-primary ms-auto "}>
                            <h2 className={"mt-2 mb-3"}>Daftar List</h2>
                        </div>
                        <div className={"w-11/12 ms-auto "}>
                            <div className={"w-full"}>
                                <ul className={"block w-full"}>
                                    <li className={"my-2"}>
                                        <ScheduleCardComponent />
                                    </li>
                                    <li className={"my-2"}>
                                        <ScheduleCardComponent />
                                    </li>
                                    <li className={"my-2"}>
                                        <ScheduleCardComponent />
                                    </li>
                                    <li className={"my-2"}>
                                        <ScheduleCardComponent />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-8/12"}>
                <div className={"text-white"}>
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Detail