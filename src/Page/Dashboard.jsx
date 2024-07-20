import {useEffect, useState} from "react";
import {
    BannerNotePreview,
    BannerPreviewTaskCard,
    BannerStackPreview,
    BannerTargetPreview,
    ChartBanner
} from "../Component/Banner.Component";
import {Link} from "react-router-dom";
import {chartFinance, dashboardTask, mainDashboard, notes, target} from "../Helper/Data";


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



function Dashboard({light , color}){

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
            <div className={`md:hidden ${light ? 'bg-primary-ice' : 'bg-primary-ice-dark'} absolute w-full left-0 right-0 top-0 h-56`}>
                <div>

                </div>
            </div>
            <section className={"sticky pt-16"}>
                <div className={"w-full"}>
                    <div className={"w-full"}>
                        <div className={" md:mt-4 "}>
                            {/*<div className={"w-full  block md:flex justify-between mt-5 md:my-3"}>*/}
                            {/*    /!*<div className={"mb-3 md:mb-5"}>*!/*/}
                            {/*        /!*<h1 className={` text-2xl md:text-2xl ${light ? `text-${color}-500` : 'text-white'} font-medium`}>Budgets</h1>*!/*/}
                            {/*        /!*<p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>12/07/2024</p>*!/*/}
                            {/*    </div>*/}
                            {/*    <div className={"hidden md:block"}>*/}
                            {/*        <Link to={ "/create/new/schedule"}>*/}
                            {/*            <div className={"bg-blue-600 shadow hover:bg-blue-700 w-full  text-sm text-white py-2.5 px-5 rounded-md"}>*/}
                            {/*                Tambahkan Jadwal baru*/}
                            {/*            </div>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className={"flex flex-wrap   md:flex gap-1 md:gap-0 justify-between"}>
                                <div className={`order-2 md:order-1   w-full md:w-9/12  `}>
                                    <div className={"md:pe-4"}>
                                        <div className={`w-full  ${light ? 'bg-primary-ice' : 'bg-primary-ice-dark'} rounded-xl  px-5 md:px-6 py-3 `}>
                                            <div className="w-full flex-wrap flex">
                                                <div className="w-full md:w-4/12 order-2 md:order-1">
                                                    <div className="w-full md:w-11/12">
                                                        <div>
                                                            <div className={`mt-1 mb-2 pb-3  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                                <h1 className={`text-md md:text-lg ${light ? 'text-gray-800' : 'text-white'} font-medium`}>List Jadwal Harian</h1>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2 w-full">
                                                            <ul className="my-auto h-card-banner scrollbar-hide overflow-y-scroll block gap-6">
                                                                {dashboardTask.map((item, index) => (
                                                                    <li key={index} className="my-3 w-full md:my-2.5 relative">
                                                                        <BannerPreviewTaskCard light={light} type={item?.type} title={item?.title} description={item?.description} />
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-8/12 order-1 md:pb-0 pb-4 md:mb-0 mb-4 md:order-2">
                                                    <div className="w-full mx-auto relative">
                                                        <div className="w-full relative">
                                                            <ul className="flex relative gap-20 md:gap-10 h-72 md:h-96 overflow-y-auto md:overflow-y-hidden scrollbar-hide overflow-x-scroll w-full">
                                                                {times.map((item, index) => (
                                                                    <li key={index} className="w-time-item text-center">
                                                                        <p className={`${light ? 'text-black' : 'text-white'}`}>{item}</p>
                                                                        <div className={`min-h-screen md:h-96 w-line mx-auto relative ${light ? 'bg-gray-200' : 'bg-gray-700'}`}>
                                                                            {dashboardTask?.map((itemD, taskIndex) => {
                                                                                if (itemD.start_time === item) {
                                                                                    const calculateTop = (start, end) => {
                                                                                        const startTime = new Date(`1970-01-01T${start}:00`);
                                                                                        const endTime = new Date(`1970-01-01T${end}:00`);
                                                                                        const durationInMinutes = (endTime - startTime) / (1000 * 60);
                                                                                        const slots = durationInMinutes / 30;

                                                                                        if (taskIndex === 0) {
                                                                                            return `0px`;
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
                                    <div className={"w-full hidden md:block pt-4 pb-8 md:pb-0 md:pe-4"}>
                                        <div className={"w-full gap-4 block  md:flex"}>
                                            <div className={"w-full md:w-5/12"}>
                                                <div className={`shadow px-3 pt-3 pb-2 ${light ? 'bg-gray-50' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                                    <div className={`mb-2 pb-2  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                        <div>
                                                            <h2 className={`text-md py-2 ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Goals/Target Anda</h2>
                                                        </div>
                                                    </div>
                                                    <div className={"my-4"}>
                                                        <ul className={"block w-full"}>
                                                            {target.map((item , index) => {
                                                                return(
                                                                    <li key={index} className={"my-2 md:my-1"}>
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
                                                    <div className={`mb-2 pb-3  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                        <h2 className={`text-md py-2 ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Catatan Anda</h2>
                                                    </div>
                                                    <div className={"w-full"}>
                                                        <ul className={"w-full  flex flex-wrap"}>
                                                            {notes.map((item, index) => {
                                                                return(
                                                                    <li key={index} className={"my-3  w-6/12 md:w-3/12"}>
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
                                <div className={"order-1 md:order-2 w-full my-2 md:my-0 md:w-3/12 "}>

                                    <div className={"w-full md:ms-auto"}>
                                        {/*Budget now*/}
                                        <div className={"w-full"}>
                                            <div className={"my-2 w-full"}>
                                                <div className={"my-4 md:my-2"}>
                                                    <p className={"md:text-sm text-gray-400"}>Welcome back, Reihannudin</p>
                                                    <div className={""}>
                                                        <h2 className={`text-xl md:text-lg font-semibold ${light ? 'text-gray-700' : 'text-gray-200'} `}>16 March 2024</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`shadow-md px-3 mb-4 md:mb-2  py-2 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={"w-full flex justify-between"}>
                                                <div>
                                                    <p className={"text-blue-500 font-semibold text-sm "}>Total</p>
                                                    <div className={""}>
                                                        <div className={"w-full text-left"}>
                                                            <h1 className={`text-xl md:text-md  ${light ? 'text-blue-600' : 'text-blue-400'}  font-semibold`}>RP.4.000.000</h1>
                                                        </div>
                                                        <div>
                                                            <div className={"my-1"}>
                                                                <p className={"text-red-500 text-xs"}>- RP.100.000 Hari ini</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={"my-3 "}>
                                                        <Link to={"/financial"}>
                                                            <div className={`${light ? 'btn-logo-3-light-xl': 'btn-logo-2 '}  my-2 mx-auto`}>
                                                                <div className={"-mt-1.5 -mx-1.5"}>
                                                                   <div className={"h-8 w-8"}>
                                                                       <img className={"w-full h-full object-cover"} src={"assets/icon/icon-add.svg"} />
                                                                   </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={""}>
                                        <div className={"w-11/12 mx-auto"}>
                                            <div className={"py-2"}>
                                                <p className={` ${light ? 'text-gray-600' : 'text-gray-200'}   font-semibold text-sm`}>My Tasks</p>
                                            </div>
                                        </div>
                                        <div className={"w-full"}>
                                            <ul className={"w-full flex flex-wrap justify-between"}>
                                                {mainDashboard.map((item, index) => {
                                                    return(
                                                        <li className={"w-6/12"} key={index}>
                                                            <MainDashboardCard color={item?.id} icon={item?.icon} title={item?.title} qty={item?.quantity} />
                                                        </li>
                                                    )
                                                })}

                                            </ul>
                                        </div>

                                    </div>

                                    <div className={"w-full my-2 md:ms-auto"}>
                                        <div className={` md:px-3 md:shadow  pt-2 ${light ? 'bg-white' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-6 pb-3 mt-2 border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-md py-1 ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Pengeluaran</h2>
                                            </div>
                                            <div className={"w-full mt-5 "}>
                                                <div className={"pb-0  md:pt-5 md:pb-5 "}>
                                                    <div className={`border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} pb-0 md:pb-2`}>
                                                        <ul className={"flex w-10/12 mx-auto  md:w-full gap-2 md:gap-3 "}>
                                                            {chartFinance.map((item) => {
                                                                totalOutline.push(item?.outline)
                                                                const persentasePerItem  = (item?.outline / budget) * 100;
                                                                const heightChart = (persentasePerItem / 100) * 700;
                                                                return(
                                                                    <li className={"w-2/12 relative mt-auto"}>
                                                                        {persentasePerItem > 38 ? (
                                                                            <ChartBanner color={"bg-gre-85"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem >28) ?(
                                                                            <ChartBanner color={"bg-gre-70"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 20) ?(
                                                                            <ChartBanner color={"bg-gre-50"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem > 13 ) ?(
                                                                            <ChartBanner color={"bg-gre-30"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ): (persentasePerItem < 8) ?(
                                                                            <ChartBanner color={"bg-gre-15"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        ) :(
                                                                            <ChartBanner color={"bg-chart"} title={item?.day}  height={heightChart} lights={light} percentase={persentasePerItem} total={item?.outline}/>
                                                                        )}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className={"my-2 md:my-0"}>
                                                        <div className={" pt-1 md:pt-2 md:pb-2 flex md:block flex-wrap "}>
                                                            <div className={"w-4/12 md:w-full my-1"}>
                                                                <div className={` ${light ? 'bg-blue-50' : 'bg-gray-800'}   h-32 md:h-16 w-11/12 md:w-full pt-2 md:pt-0  px-4 pb-4 rounded-2xl`}>
                                                                    <div className={"block gap-2 md:flex"}>
                                                                        <div className={"my-2 md:my-auto"}>
                                                                            <div className={`h-10 w-10 ${light ? 'bg-white' : 'bg-blue-200'}  rounded-md`}>
                                                                                <div className={"h-icon-spend mx-auto pt-2 "}>
                                                                                    <img className={"w-full h-full my-auto object-cover"} src={'assets/icon/icon-wallet.svg'}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={"my-3"}>
                                                                            <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'}`}>Budget :</p>
                                                                            <h2 className={`font-medium text-md md:text-sm  ${light ? 'text-green-700' : 'text-green-500'}`}>Rp.{budget}.000</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={"w-4/12 md:w-full my-1"}>
                                                                <div className={` ${light ? 'bg-blue-50' : 'bg-gray-800'}   h-32 md:h-16 w-11/12 md:w-full pt-2 md:pt-0  px-4 pb-4 rounded-2xl`}>
                                                                    <div className={"block gap-2 md:flex"}>
                                                                        <div className={"my-2 md:my-auto"}>
                                                                            <div className={`h-10 w-10 ${light ? 'bg-white' : 'bg-blue-200'}  rounded-md`}>
                                                                                <div className={"h-icon-spend mx-auto pt-2 "}>
                                                                                    <img className={"w-full h-full my-auto object-cover"} src={'assets/icon/icon-outline.svg'}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={"my-3"}>
                                                                            <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'}`}>Pengeluaran:</p>
                                                                            <h2 className={`font-medium text-md  ${light ? ' text-red-600' : 'text-red-500'} `}>Rp.{totalDefisit}.000</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={"w-4/12 md:w-full my-1"}>
                                                                <div className={` ${light ? 'bg-blue-50' : 'bg-gray-800'}   h-32 md:h-16 w-11/12 md:w-full pt-2 md:pt-0  px-4 pb-4 rounded-2xl`}>
                                                                    <div className={"block gap-2 md:flex"}>
                                                                        <div className={"my-2 md:my-auto"}>
                                                                            <div className={`h-10 w-10 ${light ? 'bg-white' : 'bg-blue-200'}  rounded-md`}>
                                                                                <div className={"h-icon-spend mx-auto pt-2 "}>
                                                                                    <img className={"w-full h-full my-auto object-cover"} src={'assets/icon/icon-outline.svg'}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className={"my-3"}>
                                                                            <p className={`text-sm ${light ? 'text-gray-600' : 'text-gray-100'} `}>Sisa :</p>
                                                                            <h2 className={`font-medium  text-md ${light ? 'text-gray-600' : 'text-gray-50'} text-md `}>Rp.{budget - totalDefisit}.000</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full block md:hidden pt-4 pb-8 md:pb-0"}>
                                <div className={"w-full gap-4 block  md:flex"}>
                                    <div className={"w-full md:w-5/12"}>
                                        <div className={`shadow px-3 pt-3 pb-2 ${light ? 'bg-gray-50' : 'bg-primary-ice-dark'} rounded-xl w-full`}>
                                            <div className={`mb-2 pb-2  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <div>
                                                    <h2 className={`text-md py-2 ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Goals/Target Anda</h2>
                                                </div>
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
                                            <div className={`mb-2 pb-3  border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} `}>
                                                <h2 className={`text-md py-2 ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Catatan Anda</h2>
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


export const MainDashboardCard = ({color, title, icon, qty}) => {

    return(
        <>
            <div className={`bg-primary-${color} py-2 rounded-md w-11/12 mx-auto my-2 `}>
                <div className={"w-11/12 mx-auto text-white"}>
                    <div className={"bg-white relative h-icon-rounded"}>
                        <div className={"absolute  right-1.5  bottom-1.5"}>
                            <div className={"h-icon-rounded-i relative"}>
                                <img className={"w-full my-auto mx-auto"} src={`assets/icon/component/icon-${icon}`} alt={'logo'} />
                            </div>
                        </div>

                    </div>
                    <div className={"block "}>
                        <h2 className={"text-md mt-2 font-light "}>{title}</h2>
                        <div className={"flex  justify-between"}>
                            <div className={"line-qty"} id={'line'}>

                            </div>
                            <div className={""}>
                                <div className={"h-img-arrow"}>
                                    <img className={"w-full h-full object-cover my-auto"} src={"assets/icon/icon-arrow.svg"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

