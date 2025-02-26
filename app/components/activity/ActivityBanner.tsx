import { Link } from "@remix-run/react";
import { useCurrentTime } from "~/hooks/useCurrentTime";
import { getEventStatus } from "~/lib/util";
import { ActivityRecord } from "~/types";
import { CountdownTimer } from "../CountdownTimer";
import { Image } from "../Image";
import InfoCard from "../InfoCard";
import DoubleChevron from "../icons/DoubleChevron";

interface ActivityBannerProps {
  activity: ActivityRecord;
}

const ActivityBanner = ({ activity }: ActivityBannerProps) => {
  const currentTime = useCurrentTime();

  const status = getEventStatus(
    new Date(activity.startDate),
    new Date(activity.endDate),
    activity.isScored
  );

  return (
    <>
      <section className="max-container">
        <div className="relative min-h-[300px] p-6">
          <Image
            src={activity.banner}
            height={1024}
            width={1024}
            fill
            aria-label="API"
            className="object-contain h-full w-full overflow-hidden  brightness-50 bg-slate-900"
          />
          <div className="flex w-full justify-between">
            <Link
              to="/"
              prefetch="viewport"
              className="inline-flex w-full items-center gap-2 text-white lg:px-4 py-1.5 group"
            >
              <div className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] mr-2 group-hover:-translate-x-2 transform transition-transform duration-300 ease-in-out rotate-180 flex items-center">
                <DoubleChevron />
              </div>
              <div className="h-7 md:h-10 overflow-hidden mr-2">
                <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                  <p className="text-lg md:text-4xl font-bold">Back</p>
                  <p className="text-lg md:text-4xl font-bold">Back</p>
                </div>
              </div>
            </Link>
            <div className="text-white z-20 flex"></div>
          </div>
          <div className="flex flex-col pb-12 gap-6">
            <div className="w-full h-[200px] relative overflow-hidden sm:mb-0">
              <Image
                src={activity.image}
                height={1024}
                width={1024}
                aria-label="API"
                className="object-contain h-full w-full overflow-hidden"
              />
            </div>
            <div className="z-20">
              {status.type === "ongoing" ? (
                <div className="flex flex-col w-full justify-center items-center gap-10 text-white lg:px-4 py-1.5 font-semibold mt-4">
                  <p className="flex items-center justify-center text-lg lg:text-xl bg-red-800  text-white rounded-md px-4 py-1">
                    {status.message}
                  </p>
                  <InfoCard
                    location={activity.location}
                    date={activity.startDate}
                    timeRange={status.timeRange}
                    head={activity.head || ""}
                    contact={activity.contact || ""}
                    email={activity.email || ""}
                  />
                </div>
              ) : status.type === "countdown" ? (
                <div className="flex flex-col w-full justify-center items-center gap-10 text-white lg:px-4 py-1.5 font-semibold mt-4">
                  <span className="inline-flex text-lg lg:text-xl bg-red-800 rounded-md px-4 py-1 gap-2">
                    Starting in
                    <CountdownTimer
                      currentTime={currentTime}
                      timeUntilStart={status.timeUntilStart}
                    />
                  </span>

                  <InfoCard
                    location={activity.location}
                    date={activity.startDate}
                    timeRange={status.timeRange}
                    head={activity.head || ""}
                    contact={activity.contact || ""}
                    email={activity.email || ""}
                  />
                </div>
              ) : status.type === "upcoming" ? (
                <div className="flex flex-col w-full justify-center items-center gap-2 text-white lg:px-4 py-1.5 font-semibold mt-4">
                  <p className="text-lg lg:text-xl bg-red-800  rounded-md px-4 py-1">
                    {status.message}
                  </p>
                  <InfoCard
                    location={activity.location}
                    date={activity.startDate}
                    timeRange={status.timeRange}
                    head={activity.head}
                    contact={activity.contact || null}
                  />
                </div>
              ) : (
                <>
                  <div className="flex flex-col w-full justify-center items-center gap-10 text-white lg:px-4 py-1.5 font-semibold mt-4">
                    <p className="text-lg lg:text-xl bg-red-800 text-white rounded-md px-4 py-1">
                      {status.message}
                    </p>
                    <InfoCard
                      head={activity.head || ""}
                      contact={activity.contact || ""}
                      email={activity.email || ""}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[url(/hero-bottom.png)] bg-cover bg-center bg-no-repeat h-20"></div>
    </>
  );
};

export default ActivityBanner;
