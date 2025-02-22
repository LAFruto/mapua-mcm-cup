import { Category, ScoreType } from "~/types";
import Medal from "../icons/Medal";
import ScoreCard from "../ScoreCard";
import { cn } from "~/lib/util";

interface ActivityLeaderboardProps {
  category: Category;
  type?: ScoreType;
}

const ActivityLeaderboard = ({ category, type }: ActivityLeaderboardProps) => {
  return (
    <section className="max-container padding-container lg:px-[250px] flex flex-col w-full mt-4 mb-12 lg:mb-20">
      <div className="h-full mb-0">
        <div className="w-full inline-flex items-center font-header uppercase  justify-center text-lg text-center font-semibold bg-red-800 p-4 mb-4">
          {category.category ? (
            <p className="text-2xl lg:text-4xl font-semibold text-white">
              {category.category}
            </p>
          ) : (
            <p className="text-2xl lg:text-4xl font-semibold text-white">
              Leaderboard
            </p>
          )}
        </div>
      </div>
      <div className="lg:px-[10%] relative z-4">
        <div
          className={cn(
            "flex justify-between gap-4 px-6 py-2 w-full border-b border-slate-300 bg-blue-950"
          )}
        >
          <div className="inline-flex gap-4">
            <p className="text-white font-semibold">Rank</p>
            <p className="text-white font-semibold">School</p>
          </div>
          <div>
            <p className="text-white mr-4 font-semibold">Score</p>
          </div>
        </div>
        <div className="flex flex-col">
          {category.scores.map((score, index) => (
            <ScoreCard key={index} score={score} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityLeaderboard;
