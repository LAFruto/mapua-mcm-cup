import { Link } from "@remix-run/react";
import { useCurrentTime } from "~/hooks/useCurrentTime";
import { cn, getEventStatus } from "~/lib/util";
import { ActivityRecord } from "../../types";
import { CountdownTimer } from "../CountdownTimer";
import { Image } from "../Image";
import DoubleChevron from "../icons/DoubleChevron";
interface EventsProps {
  events: ActivityRecord[];
}

const Events = ({ events }: EventsProps) => {
  const currentTime = useCurrentTime();

  return (
    <div className="relative">
      {/* <div className="relative z-30 bg-[url(/event-header.svg)] bg-cover bg-center bg-no-repeat flex items-center px-[5%] h-72 translate-y-36  md:translate-y-44 overflow-visible">
        <p className="font-header text-white text-2xl lg:text-4xl mb-2">
          EVENTS
        </p>
      </div> */}
      <section
        id="events"
        className="relative z-10 bg-red-900 w-full padding-container mx-auto py-24 lg:py-24"
      >
        <div className="max-container padding-container">
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map(
              ({ url, image, startDate, endDate, isScored }, index) => {
                const eventStatus = getEventStatus(
                  new Date(startDate),
                  new Date(endDate),
                  isScored
                );

                return (
                  <Link
                    to={url}
                    key={index}
                    className={cn(
                      "bg-gray-100 p-4 aspect-square flex items-center justify-between flex-col transition-all duration-300 ease-in-out relative overflow-hidden group wipe-up"
                    )}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat opacity-100 z-0"
                      style={{ backgroundImage: "url(/bg-container.svg)" }}
                    />
                    <div className="relative z-10 h-full aspect-auto self-center flex items-center justify-center ">
                      <Image
                        src={image}
                        height={1024}
                        width={1024}
                        className="self-center"
                      />
                    </div>
                    {eventStatus.type === "countdown" ? (
                      <div className="h-10 relative z-10 flex justify-center text-center self-center px-2 lg:px-6 py-1 w-full text-blue-800  border md:text-lg truncate text-nowrap font-semibold cursor-pointer group">
                        <div className="h-5  overflow-hidden mr-2">
                          <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                            <div className="text-base text-nowrap h-5 ">
                              <CountdownTimer
                                timeUntilStart={eventStatus.timeUntilStart}
                                currentTime={currentTime}
                              />
                            </div>
                            <div className="text-base text-nowrap h-5 ">
                              <CountdownTimer
                                timeUntilStart={eventStatus.timeUntilStart}
                                currentTime={currentTime}
                              />
                            </div>
                          </div>
                          b{" "}
                        </div>
                      </div>
                    ) : eventStatus.type === "upcoming" ? (
                      <div
                        className={cn(
                          "h-10 relative z-10 flex items-center justify-center text-center self-center px-2 lg:px-6 lg:pt-0.5 w-full border md:text-lg truncate text-nowrap font-semibold border-slate-300 cursor-pointer group"
                        )}
                      >
                        <div className="h-6 overflow-hidden mr-2">
                          <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                            <p className="text-blue-800 text-base text-nowrap h-8">
                              {eventStatus.message}
                            </p>
                            <p className="text-blue-800 text-base text-nowrap h-8">
                              {eventStatus.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : eventStatus.type === "ongoing" ? (
                      <div
                        className={cn(
                          "h-10 relative z-10 flex justify-center text-center self-center px-2 lg:px-6  lg:pt-0.5 w-full border  md:text-lg truncate text-nowrap font-semibold cursor-pointer group",
                          eventStatus.type == "ongoing"
                            ? "ongoing "
                            : "text-blue-800 uppercase"
                        )}
                      >
                        <div className="h-6 overflow-hidden mr-2">
                          <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                            <p className="flex items-center text-base  text-white text-nowrap h-8">
                              {eventStatus.message}
                            </p>
                            <p className="flex items-center text-base text-white text-nowrap h-8">
                              {eventStatus.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-10 relative z-10 flex items-center justify-between px-2 lg:px-6 lg:pt-0.5 w-full text-white bg-blue-800  md:text-lg truncate text-nowrap font-semibold cursor-pointer group">
                        <div className="h-6 overflow-hidden mr-2">
                          <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                            <p className="flex items-center text-base  text-white text-nowrap h-6">
                              {eventStatus.message}
                            </p>
                            <p className="flex items-center text-base text-white text-nowrap h-6">
                              {eventStatus.message}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-4 h-5  group-hover:translate-x-1 transform transition-transform duration-300 ease-in-out">
                          <DoubleChevron />
                        </div>
                      </div>
                    )}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
