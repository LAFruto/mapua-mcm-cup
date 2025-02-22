import { ActivityRecord } from "~/types";
import { Image } from "../Image";
import EventsLink from "./EventsLink";
import HeroCarousel from "./HeroCarousel";
import SportsLink from "./LeaderboardLink";

interface HeroProps {
  activities: ActivityRecord[];
}

const Hero = ({ activities }: HeroProps) => {
  return (
    <>
      <section className="bg-[url(/hero-bg.png)] bg-cover bg-center bg-no-repeat outline-blue-950 outline-8 max-container padding-container py-[4%] lg:py-[2%] z-10 h-screen flex flex-col">
        <div className="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-grow">
          {/* Left Section (Logo + Hero Carousel) */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-3 flex flex-col gap-4 flex-grow">
            {/* Logo & Text */}
            <div className="flex justify-center md:h-2/5 gap-6">
              <div className="flex-shrink-0 self-center w-40 lg:w-64 h-auto">
                <Image
                  src="/logo.svg"
                  alt="Hudyaka logo"
                  width={512}
                  height={512}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center uppercase text-center">
                <p className="text-white font-bold text-xl lg:text-4xl">
                  Bridging
                </p>
                <p className="text-white font-bold text-2xl text-nowrap lg:text-4xl xl:text-5xl bg-red-600 px-3 py-1">
                  AI-DRIVEN WORLD
                </p>
                <p className="text-white font-bold text-xl lg:text-4xl">
                  Thru Excellence
                </p>
              </div>
            </div>
            {/* Hero Carousel */}
            <div className="rounded-3xl bg-blue-950 flex-grow min-h-[250px]">
              <HeroCarousel activities={activities} />
            </div>
          </div>

          {/* Right Section (Sports & Events) */}
          <div className="grid grid-cols-2 lg:flex flex-col gap-4 flex-grow">
            <SportsLink className="lg:h-2/5 flex-grow" />
            <EventsLink className="lg:h-3/5 flex-grow" />
          </div>
        </div>
      </section>
      <div className="bg-[url(/hero-bottom.png)] bg-cover bg-center bg-no-repeat h-10"></div>
    </>
  );
};

export default Hero;
