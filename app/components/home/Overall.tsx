import { cn, getLeaderboardLayout } from "~/lib/util";
import { Score } from "~/types";
import Medal from "../icons/Medal";
import ScoreCard from "../ScoreCard";
import ScoreMedal from "./ScoreMedal";
import Pattern from "../ui/Pattern";

interface OverallProps {
  scores: Score[];
}

const Overall = ({ scores }: OverallProps) => {
  const [podiumTeams, listTeams] = getLeaderboardLayout(scores);

  return (
    <section className="max-container padding-container lg:px-[10%] relative flex flex-col w-full bg-white space-y-6 my-20">
      <Pattern />
      <div className="relative z-4 space-y-6">
        <div className="w-full inline-flex items-center font-header uppercase  justify-center text-lg text-center font-semibold bg-red-800 p-4">
          <p className="text-2xl lg:text-4xl font-semibold text-white">
            Leaderboard
          </p>
        </div>
        <div
          className={cn(
            "lg:mt-0 grid items-end gap-[2%]",
            podiumTeams.length !== 2
              ? "grid-cols-3  md:px-[2%] lg:px-[10%]"
              : "grid-cols-2  px-[24%]"
          )}
        >
          {podiumTeams.length === 1 && <div />}
          {podiumTeams.map((team, index) => (
            <div
              key={index}
              className={cn(
                index === 1 && podiumTeams.length === 3 && "order-first"
              )}
            >
              <ScoreMedal score={team} />
            </div>
          ))}
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
        <div className="relative z-10 flex-col gap-4">
          {listTeams.map((score, index) => (
            <ScoreCard key={index} score={score} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overall;
