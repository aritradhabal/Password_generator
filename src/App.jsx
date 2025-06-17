import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length_, setLength_] = useState(12);
  const [number, setNumber] = useState(false);
  const [char_, setChar_] = useState(false);
  const [password_, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let nums = [];
    let chars = [];
    let alphabets = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let password = "";

    if (number == true) {
      nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      nums = [...nums, ...nums, ...nums, ...nums];
    }
    if (char_) {
      chars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        ";",
        ".",
        "=",
        "-",
        "/",
      ];
      chars = [...chars, ...chars, ...chars];
    }
    let total_ = [...nums, ...chars, ...alphabets];

    for (let i = 1; i <= length_; i++) {
      password += total_[Math.floor(Math.random() * 10000) % total_.length];
    }
    setPassword(password);
  }, [length_, number, char_, setPassword]);

  const clickToCopy = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password_);
  }, [password_]);

  useEffect(() => {
    passwordGenerator();
  }, [length_, char_, number, passwordGenerator]);

  return (
    <>
      <div className="h-dvh w-full bg-green-500 flex flex-wrap justify-center items-center">
        <div className="md:w-2/5 w-4/5 h-auto py-10 rounded-2xl duration-500 hover:shadow-green-950 hover:shadow-2xl shadow-2xs shadow-green-600 bg-yellow-100">
          <div className="w-full h-auto flex flex-col flex-wrap justify-center gap-5 items-center px-5">
            <div className="h-auto w-full flex flex-wrap justify-center items-center text-3xl text-center">
              <div className="cursor-text">Password Generator</div>
            </div>
            <div className=" h-auto w-full flex flex-wrap justify-center items-center gap-2">
              <div className="h-auto w-3/4">
                <input
                  className="text-center text-gray-950 border px-2 border-green-800 w-full rounded-xl"
                  type="text"
                  value={password_}
                  placeholder="Generated Password..."
                  readOnly
                  ref={passwordRef}
                />
              </div>
              <div className="h-auto">
                <button
                  onClick={clickToCopy}
                  className="hover:cursor-pointer border border-green-400 rounded-2xl bg-green-400 text-center px-2"
                >
                  Copy
                </button>
              </div>
            </div>
            <div className=" w-full h-auto flex flex-wrap justify-evenly items-center gap-2">
              <div className="flex flex-wrap justify-evenly items-center gap-1">
                <input
                  onChange={(e) => setLength_(e.target.value)}
                  className="cursor-pointer"
                  type="range"
                  value={length_}
                  id="length"
                  step="1"
                  min="5"
                  max="20"
                />
                <label className="cursor-text" htmlFor="length">
                  Length {length_}
                </label>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-1">
                <input
                  onChange={() => setNumber(!number)}
                  className="cursor-pointer"
                  type="checkbox"
                  id="number"
                  checked={number}
                />
                <label className="cursor-text" htmlFor="number">
                  Number {number ? "Enabled" : "Disabled"}
                </label>
              </div>
              <div className="flex flex-wrap justify-evenly items-center gap-1">
                <input
                  onChange={() => setChar_(!char_)}
                  className="cursor-pointer"
                  type="checkbox"
                  id="char"
                  checked={char_}
                />
                <label className="cursor-text" htmlFor="char">
                  Characters {char_ ? "Enabled" : "Disabled"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
