import { cn, getListColor } from "~/lib/util";
import type { Score, ScoreType } from "~/types";
import { PlusIcon } from "./icons/Plus";
import { Image } from "./Image";
import { useState, useRef } from "react";
import { MinusIcon } from "./icons/Minus";

interface MedalRowProps {
  score: Score;
  type?: ScoreType;
}

const getPodiumText = (position: number) => {
  switch (position) {
    case 1:
      return "Champion";
    case 2:
      return "1st Runner Up";
    case 3:
      return "2nd Runner Up";
    default:
      return "";
  }
};

const MedalRow = ({ score }: MedalRowProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLTableCellElement>(null);

  return (
    <>
      <tr className="border-b border-slate-300 bg-slate-100">
        <td className="items-center justify-center h-full px-2 md:px-6 py-2">
          <div
            className={cn(
              "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 aspect-square rounded-full flex items-center justify-center self-center",
              getListColor(score.rank || 0),
              score.rank && score.rank <= 3 ? "text-white" : ""
            )}
          >
            <p className="text-lg lg:text-2xl font-bold">{score.rank ?? "-"}</p>
          </div>
        </td>
        <td className="md:px-6 py-2">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full flex-shrink-0">
              <Image
                src={score.image}
                height={1024}
                width={1024}
                fill
                aria-label={score.team}
                className="object-contain h-full w-full overflow-hidden ded-frounull"
              />
            </div>
            <p className="uppercase text-md lg:text-xl font-bold">
              {score.team}
            </p>
          </div>
        </td>
        <td className="px-0 md:px-2 py-2 text-center">
          <p className="bg-white text-sm md:text-xl p-1 md:px-4 tracking-wider font-bold inline-block">
            {score.medals?.filter((m) => m.position === 1).length || 0}
          </p>
        </td>
        <td className="px-0 md:px-2 py-2 text-center">
          <p className="bg-white text-sm md:text-xl p-1 md:px-4 tracking-wider font-bold inline-block">
            {score.medals?.filter((m) => m.position === 2).length || 0}
          </p>
        </td>
        <td className="px-0 md:px-2 py-2 text-center">
          <p className="bg-white text-sm md:text-xl p-1 md:px-4 tracking-wider font-bold inline-block">
            {score.medals?.filter((m) => m.position === 3).length || 0}
          </p>
        </td>
        <td className="px-3 md:px-6 py-2 text-right">
          <p className="bg-white text-sm md:text-xl px-2 md:px-4 tracking-wider font-bold inline-block">
            {score.medals?.length || 0}
          </p>
        </td>
        {score.medals && score.medals?.length > 0 ? (
          <td className="pr-1 md:px-6 py-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-sm transition-colors",
                !isOpen
                  ? "bg-red-800 hover:bg-red-700"
                  : "bg-slate-100 border-blue-950 border "
              )}
              aria-expanded={isOpen}
              aria-controls={`medal-details-${score.team}`}
            >
              {isOpen ? (
                <MinusIcon className="text-blue-950 w-5 h-5" />
              ) : (
                <PlusIcon className="text-white w-5 h-5" />
              )}
            </button>
          </td>
        ) : (
          <></>
        )}
      </tr>
      <tr className="bg-white border">
        <td colSpan={7} className="p-0">
          <div
            className={cn(
              "transition-all duration-300 ease-in-out",
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            )}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef} className="px-4 md:px-8 py-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 px-4 text-sm font-semibold text-slate-600">
                        Medal
                      </th>
                      <th className="text-left py-2 px-4 text-sm font-semibold text-slate-600">
                        Event
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {score.medals?.map((medal, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 last:border-0"
                      >
                        <td className="py-2 px-4">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center",
                              medal.position === 1
                                ? "bg-red-800"
                                : medal.position === 2
                                ? "bg-blue-800"
                                : "bg-blue-400"
                            )}
                          >
                            <span className="text-white font-bold">
                              {medal.position}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 px-4 text-slate-900">
                          {medal.category ? medal.category : medal.activity}
                        </td>
                        <td className="py-2 px-4 text-slate-900 font-medium">
                          {getPodiumText(medal.position)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MedalRow;
