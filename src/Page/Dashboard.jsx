import {useEffect, useState} from "react";
import {
    BannerNotePreview,
    BannerPreviewTaskCard,
    BannerStackPreview,
    BannerTargetPreview,
    ChartBanner
} from "../Component/Banner.Component";

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
const notes = [
    {
        "id" : 1,
        "title" : "Title Notes",
        "content" : "Contenes Notes" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    }, {
        "id" : 2,
        "title" : "Title Notes 2",
        "content" : "Contenes Notes 2" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    },  {
        "id" : 3,
        "title" : "Title Notes 3",
        "content" : "Contenes Notes 3" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",
        "status" : "private",
        "user_id" : 1,
    },  {
        "id" : 4,
        "title" : "Title Notes 4",
        "content" : "Contenes Notes 4" ,
        "date" : "18/07/2024",
        "mode" : "dark",
        "color" : "yellow",

        "status" : "private",
        "user_id" : 1,
    }
]
const target = [
    {
        id : 1,
        "title" : "Kurusin badan ",
        "description" : "Aku mau Kurusin badan ",
    },  {
        id : 2,
        "title" : "Aku mau kaya ",
        "description" : "Aku mau kaya ",
    }
]


// Hook untuk mendeteksi ukuran layar

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
};



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
    const isMd = useMediaQuery('(min-width: 768px)');
    const isSm = useMediaQuery('(max-width: 500px)');

    const calculateWidth = (start, end) => {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        const durationInMinutes = (endTime - startTime) / (1000 * 60);
        const slots = durationInMinutes / 30;

        if (isSm) {
            return `${slots * 10.85}vh`; // Lebar untuk layar < md
        } else {
            return `${slots * 11.1}vh`; // Lebar untuk layar >= md
        }
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
                            <div className={"w-full block md:flex justify-between my-6 md:my-3"}>
                                <div className={"mb-5"}>
                                    <h1 className={`text-2xl ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Dashboard Utama</h1>
                                    <p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>12/07/2024</p>
                                </div>
                                <div className={"hidden md:block"}>
                                    <button className={"bg-blue-600 shadow hover:bg-blue-700 w-full  text-sm text-white py-2.5 px-5 rounded-md"}>
                                        Tambahkan Jadwal baru
                                    </button>
                                </div>
                            </div>
                            <div className={"block md:flex gap-4"}>
                                <div className={` ${light ? 'bg-primary-ice' : 'bg-primary-ice-dark'} bg-primary-ice w-full md:w-9/12 rounded-xl px-5 md:px-6 py-6`}>
                                    <div className={"w-full"}>
                                        <div className="w-full flex-wrap flex">
                                            <div className="w-full md:w-4/12 order-2 md:order-1">
                                                <div className="w-full md:w-11/12">
                                                    <div>
                                                        <div className="mb-3">
                                                            <h1 className={`text-xl md:text-lg ${light ? 'text-gray-800' : 'text-white'} font-medium`}>List Jadwal Harian</h1>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 w-full">
                                                        <ul className="my-auto h-card-banner scrollbar-hide overflow-y-scroll block gap-6">
                                                            {dashboardTask.map((item, index) => (
                                                                <li key={index} className="my-3 w-full md:my-5 relative">
                                                                    <BannerPreviewTaskCard light={light} type={item?.type} title={item?.title} description={item?.description} />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-8/12 order-1 pb-4 mb-4 md:order-2">
                                                <div className="w-full mx-auto relative">
                                                    <div className="w-full relative">
                                                        <ul className="flex relative gap-20 md:gap-10 overflow-y-hidden scrollbar-hide overflow-x-scroll w-full">
                                                            {times.map((item, index) => (
                                                                <li key={index} className="w-time-item text-center">
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
                                                                                        if (slots === 2) {
                                                                                            return `${slots + 62 * taskIndex}px`;
                                                                                        } else {
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
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={"w-full my-6 md:my-0 md:w-3/12 "}>
                                    <div className={"w-full md:ms-auto"}>
                                        <div className={`shadow px-3 pt-3 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-6 pb-3 mt-2 border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-xl md:text-lg ${light ? 'text-gray-600' : 'text-blue-50'} font-normal `}>Pengeluaran</h2>
                                            </div>
                                            <div className={"w-full mt-5 "}>
                                                <div className={"pb-3 md:pt-5 md:pb-5 "}>
                                                    <div className={` border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} pb-2`}>
                                                        <ul className={"flex w-11/12 mx-auto  md:w-full gap-3 "}>
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
                                                        <div className={" py-2 flex md:block flex-wrap px-2"}>
                                                            <div className={"w-6/12 my-1"}>
                                                                <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'}`}>Budget :</p>
                                                                <h2 className={"font-medium text-md text-green-500"}> {budget}.000</h2>
                                                            </div>
                                                            <div className={"w-6/12 my-1"}>
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
                            <div className={"w-full  pt-4 pb-8 md:pb-0"}>
                                <div className={"w-full gap-4 block  md:flex"}>
                                    <div className={"w-full md:w-5/12"}>
                                        <div className={`shadow px-3 pt-3 pb-2 ${light ? 'bg-gray-50' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-2 pb-3  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-lg ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Goals/Target Anda</h2>
                                            </div>
                                            <div className={"my-4"}>
                                                <ul className={"block w-full"}>
                                                    {target.map((item , index) => {
                                                        return(
                                                            <li key={index} className={"my-2"}>
                                                                <BannerTargetPreview title={item?.title} description={item?.description} light={light} />
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"w-full my-4  md:my-0 md:w-7/12 mx-auto"}>
                                        <div className={`shadow px-3 pt-2 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-2 pb-3 mt-2 border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-lg ${light ? 'text-gray-800' : 'text-white'} font-normal`}>Catatan Anda</h2>
                                            </div>
                                            <div className={"w-full"}>
                                                <ul className={"w-full  flex flex-wrap"}>
                                                    {notes.map((item, index) => {
                                                        return(
                                                            <li key={index} className={"my-3 w-6/12 md:w-3/12"}>
                                                                <BannerNotePreview color={item?.color} title={item?.title}  mode={item?.mode} date={item?.date} content={item?.content} />
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
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard

