import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "abcdefghijklmABCDEFGHIJKLMnopqrstuvwxyzNOPQRSTUVWXYZ";
    if (numAllowed) char = "abcdefghijklmABCDEFGH1IJKL2Mnopq3rst4uvwx5yzNOP6QRS7TU8VW9XY0Z";
    if (charAllowed) char = 'abc@defg#hijk$lmA%BCD&EFG*H1I(JKL)2Mn{opq}3rs[t4uv]wx:5yzN;OP?6QR/S7TU=8VW+9XY0Z';
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * char.length + 1);
      pass += char.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-500">
      <div className="w-[550px] p-5 border rounded-lg border-gray-600 bg-gray-800 text-orange-500">
        <div className="w-fit mx-auto rounded-lg overflow-hidden flex ">
          <input
            className="w-[400px] h-12 border border-gray-800 px-1 text-xl outline-none"
            type="text"
            placeholder="password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="w-[100px] h-12 bg-sky-600 active:bg-sky-700 text-white text-2xl font-bold"
            onClick={copyPassToClip}
          >
            copy
          </button>
        </div>
        <div className="flex justify-center items-center w-fit  mx-auto">
          <input
            className="h-10 cursor-pointer"
            min={10}
            max={35}
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <div className="ml-5">length: {length}</div>
          <input
            className="h-10 ml-10"
            id="number"
            type="checkbox"
            onClick={() => {
              setNumAllowed((numAllowed) => !numAllowed);
            }}
          />
          <label className="h-10 p-1" htmlFor="number">
            number
          </label>
          <input
            className="h-10 ml-10"
            id="char"
            type="checkbox"
            onClick={() => {
              setCharAllowed((charAllowed) => !charAllowed);
            }}
          />
          <label className="h-10 p-1" htmlFor="char">
            character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
