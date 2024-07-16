import {useState} from "react";
import {Link} from "react-router-dom";


function Login(){

    const [formData, setFormData] = useState({
        'email' : '',
        'password' : '',
    })

    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);

    const onChange = (e) => {
        const {name , value} =  e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return(
        <section className={"w-full bg-auth relative min-h-screen "}>
            <div className={"w-full xl:w-5/12 mx-auto relative h-full  my-auto"}>
                <div className={"md:w-11/12 mx-auto absolute bottom-0 top-0 right-0 left-0"}>
                    <div className={"md:w-11/12 mx-auto bg-white rounded-2xl pb-4 my-auto md:shadow-auth"}>
                        <div className={"md:w-96  mx-auto"}>
                            <div className={"block h-500  md:w-11/12 mx-auto text-center  items-center justify-center"}>
                                {/*<div className={"h-logo mx-auto items-center "}>*/}
                                {/*    <img className={"h-full w-full object-cover"} src={'./assets/icon/mini-logo-nobg.svg'} />*/}
                                {/*</div>*/}
                                <div className={"bg-auth-login"}>
                                    <div className={"my-6 pt-6 w-7/12  text-left pb-4"}>
                                        <div className={"w-11/12 mx-9"}>
                                            <div className={"my-2"}>
                                                <h2 className={"text-2xl  font-medium text-white md:text-gray-800"}>Welcome back</h2>
                                            </div>
                                            <div className={"w-full mx-auto"}>
                                                <p className={"text-5xl text-white font-semibold  md:text-gray-400"}>Log In!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={"w-11/12 mx-auto"}>
                                <div className={"w-full"}>
                                    <form className={"w-full"}>
                                        <div className={"block"}>
                                            <div className={"block gap-4"}>
                                                <div className={"my-3 py-1.5"}>
                                                    <div className={`relative w-full input-container h-input block border-2 px-4 rounded-lg border-gray-300 ${isEmailFocused ? 'focused' : ''}`}>
                                                        <div className={"h-full w-full"}>
                                                            <input className={"w-full text-15 h-full text-gray-600 focus:outline-none"} id={'email'} name={'email'} value={formData.email} onChange={onChange} type={'email'} placeholder={"Masukan email anda"}    onFocus={() => setEmailFocused(true)}
                                                                   onBlur={() => setEmailFocused(false)}/>
                                                        </div>
                                                        <label className={"text-sm absolute left-3 bg-white px-3 -top-3 text-gray-500 font-normal"} htmlFor={'email'}>Email</label>
                                                    </div>
                                                </div>
                                                <div className={"my-3 py-1.5"}>
                                                    <div className={`relative w-full input-container h-input block border-2 px-4 rounded-lg border-gray-300 ${isPasswordFocused? 'focused' : ''}`}>
                                                        <div className={"h-full w-full"}>
                                                            <input className={"w-full text-15 h-full text-gray-600 focus:outline-none"}  id={'password'} name={'password'} value={formData.password} onChange={onChange} type={'password'} placeholder={"Masukan password anda"}  onFocus={() => setPasswordFocused(true)}
                                                                   onBlur={() => setPasswordFocused(false)}/>
                                                            <label className={"text-sm absolute left-3  bg-white px-3 -top-3 text-gray-500 font-normal"} htmlFor={'password'}>Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div className={"my-6"}>
                                                        <div className={"flex gap-2"}>
                                                            <input className={"cursor-pointer"} type={'radio'}/>
                                                            <p className={"text-sm text-gray-600"}>Simpan password</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className={"bg-blue-600 text-15 hover:bg-blue-700 cursor-pointer text-white py-3 px-5 rounded-full w-full"}>
                                                            Sign In
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className={""}>
                                        <div className={"flex gap-3 my-3"}>
                                            <div className={'w-4/12 my-auto line-h'}></div>
                                            <div className={"text-center mx-auto "}>
                                                <p className={"text-sm text-gray-500"}>Or login with</p>
                                            </div>
                                            <div className={'w-4/12 my-auto line-h'}></div>
                                        </div>
                                    </div>
                                    <div className={""}>
                                        <div className={""}>
                                            <button className={"bg-white hover:bg-gray-50 text-15 border border-gray-400  cursor-pointer  items-center text-white py-2.5 px-5 rounded-full w-full"}>
                                                <div className={"flex text-center w-full items-center gap-4"}>
                                                    <div className={"h-auth-icon ms-auto items-center"}>
                                                        <img className={"w-full h-full object-cover"} src={"/assets/icon/google-icon.svg"} />
                                                    </div>
                                                    <div className={"text-center me-auto"}>
                                                        <p className={"text-gray-500 font-normal"}>
                                                            Login with google
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={"my-6"}>
                                        <div className={"flex text-center items-center gap-2"}>
                                            <p className={"text-sm ms-auto text-gray-500"}>Already have account ?</p>
                                            <div className={"me-auto"}>
                                                <Link to={"/"}>
                                                    <p className={"text-sm text-b1lue-600"}>Register here</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login