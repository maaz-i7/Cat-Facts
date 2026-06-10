import React from 'react'
import '../output.css'

const Card = (props) => {

    return (
        <span style={{backgroundColor:props.bgColor}} className="card p-3 m-3 h-100 rounded-[20px] transition-all hover:scale-105 cursor-pointer">
            <div className="catImg w-80 h-50 flex justify-center overflow-hidden">
                <img className="mt-2 rounded-[20px]" src={props.imgLink} alt="" />
            </div>
            <div className="fact w-80 h-35 text-white mt-4 text-center overflow-scroll">"{props.fact}"</div>
        </span>
    )
}

export default Card