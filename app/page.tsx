"use client"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-around xl:pt-9 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-3xl xl:text-5xl mb-6 font-semibold">
              Hello I'm <br /> <span className="text-sky-400">Aimen Tighiouart</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A passionate Full-Stack Developer with expertise in Next.js, React,
              Laravel, and more. I create dynamic and responsive web
              applications that deliver exceptional user experiences.
            </p>
            {/* btn and social contact */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center justify-center gap-2">
                <span>Download Cv</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-sky-400 rounded-full flex justify-center items-center text-sky-400 text-base hover:bg-sky-400 hover:text-[#1c1c22] hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0 order-1 mb-8 xl:mb-0 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
