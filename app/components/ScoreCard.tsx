import { cn, getListColor, toCapitalCase } from "~/lib/util";
import { Score, ScoreType } from "~/types";
import { Image } from "./Image";

interface ScoreCardProps {
  score: Score;
  type?: ScoreType;
}

const ScoreCard = ({ score, type = "team" }: ScoreCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-4 px-6 py-2 w-full border-b border-slate-300 bg-slate-100"
      )}
    >
      <div
        className={cn(
          "w-10 h-10 aspect-square rounded-full flex items-center justify-center self-center",
          getListColor(score.rank || 0),
          score.rank && score.rank <= 3 ? "text-white" : ""
        )}
      >
        <p className="text-2xl font-bold">{score.rank ?? "-"}</p>
      </div>

      <div className="w-12 h-12 lg:w-16 lg:h-16  text-lg flex-shrink-0  rounded-full relative justify-center flex items-center">
        <Image
          src={score.image}
          height={1024}
          width={1024}
          fill
          aria-label={score.team}
          className="object-contain h-full w-full overflow-hidden ded-frounull"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center">
          <p className="uppercase text-xl font-bold text-nowrap">
            {score.team}
          </p>
          <p className="text-md font-semibold">{score.team}</p>
          {score.participant && (
            <p className="text-md tracking-wider font-semibold ">
              {toCapitalCase(score.participant)}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold">
            {type == "team" && score.score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
