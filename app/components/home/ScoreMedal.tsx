import { cn, getPodiumColor } from "~/lib/util";
import { Score } from "~/types";
import { Image } from "../Image";
import Podium from "./Podium";

interface ScoreMedalProps {
  score: Score;
}

const ScoreMedal = ({ score }: ScoreMedalProps) => (
  <div className="flex flex-col relative">
    <div
      className={cn(
        "relative w-[80%] aspect-square max-w-[24rem] rounded-full bg-white z-10 mx-auto",
        getPodiumColor(score.rank || 0)
      )}
    >
      <Image
        src={score.image}
        height={1024}
        width={1024}
        aria-label={score.image}
        className="absolute w-full h-full"
      />
    </div>

    {/* Podium and Team Info */}
    <div className="relative w-full self-start">
      <div className="z-10 my-4 flex flex-col items-center justify-center w-full h-full">
        <p className="uppercase font-extrabold text-lg lg:text-3xl text-center rounded-md text-blue-950">
          {score.team}
        </p>
        <p className="font-bold text-lg lg:text-3xl bg-slate-100 px-4 text-blue-950">
          {score.score}
        </p>
      </div>
      <div>
        <Podium team={score} />
      </div>
    </div>
  </div>
);

export default ScoreMedal;
