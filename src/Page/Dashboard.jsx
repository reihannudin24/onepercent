
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
        "outline" :  123.000,
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
const dashboardTask = [
    {
        'id': 1,
        'title': 'Belajar Website',
        'description': 'HTML : Belajar Website',
        'start_time': '09:00',  // Ensure time format is HH:MM:SS
        'end_time': '12:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 1,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '13:00',  // Ensure time format is HH:MM:SS
        'end_time': '15:00',    // Ensure time format is HH:MM:SS
        'category': 'task',
        'reminder': 'wa/alarm',
        'status': 'selesai',
        'dates': '2024-07-17',     // Assuming a date field
        'type': 'task',            // Assuming a type field based on the example
        'user_id': 1               // Assuming a user_id field based on the example
    },
    {
        'id': 2,
        'title': 'Belajar Pemerograman C',
        'description': 'Bootcamp Devhive : Belajar Pemerograman C',
        'start_time': '15:00',  // Ensure time format is HH:MM:SS
        'end_time': '17:00',    // Ensure time format is HH:MM:SS
        'category': 'schedule',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'sedang berlangsung',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'schedule',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 3,
        'title': 'Belajar Machine Learning',
        'description': 'Supervised Learning : Belajar Machine Learning',
        'start_time': '17:00',  // Ensure time format is HH:MM:SS
        'end_time': '18:00',    // Ensure time format is HH:MM:SS
        'category': 'task',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'task',            // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    },
    {
        'id': 4,
        'title': 'Meet dengan Jweenie',
        'description': 'Cuman gabut sih',
        'start_time': '19:00',  // Ensure time format is HH:MM:SS
        'end_time': '20:00',    // Ensure time format is HH:MM:SS
        'category': 'planning',        // Assuming 'category' field should be 'task'
        'reminder': 'wa/alarm',
        'status': 'belum mulai',
        'dates': '2024-07-17',     // Assuming the same date for consistency
        'type': 'planning',        // Use the 'type' from the example
        'user_id': 1               // Assuming the same user_id for consistency
    }
];


function Dashboard({light}){

    const now = new Date();
    const times = [];

// Generate all time slots for the day
    for (let hour = 0; hour < 24; hour++) {
        const hours = hour.toString().padStart(2, '0');
        times.push(`${hours}:00`);
        times.push(`${hours}:30`);
    }

    let budget = 500.000;


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



    // Function to calculate the width based on start and end times
    const calculateWidth = (start, end) => {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        const durationInMinutes = (endTime - startTime) / (1000 * 60);
        const slots = durationInMinutes / 30;
        return `${slots * 11.1}vh`; // Each slot is 16.6667% of the width
    };


    const calculatePercent = (start, end) => {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        const durationInMinutes = (endTime - startTime) / (1000 * 60);
        const slots = durationInMinutes / 30;

        return slots * 4.166666666666667;
    }

    const calculateRoundedHour= (start, end) => {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        const durationInMinutes = (endTime - startTime) / (1000 * 60);

        return durationInMinutes;
    }


    return(
        <>
            <section className={"sticky pt-20"}>
                <div className={"w-full"}>
                    <div className={"w-full"}>
                        <div className={""}>
                            <div className={"w-full flex justify-between my-3"}>
                                <div className={"mb-5"}>
                                    <h1 className={`text-2xl ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Dashboard Utama</h1>
                                    <p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>12/07/2024</p>
                                </div>
                                <div>
                                    <button className={"bg-blue-600 shadow hover:bg-blue-700 w-full  text-sm text-white py-2.5 px-5 rounded-md"}>
                                        Tambahkan Jadwal baru
                                    </button>
                                </div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={` ${light ? 'bg-primary-ice' : 'bg-primary-ice-dark'} bg-primary-ice w-9/12 rounded-xl px-6 py-6`}>
                                    <div className={"w-full"}>
                                        <div className={"w-full flex"}>
                                            <div className={"w-4/12"}>
                                                <div className={"w-11/12 "}>
                                                    <div>
                                                        <div className={"mb-3"}>
                                                            <h1 className={`text-lg ${light ? 'text-gray-800' : 'text-white'} font-medium`}>List Jadwal harian</h1>
                                                        </div>
                                                    </div>
                                                    <div className={"mt-2  w-full"}>
                                                        <ul className={"my-auto h-card-banner scrollbar-hide overflow-y-scroll block gap-6"}>
                                                            {dashboardTask.map((item , index) => {
                                                                return(
                                                                    <li key={index} className={"my-5 relative"}>
                                                                        <BannerPreviewTaskCard light={light} type={item?.type}  title={item?.title} description={item?.description} />
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"w-8/12"}>
                                                <div className={"w-full mx-auto relative"}>
                                                    <div className={"w-full relative"}>
                                                        <ul className={"flex relative gap-10 overflow-y-hidden scrollbar-hide overflow-x-scroll w-full"}>
                                                            {times.map((item, index) => {
                                                                return (
                                                                    <li key={index} className={"w-time-item text-center"}>
                                                                        <p className={`${light ? 'text-black' : 'text-white'}`}>{item}</p>
                                                                        <div className={`h-96 w-line mx-auto relative ${light ? 'bg-gray-200' : 'bg-gray-700'}`}>
                                                                            {dashboardTask?.map((itemD, taskIndex) => {
                                                                                if (itemD.start_time === item) {
                                                                                    const calculateTop = (start, end) => {
                                                                                        const startTime = new Date(`1970-01-01T${start}:00`);
                                                                                        const endTime = new Date(`1970-01-01T${end}:00`);
                                                                                        const durationInMinutes = (endTime - startTime) / (1000 * 60);
                                                                                        const slots = durationInMinutes / 30;

                                                                                        if (taskIndex === 0) {
                                                                                            return `0px`; // Top position for index 0
                                                                                        } else {
                                                                                            if (slots === 2 ){
                                                                                                return `${slots + 62 * taskIndex}px`;
                                                                                            }else {
                                                                                                return `${slots + 60 * taskIndex}px`;
                                                                                            }
                                                                                        }
                                                                                    };

                                                                                    const width = calculateWidth(itemD.start_time, itemD.end_time);
                                                                                    const top = calculateTop(itemD.start_time, itemD.end_time);
                                                                                    const percent = calculatePercent(itemD.start_time, itemD.end_time);
                                                                                    const roundedhour = calculateRoundedHour(itemD.start_time, itemD.end_time);
                                                                                    return (
                                                                                        <div key={taskIndex} className={`right-0 h-full left-0 absolute task-index-${taskIndex} z-10 my-6`} style={{ width: `${width}vh`, top: `${top}` }}>
                                                                                            <BannerStackPreview title={itemD?.title} description={item?.description} percent={percent} roundHour={roundedhour} status={itemD?.status} light={light} type={itemD.category} width={width} />
                                                                                        </div>
                                                                                    );
                                                                                } else {
                                                                                    return null;
                                                                                }
                                                                            })}
                                                                        </div>
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
                                <div className={"w-3/12 "}>
                                    <div className={"w-full ms-auto"}>
                                        <div className={`shadow px-3 pt-3 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-6 pb-3 mt-2 border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-lg ${light ? 'text-gray-600' : 'text-blue-50'} font-normal `}>Pengeluaran</h2>
                                            </div>
                                            <div className={"w-full mt-5 "}>
                                                <div className={"py-5 "}>
                                                    <div className={` border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} pb-2`}>
                                                        <ul className={"flex w-full gap-3 "}>
                                                            {chartFinance.map((item) => {
                                                                totalOutline.push(item?.outline)
                                                                const persentasePerItem  = (item?.outline / budget) * 100;
                                                                const heightChart = (persentasePerItem / 100) * 700;
                                                                return(
                                                                    <li className={"w-2/12 relative mt-auto"}>
                                                                        {persentasePerItem > 30 ? (
                                                                            <ChartBanner color={"bg-gre-85"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem >20) ?(
                                                                            <ChartBanner color={"bg-gre-70"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 15) ?(
                                                                            <ChartBanner color={"bg-gre-50"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 10 ) ?(
                                                                            <ChartBanner color={"bg-gre-30"} title={item?.day}  height={heightChart} lights={true} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem < 5) ?(
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
                                                                <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'}`}>Budget :</p>
                                                                <h2 className={"font-medium text-md text-green-500"}> {budget}.000</h2>
                                                            </div>
                                                            <div className={"my-1"}>
                                                                <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'}`}>Total Pengeluaran :</p>
                                                                <h2 className={"font-medium text-md text-red-600"}> {totalDefisit}.000</h2>
                                                            </div>
                                                            <div className={"my-1"}>
                                                                <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'} `}>Sisa :</p>
                                                                <h2 className={`font-medium ${light ? 'text-gray-600' : 'text-gray-50'} text-md `}>Sisa : {budget - totalDefisit}.000</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full pt-4 pb-8"}>
                                <div className={"w-full gap-4  flex"}>
                                    <div className={"w-5/12"}>
                                        <div className={`shadow px-3 pt-3 pb-2 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-2 pb-3  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-lg ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Goals/Target Anda</h2>
                                            </div>
                                            <div className={"my-4"}>
                                                <ul className={""}>
                                                    <li className={""}>
                                                       <BannerTargetPreview />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"w-7/12 mx-auto"}>
                                        <div className={`shadow px-3 pt-2 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-2 pb-3 mt-2 border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-lg ${light ? 'text-gray-800' : 'text-white'} font-normal`}>Catatan Anda</h2>
                                            </div>
                                            <div className={"w-full"}>
                                                <ul className={"w-full gap-3 flex"}>
                                                    <li className={"my-3 w-3/12"}>
                                                        <BannerNotePreview />
                                                    </li>
                                                    <li className={"my-3 w-3/12"}>
                                                        <BannerNotePreview />
                                                    </li>
                                                    <li className={"my-3 w-3/12"}>
                                                        <BannerNotePreview />
                                                    </li>
                                                    <li className={"my-3 w-3/12"}>
                                                        <BannerNotePreview />
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

export const BannerPreviewTaskCard = ({light , type , title , description }) => {
    return(
        <div className={` ${light ? `bg-hover-${type}` :  `bg-hover-${type}-dark` }  cursor-pointer rounded-full shadow py-2 px-5`}>
           <div className={"flex justify-between"}>
               <div className={"flex gap-3"}>
                   <div className={`wh-icon text-${type} rounded-full relative`}>
                       <h1 className={" w-1 h-1 text-2xl font-medium my-auto absolute  -left-3 right-0 top-1  mx-auto"}>A</h1>
                   </div>
                   <div className={""}>
                       <div className={""}>
                           <h3 className={`text-sm ${light ? 'oneline-truncate' : 'text-white oneline-truncate'} `}>{title}</h3>
                           <p className={`text-xs  ${light ? 'text-gray-600': 'text-gray-200'} oneline-truncate `}>{description}</p>
                       </div>
                   </div>
               </div>
               <div className={""}>
                   <button className={`btn-menu ${light ?'bg-white hover:bg-gray-50' :  'bg-hover-button-dark'} `}>
                       <div className={"h-menu-banner"}>
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
        <div className={` absolute bg-${type} rounded-md gap-6 py-2 px-2`} style={{width: `${width} `}}>
          <div className={"block"}>
              <div className={"w-full flex justify-between"}>
                  <div className={"flex w-10/12"}>
                      <div className={""}>
                          <div className={"text-left"}>
                              <h2 className={`flex flex-wrap text-white text-sm`}>
                                  {truncate20(title)}
                              </h2>
                          </div>
                      </div>
                  </div>
                  <div className={"w-2/12 text-right"}>
                      <h1 className={`text-white  ${light} my-auto font-medium`}>{Math.round(percent)}%</h1>
                  </div>
              </div>
              <div className={"w-full flex justify-between"}>
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

export const BannerTargetPreview = ({light, type}) =>{
    return(
        <div className={" bg-white h-note rounded-md py-1.5 border-r-2 border-r-blue-400 px-4"}>
            <div className={""}>

            <h2 className={""}>A</h2>
            </div>
            <div className={""}>
                <p className={""}>blabla bla</p>
            </div>
        </div>
    )
}

export const BannerNotePreview = () =>{
    return(
        <div className={" bg-white h-note rounded-md py-1.5 border-r-2 border-r-blue-400 px-4"}>
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
                className={`w-full group mt-auto relative ${color} cursor-pointer rounded-bar`}
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

