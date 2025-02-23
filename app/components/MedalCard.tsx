import { cn, getListColor, toCapitalCase } from "~/lib/util";
import { Score, ScoreType } from "~/types";
import { Image } from "./Image";
import { PlusIcon } from "./icons/Plus";

interface MedalCardProps {
  score: Score;
  type?: ScoreType;
}

const MedalCard = ({ score, type = "team" }: MedalCardProps) => {
  // if (score.medals.length <= 0) >;

  return (
    <div
      className={cn(
        "relative flex gap-4 px-6 py-2 w-full border-b border-slate-300 bg-slate-100"
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url(/bg-container.svg)" }}
      />
      <div
        className={cn(
          "relative z-10 w-8 h-8 lg:w-10 lg:h-10 aspect-square rounded-full flex items-center justify-center self-center",
          getListColor(score.rank || 0),
          score.rank && score.rank <= 3 ? "text-white" : ""
        )}
      >
        <p className="text-lg lg:text-2xl font-bold">{score.rank ?? "-"}</p>
      </div>

      <div className="relative z-10  w-12 h-12 lg:w-16 lg:h-16  text-lg flex-shrink-0  rounded-full justify-center flex items-center">
        <Image
          src={score.image}
          height={1024}
          width={1024}
          fill
          aria-label={score.team}
          className="object-contain h-full w-full overflow-hidden ded-frounull"
        />
      </div>
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <p className="uppercase text-md lg:text-xl font-bold text-nowrap">
            {score.team}
          </p>
        </div>
        <div className="inline-flex gap-5 md:gap-8">
          <div className="relative z-10  flex items-center">
            <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold">
              {score.medals?.length} 1
            </p>
          </div>
          <div className="relative z-10  flex items-center">
            <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold">
              {score.medals?.length} 1
            </p>
          </div>
          <div className="relative z-10  flex items-center">
            <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold">
              {score.medals?.length} 1
            </p>
          </div>
          <div className="relative z-10  flex items-center">
            <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold">
              {score.medals?.length} 1
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center md:ml-6 w-10 h-10 bg-red-800 rounded-sm">
            <PlusIcon className="bg-red-800 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedalCard;
