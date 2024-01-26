import { useState, useEffect, useCallback, useRef } from "react"
import Button from "./Button";

const password_generator = () => {
    //useState hooks
    const [length,setLength] = useState<any>(8);
    const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
    const [charAllowed, setCharAllowed] = useState<boolean>(false);
    const [password, setPassword] = useState<any>("");
    //useRef hooks
    const passwordRef = useRef<any>(null);

    const passwordGenerator = useCallback(()=>{
        let generated_pass: string = "";
        let str : string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        if(numberAllowed){
            str += "1234567890";
        } 
        if(charAllowed){
            str+= "`~!@#$%^&*()_+=-{}[]|\\"
        }
        for (let i=1;i <= length;i++){
            let char = Math.floor(Math.random() * str.length + 1)
            generated_pass += str.charAt(char)
        }
        setPassword(generated_pass);
    }, [length, numberAllowed, charAllowed, setPassword]);

    useEffect(()=>{
        passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])

    const copyPasswordToClipboard = useCallback(()=>{
        //when we use the windows reference
        window.navigator.clipboard.writeText(password)

        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 100);

    },[password])
     


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 flex flex-col items-center justify-center">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-slate-600">
        <h1 className="text-4xl text-center text-white my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden m-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordRef}></input>
            <button className="outline-slate-700 bg-blue-400 hover:bg-orange-300 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input type="range" min={6} max={100} value={length} className="cursor-pointer" 
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length : {length}</label>
            </div>
            <div className="flex items-cneter gap-x-2">
                <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" 
                onChange={()=>{setNumberAllowed((prev) => !prev)}}
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-cneter gap-x-2">
                <input type="checkbox" defaultChecked={charAllowed} id="characterInput" 
                onChange={()=>{setCharAllowed((prev) => !prev)}}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
        
    </div>
    <div>
        <Button display_data="back to home page" link="/" />
      </div>
    </div>
  )
}

export default password_generator