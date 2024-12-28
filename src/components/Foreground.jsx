import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "This is the background color of the image displayed on the card. (Drag me)",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now", tagColor: "green"
            }
        },
        {
            desc: "This is the background color of the image displayed on the card. (Drag me)",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true, tagTitle: "Upload", tagColor: "blue"
            }
        },
        {
            desc: "This is the background color of the image displayed on the card. (Drag me)",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false, tagTitle: "Download Now", tagColor: "green"
            }
        },
    ]

    return (
        <div>
            <div ref={ref} className='fixed z-[3] top-0 left-0 h-full w-full flex gap-5 p-5'>
                {data.map((items, index) => (
                    <Card data={items} reference={ref} />
                ))}
            </div>
        </div>
    )
}

export default Foreground
