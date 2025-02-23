import type { Category, ScoreType } from "~/types";
import ScoreRow from "../ScoreRow";

interface ActivityLeaderboardProps {
  category: Category;
  type?: ScoreType;
}

const ActivityLeaderboard = ({ category, type }: ActivityLeaderboardProps) => {
  return (
    <section className="max-container padding-container lg:px-[250px] flex flex-col w-full mt-4 mb-12 lg:mb-20">
      <div className="h-full mb-0">
        <div className="w-full inline-flex items-center font-header uppercase justify-center text-lg text-center font-semibold bg-red-800 p-4 mb-4">
          <p className="text-2xl lg:text-4xl font-semibold text-white">
            {category.category || "Leaderboard"}
          </p>
        </div>
      </div>
      <div className="lg:px-[10%] relative z-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-950">
              <th className="text-white font-semibold text-left px-6 py-2 w-20">
                Rank
              </th>
              <th className="text-white font-semibold text-left px-6 py-2">
                School
              </th>
              <th className="text-white font-semibold text-right pr-10 px-6 py-2">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {category.scores.map((score, index) => (
              <ScoreRow key={index} score={score} type={type} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ActivityLeaderboard;
