import {useEffect, useState} from "react";
import { format, addDays, subDays } from 'date-fns';
import {schedule} from "../Helper/Data";
import {CardCalendar, CardSchedule} from "../Component/Card.Component";
import {InputComponent} from "../Component/Input.Component";


function AddNewSchedule({light}){

    const [formData, setFormData] =  useState({
        'title' : '',
        'description' : '',
        'category' : '',
        'reminder' : '',
        'start_time' : '',
        'end_time' : '',
        'start_dates' : '',
        'end_dates' : '',
        'type' : '',
        'status' : '',
    });

    const [isTitleFocused, setIsTitleFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    const [isCategoryFocused, setIsCategoryFocused] = useState(false);
    const [isReminderFocused, setIsReminderFocused] = useState(false);
    const [isStartTimeFocused, setIsStartTimeFocused] = useState(false);
    const [isEndTimeFocused, setIsEndTimeFocused] = useState(false);
    const [isStartDatesFocused, setIsStartDatesFocused] = useState(false);
    const [isEndDatesFocused, setIsEndDatesFocused] = useState(false);
    const [isTypeFocused, setIsTypeFocused] = useState(false);

    const onChange = (e) => {
        const {name, value} =  e.target;
        setFormData((prevData) => ({
            ...prevData, [name] : value
        }))
    }

    const [startDate, setStartDate] = useState(new Date());
    const [direction, setDirection] = useState('');
    const [scrolling, setScrolling] = useState(false);

    const handleNextWeek = () => {
        setDirection('');
        setTimeout(() => {
            setDirection('next');
            setStartDate(prevDate => addDays(prevDate, 1));
        }, 10);
    };

    const handlePreviousWeek = () => {
        setDirection('');
        setTimeout(() => {
            setDirection('prev');
            setStartDate(prevDate => subDays(prevDate, 1));
        }, 10);
    };


    const generateDates = () => {
        return Array.from({length : 7}, (_, i) => addDays(startDate, i));
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <section className={"sticky pt-20"}>
                <div className={"w-full"}>
                    <div className={"w-full"}>
                        <div className={""}>
                            <div className={"w-full gap-4 block md:flex  justify-between "}>
                                <div className={"w-full md:w-3/12"} >
                                    <div className={"w-full mx-auto  mb-3 "}>
                                        <div className={"w-full "}>
                                            <div className={"bg-white  border-t border-b border-gray-200 py-2 px-5 "}>
                                                <div className={"flex gap-4"}>
                                                    <h1 className={"text-blue-500 font-semibold white my-auto text-xl"}>
                                                        18
                                                    </h1>
                                                    <div className={"w-11/12 mx-auto "}>
                                                        <div className={"w-full text-left"}>
                                                            <h3 className={"text-md font-semibold text-blue-500"}>Friday</h3>
                                                            <p className={"text-blue-500 text-xs"}>July 2024</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"w-full  rounded-md   me-auto  pb-2 "}>
                                        <div className={"w-full my-2"}>
                                            <div className={"w-full mx-auto"}>
                                                <div className={"w-full mx-auto"}>
                                                    <ul className={"block relative scrollbar-hide "}>
                                                        {schedule.map((item, index) => {
                                                            return(
                                                                <li key={index} className={"my-1.5"}>
                                                                    <CardSchedule light={light} color={item?.color} title={item?.title} startTime={item?.start_time} endTime={item?.end_time} date={item?.dates}/>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-9/12 relative ">
                                    <div className={`sticky-header mx-auto smooth ${scrolling ? 'scrolled' : ''}`}>
                                        <div className="shadow rounded-lg px-2 md:px-5 py-5">
                                            <div className="w-full relative h-full">
                                                <div className="absolute z-10 top-5 bottom-0 left-0 right-0 w-full">
                                                    <div className="relative h-full w-full">
                                                        <div className="w-full flex justify-between">
                                                            <div className="my-auto">
                                                                <button onClick={handlePreviousWeek} className="bg-white shadow border border-gray-100 text-gray-600 hover:bg-blue-100 hover:text-white rounded-full px-4 py-2">
                                                                    -
                                                                </button>
                                                            </div>
                                                            <div className="my-auto">
                                                                <button onClick={handleNextWeek} className="bg-white shadow border border-gray-100 text-gray-600 hover:bg-blue-100 hover:text-white rounded-full px-4 py-2">
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul key={startDate} className={`w-full md:w-11/12 mx-auto relative h-full flex flex-wrap md:flex-nowrap md:gap-2 ${direction}`}>
                                                    {generateDates().map((date, index) => (
                                                        <li key={index} className={`w-4/12 md:w-3/12 date-item ${direction}`}>
                                                            <CardCalendar
                                                                date={format(date, 'dd')}
                                                                month={format(date, 'MMMM')}
                                                                years={format(date, 'yyyy')}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                            <div className="my-4">
                                                <form>
                                                    <div className="w-full gap-3 block md:flex justify-between">
                                                        <div className="w-full md:w-6/12">
                                                            <InputComponent state={isTitleFocused} setState={setIsTitleFocused} id="title" name="Schedule Title" type="text" onChange={onChange} value={formData.title} placeholder="Enter Schedule Name" />
                                                        </div>
                                                        <div className="w-full md:w-6/12">
                                                            <InputComponent state={isDescriptionFocused} setState={setIsDescriptionFocused} id="description" name="Description" type="text" onChange={onChange} value={formData.description} placeholder="Enter Schedule Description" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full gap-3 block md:flex justify-between">
                                                        <div className="w-full md:w-6/12">
                                                            <InputComponent state={isCategoryFocused} setState={setIsCategoryFocused}  id="category" name="Category" type="text" onChange={onChange} value={formData.category} placeholder="Enter Category" />
                                                        </div>
                                                        <div className="w-full md:w-6/12">
                                                            <InputComponent state={isReminderFocused} setState={setIsReminderFocused}  id="reminder" name="Reminder" type="text" onChange={onChange} value={formData.reminder} placeholder="Enter Reminder" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full block md:flex gap-4">
                                                        <div className="w-full gap-3 flex justify-between">
                                                            <div className="w-6/12">
                                                                <InputComponent id="start_time" name="Start Time" type="time" onChange={onChange} value={formData.start_time} placeholder="Enter Start Time" />
                                                            </div>
                                                            <div className="w-6/12">
                                                                <InputComponent id="end_time" name="End Time" type="time" onChange={onChange} value={formData.end_time} placeholder="Enter End Time" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full gap-3 flex justify-between">
                                                            <div className="w-6/12">
                                                                <InputComponent id="start_dates" name="Start Date" type="date" onChange={onChange} value={formData.start_dates} placeholder="Enter Start Date" />
                                                            </div>
                                                            <div className="w-6/12">
                                                                <InputComponent id="end_dates" name="End Date" type="date" onChange={onChange} value={formData.end_dates} placeholder="Enter End Date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <select className="relative w-full h-input block border-2 px-4 rounded-lg border-gray-300">
                                                            <option>Schedule</option>
                                                            <option>Planning</option>
                                                        </select>
                                                    </div>
                                                    <div className="w-full mt-10 flex justify-between">
                                                        <div></div>
                                                        <div>
                                                            <button className="bg-blue-600 shadow hover:bg-blue-700 w-full text-sm text-white py-2.5 px-5 rounded-md">
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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






export default AddNewSchedule