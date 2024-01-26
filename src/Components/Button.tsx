import { Link } from "react-router-dom"

const Button = ({display_data,link}:any) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col p-5 items-center ">
            <Link to={link} >
                {/* <button type="submit" className="bg-blue-500 hover:bg-red-400">{display_data}</button> */}
                <div className="flex flex-col items-center text-center  w-60 p-5 bg-red-400 rounded-xl shadow-2xl  dark:bg-white/10  ring-2 ring-grey-900/5 backdrop-blur-xl  hover:bg-sky-300">
                    <span className="text-center text-base">{display_data}</span>
                </div>
            </Link>
        {/* <button className="px-10 py-10 my-5 bg-red-400 text-slate-500">{display_data}</button> */}
        </div>

    </div>
  )
}

export default Button