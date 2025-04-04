"use client";
import Navbar from "./main/components/Nav/Navbar";
import Pageslider from "./main/components/pages/Pagesilder";
import HoverCard from "./main/components/hoverCard/page";
export default function Home() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center justify-between font-serif">
          {/* Banner with smooth hide effect*/}

        {/* Fixed Navbar */}
        <div className="text-xs sm:text-sm lg:text-md font-italic font-sans  bg-white w-full text-center py-2 shadow-lg">
          <Navbar />
        </div>

        <main className="flex flex-col w-full text-xs sm:text-sm lg:text-md items-center justify-center ">
          <div className="w-full border-y-2 overflow-hidden">
            <Pageslider />
          </div>
        </main>
        <footer className="flex gap-4 sm:gap-6 flex-wrap items-center justify-center w-full py-4">
          <HoverCard/>
        </footer>
      </div>

    </>
  );
}
