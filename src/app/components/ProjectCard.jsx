import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="min-h-[550px] flex flex-col justify-between rounded-xl overflow-hidden bg-[#181818]">
            <div className="py-6 px-4">
                <h5 className="text-xl mb-4 font-semibold text-white">{title}</h5>
                <p className="text-[#adb7be]">{description}</p>
            </div>

            <div className="relative group h-56 sm:h-80 md:h-96 lg:h-72 rounded-t-xl overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
