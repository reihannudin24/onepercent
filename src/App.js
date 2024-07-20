import './App.css';
import {MainNavbarComponent, MiniBarComponent, MiniNavbarComponent} from "./Component/Navbar.Component";
import {SidebarComponent} from "./Component/Sidebar.Component";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Profile from "./Page/Profile";
import Finance from "./Page/Finance";
import Task from "./Page/Task";
import Planning from "./Page/Planning";
import Schedule from "./Page/Schedule";
import {useState} from "react";
import Login from "./Page/Auth/Login";
import AddNewSchedule from "./Page/AddNewSchedule";

function App() {

  const alreadyLogin =  true;
  const lcLights = localStorage.getItem('lights')
  const [lights, setLights] = useState(lcLights);

  return (
      <main className={`w-full min-h-screen transition-bg ${lights ? 'bg-primary-white': 'bg-primary'}`}>
          {alreadyLogin ? (
              <div className={"w-11/12 mx-auto"}>
                  <div className={"w-full relative md:block hidden   "}>
                      <div className={"fixed  z-50 left-0 top-0"} style={{width:"6%"}}>
                          <SidebarComponent lights={lights}/>
                      </div>
                      <div className={"fixed  z-50 right-0 top-0"} style={{width:"94%"}}>
                          <MainNavbarComponent lights={lights} setLights={setLights} />
                      </div>
                  </div>
                  <div className={"w-full relative md:hidden block  "}>
                      <div className={"fixed z-50 w-full right-0 top-0"}>
                          <MiniNavbarComponent lights={lights}/>
                      </div>
                      <div className={"fixed z-50 w-full right-0 top-0"}>
                          <MiniBarComponent lights={lights}/>
                      </div>
                  </div>
                  <div className={"w-96 me-auto pb-16 md:me-0 md:ms-auto "}>
                      <Routes>
                          <Route path={"/"} element={<Dashboard light={lights} />} />
                          <Route path={"/schedule"} element={<Schedule light={lights} />} />
                          <Route path={"/create/new/schedule"} element={<AddNewSchedule light={lights} />} />
                          <Route path={"/planning"} element={<Planning />} />
                          <Route path={"/task"} element={<Task />} />
                          <Route path={"/finance"} element={<Finance />} />
                          <Route path={"/profile"} element={<Profile />} />
                      </Routes>
                  </div>
              </div>
          ):(
              <div>
                  <Routes>
                      <Route path={"/login"} element={<Login light={lights} />} />
                  </Routes>
              </div>
          )}
      </main>
  );
}

export default App;
