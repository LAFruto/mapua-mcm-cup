import { cn, getListColor } from "~/lib/util";
import { Score, ScoreType } from "~/types";
import { Image } from "./Image";
import { string } from "zod";

interface ScoreRowProps {
  score: Score;
  type?: ScoreType;
  category?: string | null;
}

const ScoreRow = ({ score, type = "team", category }: ScoreRowProps) => {
  return (
    <tr className="border-b border-slate-300 bg-slate-100">
      <td className="items-center justify-center h-full px-4 md:px-6 py-2">
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
          <div>
            <p className="uppercase text-md lg:text-xl font-bold">
              {score.team}
            </p>

            {type == "team" ? (
              <p className="uppercase text-xs font-semibold">{score.name}</p>
            ) : (
              <p className="uppercase text-xs font-semibold">
                {score.participant}
              </p>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-2 text-right">
        {(type === "team" ||
          category === "Smart Talking" ||
          category === "Interviewing") && (
          <p className="bg-white text-lg md:text-xl px-4 tracking-wider font-bold inline-block">
            {score.score}
          </p>
        )}
      </td>
    </tr>
  );
};

export default ScoreRow;
