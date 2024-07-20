import {chartFinance} from "../Helper/Data";
import {ChartBanner} from "../Component/Banner.Component";

function Finance({light}){

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



    return(
        <>
            <section className={""}>
                <div className={""}>
                    <div className={""}>
                        <div className={""}>
                            <div className={""}>
                                <div className={"w-full block md:flex justify-between my-6 md:my-3"}>
                                    <div className={"mb-5"}>
                                        <p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>Balance</p>
                                    </div>
                                    <div className={"mb-5"}>
                                        <p className={`text-sm font-light ${light ? 'text-gray-500' : 'text-blue-50'} `}>Add +</p>
                                    </div>
                                </div>
                                <div className={""}>
                                    <h1 className={`text-5xl ${light ? 'text-gray-800' : 'text-white'} font-medium`}>Schedule Rutinitas Harian</h1>
                                </div>
                            </div>
                            <div className={""}>
                                <div className={""}>
                                    <div className={""}>
                                        <div className={` border-b ${light ? 'border-b-gray-100' : 'border-b-gray-700'} pb-0 md:pb-2`}>
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

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={""}>
                            <div className={""}>
                                <h3 className={""}>Statistic</h3>
                            </div>
                            <div className={""}>
                                <div className={""}>
                                    <div className={""}>
                                        <div className={""}>
                                            <div className={""}>
                                                <div className={""}>
                                                    <img className={""} />
                                                </div>
                                            </div>
                                            <div className={""}>
                                                <p className={""}>Tital Spent</p>
                                                <h2 className={""}>RP.9272888</h2>
                                            </div>
                                        </div>
                                        <div className={""}>
                                            <div className={""}>
                                                <div className={""}>
                                                    <img className={""} />
                                                </div>
                                            </div>
                                            <div className={""}>
                                                <p className={""}>Tital Spent</p>
                                                <h2 className={""}>RP.9272888</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={""}>
                            <div className={""}>
                                <ul className={""}>
                                    <li className={""}>
                                        <div className={""}>
                                            <div className={""}>
                                                <div className={""}>
                                                    <h4 className={""}>Transaksi</h4>
                                                </div>
                                                <div className={""}>
                                                    <p className={""}>17 JUN</p>
                                                </div>
                                            </div>
                                            <ul className={""}>
                                                <li className={""}>
                                                    <div className={""}>
                                                        <div className={""}>
                                                            <div className={""}>
                                                                <div className={""}>
                                                                    <h3 className={""}>Holloword</h3>
                                                                    <h3 className={""}>- Rp.100.000</h3>
                                                                </div>
                                                                <div className={""}>
                                                                    <div className={""}>
                                                                        <img className={""} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={""}>
                                                                <div className={""}>
                                                                    <div className={""}>
                                                                        <img className={""} />
                                                                    </div>
                                                                    <div className={""}>
                                                                        <h3 className={""}>Nama Title</h3>
                                                                        <p className={""}>- - Rp.100.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Finance