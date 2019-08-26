import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header/Header";
import OfflineToast from "./components/OfflineToast/OfflineToast";
import appReducer from "./reducer";
import Context from "./context";
import { fetchHoliday } from "./service";
import useCurrentSeasson from "./hooks/UseCurrentSeasson";
import useTimetables from "./hooks/UseTimetables";
import Accessibilty from "./components/Accessibility/Accessibility";
import UseCurrentTime from "./hooks/UseCurrentTime";
import Basic from "./components/Basic/Basic";
import InstallPrompt from "./components/InstallPrompt/InstallPrompt";

function App({ sWPromise }) {
  const [state, dispatch] = useReducer(appReducer, {
    fromOptions: [
      { value: 0, label: "Parque de Mayo" },
      { value: 1, label: "Plaza Rivadavia" },
      { value: 2, label: "Hospital Penna" },
      { value: 3, label: "Villa Arias" },
      { value: 4, label: "Terminal Punta Alta" }
    ],
    seassonOptions: [
      { value: "summerTime", label: "Verano" },
      { value: "winterTime", label: "Receso Invernal" },
      { value: "normalTime", label: "Resto del año" }
    ],
    timetables: [],
    fromToSelected: { from: "0", to: false },
    holidays: [],
    seassonSelected: "normalTime",
    online: true,
    speechSetting: { active: false, voice: false, velocity: 1 }
  });

  const [holiday, setHoliday] = useState(null);
  const [forceDispatch, setForceDispatch] = useState(false);
  const [showIOSToast, setShowIOSToast] = useState(false);
  const currentSeasson = useCurrentSeasson();
  const currentTime = UseCurrentTime(state.timetables);
  const timetables = useTimetables(
    state.fromToSelected,
    state.holidays,
    state.seassonSelected,
    state.online,
    forceDispatch
  );

  const findHolidayData = holidays => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const holidayData = holidays.find(
      date => date.dia === day && date.mes === month
    );

    setHoliday(holidayData === undefined ? null : holidayData);
  };

  useEffect(() => {
    let holidays = JSON.parse(localStorage.getItem("holidays"));
    if (holidays) {
      findHolidayData(holidays);
    } else {
      fetchHoliday().then(data => {
        findHolidayData(data);
      });
    }

    let speechSetting = JSON.parse(localStorage.getItem("speechSetting"));

    if (!!speechSetting) {
      dispatch({ type: "SET_SPEECH_SETTING", payload: speechSetting });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_SEASSON", payload: currentSeasson });
  }, [currentSeasson]);

  useEffect(() => {
    dispatch({ type: "SET_TIMETABLES", payload: timetables });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.fromToSelected, state.seassonSelected, timetables]);

  useEffect(() => {
    if (state.fromToSelected.to) {
      dispatch({
        type: "CHANGE_FROM_LABEL",
        payload: { value: 1, label: "Vieytes y Colón" }
      });
    } else {
      dispatch({
        type: "CHANGE_FROM_LABEL",
        payload: { value: 1, label: "Plaza Rivadavia" }
      });
    }
  }, [state.fromToSelected.to]);

  useEffect(() => {
    localStorage.setItem("speechSetting", JSON.stringify(state.speechSetting));
  }, [state.speechSetting]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <Header dispatch={dispatch} />
        <OfflineToast
          sWPromise={sWPromise}
          closeAction={() => setShowIOSToast(true)}
        />
        <InstallPrompt extShow={showIOSToast} />
        {state.speechSetting.active ? (
          <Accessibilty
            currentTime={currentTime}
            setForceDispatch={() => setForceDispatch(!forceDispatch)}
          />
        ) : (
          <Basic
            holiday={holiday}
            setForceDispatch={() => setForceDispatch(!forceDispatch)}
            current={currentTime && currentTime.index}
          />
        )}
      </div>
    </Context.Provider>
  );
}

App.propTypes = {
  sWPromise: PropTypes.object.isRequired
};

export default App;
