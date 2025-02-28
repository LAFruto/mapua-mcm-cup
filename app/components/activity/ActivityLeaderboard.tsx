import type { Category, ScoreType } from "~/types";
import ScoreRow from "../ScoreRow";
import { useState, useMemo } from "react";
import Pagination from "../ui/Pagination";

interface ActivityLeaderboardProps {
  category: Category;
  type?: ScoreType;
}

const ITEMS_PER_PAGE = 8;

const ActivityLeaderboard = ({ category, type }: ActivityLeaderboardProps) => {
  const listTeams = category.scores;

  const [currentPage, setCurrentPage] = useState(1);

  const paginatedTeams = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageTeams = listTeams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const emptyInstances = Array(ITEMS_PER_PAGE - pageTeams.length).fill(null);
    return [...pageTeams, ...emptyInstances];
  }, [listTeams, currentPage]);

  const totalPages = Math.ceil(listTeams.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

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
            {paginatedTeams.map((score, index) =>
              score ? (
                <ScoreRow
                  key={index}
                  score={score}
                  type={type}
                  category={category.category || null}
                />
              ) : (
                <tr className="border-b border-slate-300 bg-slate-100">
                  <td
                    colSpan={7}
                    className="h-[65px] md:h-[81px] border-b border-gray-200"
                  ></td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ActivityLeaderboard;
