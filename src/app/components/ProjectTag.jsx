import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-purple-500"
        : "text-white border-slate-600 hover:border-white";
    return (
        <>
            <button
                className={`${buttonStyles} rounded-full border-2 px-4 py-3/2 text-xl cursor-pointer 
    `} onClick={() => onClick(name)}
            >
                {name}
            </button>
        </>
    );
};

export default ProjectTag;
