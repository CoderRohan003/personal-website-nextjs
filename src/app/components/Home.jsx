"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Hello I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Rohan",
                3000,
                "Web Developer",
                1000,
                "Android Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-lg">
            I specialize in full-stack web and Android app development, creating seamless
            digital experiences from front to back. I'm driven by a passion for building
            intuitive interfaces and performant, scalable systems.
          </p>

          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
            <button className="px-6 py-3 w-50 sm:w-fit mb-4 sm:mb-0 sm:mr-4 rounded-full bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-50 sm:w-fit rounded-full border border-white hover:border-none hover:bg-purple-400 text-white">
              Download CV
            </button>
          </div>

        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#373737] w-[250px] h-[250px] relative">
            <Image
              src="/images/cropped-cover1.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="my-image"
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
