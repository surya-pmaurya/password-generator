import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import RefreshButton from "./components/RefreshButton";
function App() {
  const [passLength, setPassLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passRef = useRef(null);
  //password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numsAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*?<.>";
    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, numsAllowed, charAllowed]);

  //password copy to clipboard function
  const copyPassword = useCallback(() => {
    passRef.current.select(); //selection effect
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passLength, numsAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 w-full max-w-md mx-auto shadow-xl rounded-xl px-6 py-6 my-10">
      {/* Input + Copy button */}
      <div className="flex shadow-inner rounded-lg overflow-hidden mb-6 border border-gray-600">
        <input
          className="bg-gray-800 text-gray-100 outline-none w-full py-2 px-4 placeholder-gray-400"
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          ref={passRef}
        />
        <RefreshButton onClick={passwordGenerator} />
        <button
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-4 transition cursor-pointer"
          onClick={copyPassword}>
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-y-4 text-sm text-gray-300">
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="font-medium">
            Length : {passLength}
          </label>
          <input
            type="range"
            min={6}
            max={20}
            value={passLength}
            className="cursor-pointer accent-blue-600"
            onChange={(e) => setPassLength(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numAllow" className="font-medium">
            Numbers : {numsAllowed ? "On" : "Off"}
          </label>
          <input
            type="checkbox"
            id="numsInput"
            className="w-4 h-4 accent-blue-600"
            defaultChecked={numsAllowed}
            onChange={() => setNumsAllowed((prev) => !prev)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="charAllow" className="font-medium">
            Special Chars : {charAllowed ? "On" : "Off"}
          </label>
          <input
            type="checkbox"
            id="charInput"
            className="w-4 h-4 accent-blue-600"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
