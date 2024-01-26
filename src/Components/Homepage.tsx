import Button from "./Button"


const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl wt-full h-10 text-red-500 mt-5 font-serif">React Features Implementation</h1>
        <section id="buttons" className="flex flex-col">
            <Button display_data='cascading drop down' link="/cascading_drop_down"/>
            {/* <Button display_data='cascading drop down' link="/cascading_drop_down"/> */}
        </section>
    </div>
  )
}

export default Homepage