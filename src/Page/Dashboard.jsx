
function Dashboard({light}){

    const now = new Date();
    const times = [];

    for(let i = -1; i <= 2; i++){
        const time = new Date(now);
        time.setHours(now.getHours() + i);

        const hours = time.getHours().toString().padStart(2,'0')

        for (let j = 0; j <=1; j++){
            if (j === 1){
                times.push(`${hours}:30`)
            }else{
                times.push(`${hours}:00`)
            }
        }
    }

    let budget = 500.000;
    let heightChart  = 700;

    const chartFinance = [
        {
            "day" : "06/07/2024",
            "outline" :  70.000,
        },{
            "day" : "07/07/2024",
            "outline" :  80.000,
        },{
            "day" : "08/07/2024",
            "outline" :  50.000,
        },{
            "day" : "09/07/2024",
            "outline" :  100.000,
        },{
            "day" : "10/07/2024",
            "outline" :  30.000,
        },{
            "day" : "11/07/2024",
            "outline" :  67.000,
        },{
            "day" : "12/07/2024",
            "outline" :  90.000,
        }
    ]

    const totalOutline = [];
    const totalChart = [];

    chartFinance.forEach(item => {
        totalOutline.push(item?.outline);
    });

    const totalDefisit = totalOutline.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    chartFinance.forEach(item => {
        let totalAll = budget - totalDefisit

        const persentase = (totalDefisit / budget) * 100;
        const persentasePerItem  = (item?.outline / budget) * 100;
        const heightChart = (persentasePerItem / 100) * 700;
        totalChart.push(heightChart)
    });

    console.log("total chart : ", totalChart)


    const dashboardTask = [
        {
            'title' : 'Belajar Machine Learning',
            'description' : 'Supervised Learning : Belajar Machine Learning ',
            'start_time' : '14:00',
            'end_time' : '15:00',
            'type' : 'task',
            'reminder' : 'wa/alarm',
            'status' : 'selesai',
        },
        {
            'title' : 'Belajar Pemerograman C',
            'description' : 'Bootcamp Devhive : Belajar Pemerograman C ',
            'start_time' : '16:00',
            'end_time' : '17:00',
            'type' : 'schedule',
            'reminder' : 'wa/alarm',
            'status' : 'sedang berlangsung',
        },
        {
            'title' : 'Belajar Machine Learning',
            'description' : 'Supervised Learning : Belajar Machine Learning ',
            'start_time' : '17:00',
            'end_time' : '18:00',
            'type' : 'task',
            'reminder' : 'wa/alarm',
            'status' : 'belum mulai',
        },
        {
            'title' : 'Meet dengan Jweenie',
            'description' : 'Cuman gabut sih ',
            'start_time' : '19:00',
            'end_time' : '20:30',
            'type' : 'planning',
            'reminder' : 'wa/alarm',
            'status' : 'belum mulai',
        },
    ]


    const calculateWidth = (startTime, endTime) => {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);

        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;

        const duration = end - start; // duration in minutes

        if (duration <= 30) {
            return 8.333333;
        } else if (duration === 60) {
            return 16.666667;
        } else {
            // For durations between 30 and 60 minutes
            const proportion = duration / 60;
            return proportion * 16.666667;
        }
    };

    return(
        <>
            <section className={"sticky pt-20"}>
                <div className={"w-full"}>
                    <div className={"w-full"}>
                        <div className={""}>
                            <div className={"w-full my-3"}>
                                <div className={"mb-5"}>
                                    <h1 className={"text-2xl font-medium"}>Dashboard Utama</h1>
                                    <p className={"text-sm font-light text-gray-500"}>12/07/2024</p>
                                </div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"bg-primary-ice w-9/12 rounded-xl px-6 py-6"}>
                                    <div className={"w-full"}>
                                        <div className={"w-full flex"}>
                                            <div className={"w-4/12"}>
                                                <div className={"w-11/12 mt-14"}>
                                                    <div className={"mt-2 w-full"}>
                                                        <ul className={"my-auto block gap-6"}>
                                                            {dashboardTask.map((item , index) => {
                                                                return(
                                                                    <li key={index} className={"my-6 relative"}>
                                                                        <BannerPreviewTaskCard type={item?.type}  title={item?.title} description={item?.description} />
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className={"w-8/12"}>
                                                <div className={"w-full mx-auto"}>
                                                    <div className={"w-full relative"}>
                                                        <ul className={"flex relative w-full"}>
                                                            {times.map((item, index) => {
                                                                return(
                                                                    <li key={index} className={"w-2/12 text-center"}>
                                                                        <p className={""}>{item}</p>
                                                                        <div className={"h-96 w-line mx-auto  bg-gray-200 "}>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                        <div className={"absolute w-full top-10"}>
                                                            <div className={"w-full relative"}>
                                                                <ul className={"block w-full relative"}>
                                                                    {dashboardTask?.map((item) => {
                                                                        const width = calculateWidth(item.start_time, item.end_time);

                                                                        console.log("width : " , width)

                                                                        return(
                                                                            <li className={"w-full relative my-6"}>
                                                                                <BannerStackPreview width={width}  />
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
                                </div>
                                <div className={"w-3/12 "}>
                                    <div className={"w-full ms-auto"}>
                                        <div className={"shadow px-3 pt-3 bg-white rounded-xl w-full"}>
                                            <div className={"mb-6 pb-3 mt-2 border-b border-b-gray-100"}>
                                                <h2 className={"text-xl font-normal text-gray-600"}>Pengeluaran</h2>
                                            </div>
                                            <div className={"w-full mt-5 "}>
                                                <div className={"py-5 "}>
                                                    <div className={" border-b border-b-gray-100 pb-4"}>
                                                        <ul className={"flex w-full gap-3 "}>
                                                            {chartFinance.map((item) => {
                                                                totalOutline.push(item?.outline)
                                                                const persentasePerItem  = (item?.outline / budget) * 100;
                                                                const heightChart = (persentasePerItem / 100) * 700;
                                                                return(
                                                                    <li className={"w-2/12 relative mt-auto"}>
                                                                        {persentasePerItem > 85 ? (
                                                                            <ChartBanner color={"bg-gre-85"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 70) ?(
                                                                            <ChartBanner color={"bg-gre-70"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 50) ?(
                                                                            <ChartBanner color={"bg-gre-50"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 30) ?(
                                                                            <ChartBanner color={"bg-gre-30"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 15) ?(
                                                                            <ChartBanner color={"bg-gre-15"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ) :(
                                                                            <ChartBanner color={"bg-chart"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        )}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className={"my-2"}>
                                                        <div className={" py-2 px-2"}>
                                                            <div className={"my-1"}>
                                                                <p className={"text-sm text-gray-600"}>Budget :</p>
                                                                <h2 className={"font-medium text-md text-green-600"}> {budget}.000</h2>
                                                            </div>
                                                            <div className={"my-1"}>
                                                                <p className={"text-sm text-gray-600"}>Total Pengeluaran :</p>
                                                                <h2 className={"font-medium text-md text-red-600"}> {totalDefisit}.000</h2>
                                                            </div>
                                                            <div className={"my-1"}>
                                                                <p className={"text-sm text-gray-600"}>Sisa :</p>
                                                                <h2 className={"font-medium text-md text-gray-600"}>Sisa : {budget - totalDefisit}.000</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full my-8"}>
                                <div className={"w-full"}>
                                    <div className={""}>
                                        <div className={""}>
                                            <div className={""}>
                                                <ul className={""}>
                                                    <li className={""}>
                                                        <div className={""}>
                                                            <div className={""}>
                                                                <div className={""}>
                                                                    <h3 className={""}>Main Task</h3>
                                                                </div>
                                                                <div className={""}>
                                                                    <ul className={""}>
                                                                        <li className={""}>
                                                                            <BannerTaskPreview />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"w-10/12 mx-auto"}>
                                        <div className={""}>
                                            <div className={"my-4"}>
                                                <h2 className={"text-xl font-semibold text-gray-600"}>Plan</h2>
                                            </div>
                                            <div className={"w-full"}>
                                                <ul className={"w-full block"}>
                                                    <li className={"my-3"}>
                                                        <BannerPlanPreview />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard

export const BannerPreviewTaskCard = ({type , title , description }) => {
    return(
        <div className={`bg-hover-${type} cursor-pointer rounded-full shadow py-2 px-5`}>
           <div className={"flex justify-between"}>
               <div className={"flex gap-3"}>
                   <div className={`wh-icon text-${type} rounded-full relative`}>
                       <h1 className={" w-1 h-1 text-2xl font-medium my-auto absolute  -left-3 right-0 top-1  mx-auto"}>A</h1>
                   </div>
                   <div className={""}>
                       <div className={""}>
                           <h3 className={"text-sm oneline-truncate"}>{title}</h3>
                           <p className={"text-xs text-gray-600 oneline-truncate "}>{description}</p>
                       </div>
                   </div>
               </div>
               <div className={""}>
                   <button className={"btn-menu bg-white hover:bg-gray-50"}>
                       <div className={"h-menu-banner"}>
                           <img className={"w-full h-full object-fill"} src={"./assets/icon/icon-menu-blue.svg"} />
                       </div>
                   </button>
               </div>
           </div>
        </div>
    )
}

export const BannerStackPreview = ({width , color}) => {
    return(
        <div className={`bg-blue-400 relative   rounded-full shadow `} style={{width: `${width *2}%`}}>
            <div className={"flex gap-6 w-full justify-between "}>
                <div className={"flex justify-between  w-full bg-blue-600 rounded-full w-full gap-6 py-2 px-5"}>
                    <div className={"flex"}>
                        <div className={""}>
                            <div className={""}>
                                <h2 className={"text-white text-sm"}>
                                    Tiletle
                                </h2>
                            </div>
                            <div className={""}>
                                <p className={"text-xs text-gray-200"}>Deskripsi</p>
                            </div>
                        </div>
                    </div>
                    <div className={""}>
                        <h1 className={"text-white my-auto font-medium"}>20%</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BannerTaskPreview = () =>{
    return(
        <div className={""}>
            <div className={""}>
                <h2 className={""}>A</h2>
            </div>
            <div className={""}>
                <p className={""}>blabla bla</p>
            </div>
        </div>
    )
}

export const BannerPlanPreview = () =>{
    return(
        <div className={"shadow bg-white rounded-md py-1.5 border-r-4 border-r-blue-400 px-4"}>
            <div className={""}>
                <div className={""}>
                    <h2 className={"text-md text-gray-700 font-semibold"}>Title</h2>
                </div>
                <div className={""}>
                    <p className={"text-sm text-gray-500 font-normal"}>12:00 !</p>
                </div>
            </div>
        </div>
    )
}

export const ChartBanner = ({height, lights , title , percentase , total , color}) => {
    return(
        <div className={"w-full relative mt-auto"}>
            <div
                className={`w-full group mt-auto relative ${color} cursor-pointer rounded-md`}
                style={{ height: percentase > 30 ? '200px' : `${height}px` }}
            >
                <div className="hidden group-hover:block absolute right-0 top-6 z-10">
                    <div className={`w-full px-3 py-2  ${lights ? 'bg-gray-500': 'bg-gray-800'} radius-btn-icon-r`}>
                        <div className="w-full text-white">
                            <p className={""} style={{fontSize:"13px"}}>{title}</p>
                            <p className={""} style={{fontSize:"13px"}}>{percentase.toFixed(2)}% : Rp.{total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}