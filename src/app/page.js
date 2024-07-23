import Image from "next/image";
import HeaderSection from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className=" container mt-24 mx-auto px-12 py-4">
        <HeaderSection />
        <About />
      </div>
    </main>
  );
}
