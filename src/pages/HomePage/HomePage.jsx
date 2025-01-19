import React from 'react'
import Component1 from "../../container/Home/Component1"
import Component2 from "../../container/Home/Component2"

const HomePage = () => {
    return (
        <div className="w-full h-full pt-[15px] flex flex-col">
            HomePage
            <Component1 />
            <Component2 />
        </div>
    )
}

export default HomePage