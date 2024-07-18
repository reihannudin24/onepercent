import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {

    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    })

    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <section className={"flex items-center justify-center w-full h-screen bg-gray-900"}>
            <div className={"relative md:p-28  sm:p-20"}>
                <div className={"absolute blob1 w-80 h-80 -left-10 -top-10"}>

                </div>
                <div className={"absolute blob2 w-80 h-80 -right-10 -bottom-10"}>

                </div>
                <main className={"flex h-[70vh]  w-[50vw] rounded-3xl z-10 glasses-container-bg shadow-lg relative"}>
                    <div className={"relative w-full max-w-md my-auto mx-auto px-8 py-12 mt-14 bg-transparent rounded-lg  "}>
                        <div>
                            <h2 className={"text-base font-bold text-white mb-4"}>{"Log In"}</h2>
                            <h1 className={"text-3xl font-bold text-white mb-6"}>{"Welcome back!"}</h1>
                        </div>
                        <p className={"text-white mb-6"}>{"Let we know who you are!"}</p>
                        <form action={"#"} method={"POST"} className={"space-y-4"}>
                            <div>
                                <input type={"email"} placeholder={"What's your email?"} className={"w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"} />
                            </div>
                            <div>
                                <input type={"password"} placeholder={"Enter your password please"} className={"w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"} />
                            </div>
                            <div className={"flex items-center"}>
                                <input type={"checkbox"} id={"remember-me"} className={"text-blue-500 focus:ring-blue-500"} />
                                <label htmlFor={"remember-me"} className={"ml-2 text-white"}>{"Remember me"}</label>
                            </div>
                            <div>
                                <button type={"submit"} className={"w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"}>{"Login Now!"}</button>
                            </div>
                        </form>
                        <div className={"my-6 text-center text-white"}>
                            <span>{"Or"}</span>
                        </div>
                        <div className={"flex justify-around space-x-4"}>
                            <button className={"p-2 rounded-full bg-gray-700 hover:bg-gray-600"}>
                                <img src={"https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"} alt={"Google"} className={"w-6 h-6"} />
                            </button>
                            <button className={"p-2 rounded-full bg-gray-700 hover:bg-gray-600"}>
                                <img src={"https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"} alt={"Google"} className={"w-6 h-6"} />
                            </button>
                            <button className={"p-2 rounded-full bg-gray-700 hover:bg-gray-600"}>
                                <img src={"https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"} alt={"Google"} className={"w-6 h-6"} />
                            </button>
                        </div>
                    </div>
                </main>
            </div>

        </section>

    )
}

export default Login