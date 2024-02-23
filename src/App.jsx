import { useState, useEffect } from "react";
import "./App.css";
import DropdownList from "./components/dropdownList";
import MenuModal from "./components/menuModal";

/* images */
import LogoImg from "./assets/images/logo.svg";
import ClientDatabiz from "./assets/images/client-databiz.svg";
import ClientAudiophile from "./assets/images/client-audiophile.svg";
import ClientMeet from "./assets/images/client-meet.svg";
import ClientMaker from "./assets/images/client-maker.svg";
import IconArrowDown from "./assets/images/icon-arrow-down.svg";
import IconArrowUp from "./assets/images/icon-arrow-up.svg";
import IconToDo from "./assets/images/icon-todo.svg";
import IconCalendar from "./assets/images/icon-calendar.svg";
import IconReminders from "./assets/images/icon-reminders.svg";
import IconPlanning from "./assets/images/icon-planning.svg";
import IconMenu from "./assets/images/icon-menu.svg";

function App() {
  const [featuresState, setFeaturesState] = useState(false);
  const [companyState, setCompanyState] = useState(false);
  const [mobileState, setMobileState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState(false);

  const menuBreakpoint = 985;

  /* data */
  const featuresDataArr = [
    {
      img: IconToDo,
      name: "Todo List",
    },
    {
      img: IconCalendar,
      name: "Calendar",
    },
    {
      img: IconReminders,
      name: "Reminders",
    },
    {
      img: IconPlanning,
      name: "Planning",
    },
  ];

  const companyDataArr = [
    {
      img: null,
      name: "History",
    },
    {
      img: null,
      name: "Our Team",
    },
    {
      img: null,
      name: "Blog",
    },
  ];

  // function to create nav elements
  const createNavItems = () => {
    return (
      <div className="nav-list-container">
        <a
          tabIndex="0"
          className="dropdown"
          onClick={() => setFeaturesState(!featuresState)}
        >
          <div>Features</div>
          {featuresState ? (
            <img className="icon" src={IconArrowUp} alt="icon arrow up"></img>
          ) : (
            <img
              className="icon"
              src={IconArrowDown}
              alt="icon arrow down"
            ></img>
          )}
          {featuresState ? (
            <DropdownList
              keyName="feautures"
              data={featuresDataArr}
            ></DropdownList>
          ) : null}
        </a>
        <a
          tabIndex="0"
          className="dropdown"
          onClick={() => setCompanyState(!companyState)}
        >
          <div>Company</div>
          {companyState ? (
            <img className="icon" src={IconArrowUp} alt="icon arrow up"></img>
          ) : (
            <img
              className="icon"
              src={IconArrowDown}
              alt="icon arrow down"
            ></img>
          )}

          {companyState ? (
            <DropdownList
              keyName="company"
              data={companyDataArr}
            ></DropdownList>
          ) : null}
        </a>
        <a href="#">Careers</a>
        <a href="#">About</a>
      </div>
    );
  };

  /* check window size */
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // add event listener
    window.addEventListener("resize", handleResize);

    // remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= menuBreakpoint) {
      setMobileState(true);
    } else {
      setMobileState(false);
      setMenuState(false);
      setFeaturesState(false);
      setCompanyState(false);
    }
  }, [windowWidth]);

  return (
    <>
      <main>
        {menuState ? (
          <MenuModal
            onClick={() => setMenuState(false)}
            createNavItems={createNavItems}
          ></MenuModal>
        ) : null}
        <nav>
          <div className="nav-left-container">
            <img className="logo-img" src={LogoImg} alt="logo img"></img>
            {mobileState ? null : createNavItems()}
          </div>
          {mobileState ? (
            <img
              className="icon-menu"
              src={IconMenu}
              alt="icon menu open"
              onClick={() => setMenuState(true)}
            ></img>
          ) : (
            <div className="nav-right-container">
              <a href="#">Login</a>
              <button className="register-button">Register</button>
            </div>
          )}
        </nav>
        <section className="main-container">
          <section className="content-container">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="learn-more-button">Learn more</button>
            <div className="client-container">
              <img
                className="client-img"
                src={ClientDatabiz}
                alt="client databiz img"
              ></img>
              <img
                className="client-img"
                src={ClientAudiophile}
                alt="client audiophile img"
              ></img>
              <img
                className="client-img"
                src={ClientMeet}
                alt="client meet img"
              ></img>
              <img
                className="client-img"
                src={ClientMaker}
                alt="client maker img"
              ></img>
            </div>
          </section>
          <section className="hero-img-container"></section>
        </section>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
