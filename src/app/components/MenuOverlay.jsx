import React from 'react'
import Navlinks from "./Navlinks";

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                links.map((link, i) =>

                    <li key={i}>
                        <Navlinks href={link.href} title={link.title} />
                    </li>
                )
            }
        </ul>
    )
}

export default MenuOverlay;