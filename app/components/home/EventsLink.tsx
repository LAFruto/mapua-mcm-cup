import { Link } from "@remix-run/react";
import { cn } from "~/lib/util";
import Arrow from "../icons/Arrow";
import Festival from "../icons/Festival";

interface EventsLinkProps {
  className?: string;
}

const EventsLink = ({ className }: EventsLinkProps) => {
  return (
    <Link
      to="/#events"
      prefetch="viewport"
      className={cn(
        "relative flex flex-col justify-between gap-8 border-8 border-white hover:border-red-500 bg-red-900 p-6 group cursor-pointer transition-all",
        "before:absolute before:inset-0 before:bg-[url(/bg-container.svg)] before:bg-cover  before:bg-no-repeat before:opacity-15",
        className
      )}
    >
      <span className="flex-shrink-0 max-w-[100px] p-3 bg-white">
        <Festival color="red" />
      </span>
      <div className="flex text-white items-end justify-between">
        <div className="flex flex-col leading-tight md:gap-2">
          <div className="h-6 overflow-hidden">
            <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
              <p className="font-header uppercase text-sm md:text-xl font-bold h-10">
                Events
              </p>
              <p className="font-header uppercase md:text-xl font-bold h-10">
                Events
              </p>
            </div>
          </div>
          <p className="text-xs md:text-base text-nowrap">
            View events results!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventsLink;
