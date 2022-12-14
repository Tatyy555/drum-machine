import "tw-elements";
import "flowbite";
import { useEffect, useState } from "react";

const keys = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    name: "Heater-1",
    name2: "Chord_1",
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    name: "Heater-2",
    name2: "Chord_2",
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    name: "Heater-3",
    name2: "Chord_3",
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    name: "Heater-4",
    name2: "Give_us_a_light",
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    name: "Heater-6",
    name2: "Dry_Ohh",
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    name: "Dsc_Oh",
    name2: "Bld_H1",
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    name: "Kick_n_Hat",
    name2: "punchy_kick_1",
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    name: "RP4_KICK_1",
    name2: "side_stick_1",
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    url2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    name: "Cev_H2",
    name2: "Brk_Snr",
  },
];

const Keys = (props) => {
  useEffect(() => {
    const soundPlay = () => {
      if (!props.power) return;

      console.log(props.valiation);
      const displayEl = document.getElementById("display");
      displayEl.innerText = props.valiation
        ? props.thekey.name
        : props.thekey.name2;
      let mysound = document.getElementById(props.thekey.key);
      mysound.volume = props.currentVl / 100;
      mysound.play();
    };

    const handleKeyPress = (e) => {
      let key = e.key.toUpperCase();
      if (key === props.thekey.key) {
        console.log("Key pressed: " + props.valiation);
        soundPlay();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    props.valiation,
    props.power,
    props.currentVl,
    props.thekey.key,
    props.thekey.name,
    props.thekey.name2,
  ]);

  const soundPlay = () => {
    if (!props.power) return;

    console.log(props.valiation);
    const displayEl = document.getElementById("display");
    displayEl.innerText = props.valiation
      ? props.thekey.name
      : props.thekey.name2;
    let mysound = document.getElementById(props.thekey.key);
    mysound.volume = props.currentVl / 100;
    mysound.play();
  };

  return (
    <button
      id={props.valiation ? props.thekey.name : props.thekey.name2}
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="drum-pad h-[80px] w-[80px] bg-blue-600 text-white font-medium text-4xl rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={soundPlay}
    >
      <audio
        className="clip"
        id={props.thekey.key}
        src={props.valiation ? props.thekey.url : props.thekey.url2}
      ></audio>
      {props.thekey.key}
    </button>
  );
};

function App() {
  const [powerOnOff, setPowerOnOff] = useState(true);
  const [valiationOnOff, setValiationOnOff] = useState(false);
  const [volume, setVolume] = useState(50);

  const valiationCheck = () => {
    let currentValiationStatus = document.getElementById("valiation").checked;
    setValiationOnOff(currentValiationStatus);
    const displayEl = document.getElementById("display");
    if (currentValiationStatus) {
      displayEl.innerText = "Valiation Guitar";
    } else {
      displayEl.innerText = "Valiation Piano";
    }
  };

  const powerCheck = () => {
    let currentPowerStatus = document.getElementById("power").checked;
    setPowerOnOff(currentPowerStatus ? false : true);
    const displayEl = document.getElementById("display");
    if (!currentPowerStatus) {
      displayEl.innerText = "Power ON";
    } else {
      displayEl.innerText = "Power OFF";
    }
  };

  const volumeCheck = () => {
    let currentVolume = document.getElementById("volume").value;
    setVolume(currentVolume);
    console.log(currentVolume);
    const displayEl = document.getElementById("display");
    displayEl.innerText = "Volume: " + currentVolume;
  };

  return (
    // Background
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center">
      {/* Title */}
      <p className="text-white text-5xl mb-4 font-extrabold">Drum Machine</p>
      {/* Container */}
      <div
        id="drum-machine"
        className="bg-blue-300 h-[300px] w-[600px] border-[4px] border-blue-600 flex justify-center items-center space-x-12 text-xl"
      >
        {/* Left (9 keys) */}
        <div className=" grid grid-cols-3 gap-[5px]">
          {keys.map((key) => (
            <Keys
              key={key.key}
              thekey={key}
              valiation={valiationOnOff}
              power={powerOnOff}
              currentVl={volume}
            />
          ))}
        </div>
        {/* Right */}
        <div className="h-[280px] w-[200px] flex flex-col justify-center items-center">
          {/* Power */}
          <span className=" font-medium text-gray-900 dark:text-gray-300">
            Power
          </span>
          <label
            for="power"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="power"
              className="sr-only peer"
              checked={powerOnOff}
            />
            <div
              className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-blue-600"
              onClick={powerCheck}
            ></div>
          </label>
          {/* Message */}
          <div
            id="display"
            className="bg-blue-600 h-[50px] w-[90%] mt-3 text-center text-white py-3 "
          ></div>
          {/* Volume */}
          <label className="form-label mt-3 font-medium">Volume</label>
          <input
            type="range"
            className="form-range appearance-none w-[90%] h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
            id="volume"
            onChange={volumeCheck}
          />
          {/* Valiation */}
          <span className=" font-medium text-gray-900 dark:text-gray-300 mt-3">
            Valiation
          </span>
          <label
            for="valiation"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="valiation"
              className="sr-only peer"
              onChange={valiationCheck}
            />
            <div className="w-14 h-7 bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <p className="text-white font-extralight mt-3">
        Designed and Coded By Yamaguchi
      </p>
    </div>
  );
}

export default App;
