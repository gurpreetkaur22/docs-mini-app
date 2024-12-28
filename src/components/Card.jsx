import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'

const Card = ({ data, reference }) => {
    return (
        <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale: 1.15}} dragElastic={0.1} 
        dragTransition={{ bounceStiffness: 200, bounceDamping: 40}}
        className='relative w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-[14px] leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='absolute left-0 bottom-0 w-full ' >
                <div className='flex items-center justify-between mb-3 py-2 px-6'>
                    <h5>{data.filesize}</h5>
                    <span className='h-7 w-7 flex items-center justify-center bg-zinc-700 rounded-full cursor-pointer'>
                        {data.close ? <IoClose /> : <LuDownload size="0.8rem" color='#fff' />}
                    </span>
                </div>
                {data.tag.isOpen &&
                    <div className={`py-3 w-full ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center cursor-pointer`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>}
            </div>
        </motion.div>
    )
}

export default Card
