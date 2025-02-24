"use client";

import { cn, getLeaderboardLayout } from "~/lib/util";
import type { Score } from "~/types";
import ScoreMedal from "./ScoreMedal";
import Pattern from "../ui/Pattern";
import { useState, useMemo, useEffect } from "react";
import MedalRow from "../MedalRow";
import ScoreRow from "../ScoreRow";

interface OverallProps {
  scores: Score[];
}

const ITEMS_PER_PAGE = 15;

const Overall = ({ scores }: OverallProps) => {
  const [podiumTeams, listTeams] = getLeaderboardLayout(scores);
  const [leaderboard, setLeaderboard] = useState<"overall" | "medals">(
    "overall"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedTeams = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageTeams = listTeams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const emptyInstances = Array(ITEMS_PER_PAGE - pageTeams.length).fill(null);
    return [...pageTeams, ...emptyInstances];
  }, [listTeams, currentPage]);

  const totalPages = Math.ceil(listTeams.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [leaderboard]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section
      id="leaderboard"
      className="max-container padding-container lg:px-[10%] relative flex flex-col w-full bg-white space-y-6 my-20"
    >
      <Pattern />
      <div className="relative z-4 space-y-3 lg:px-[10%]">
        <div className="relative flex flex-col w-full gap-4 items-center justify-center p-4 bg-red-800 before:absolute before:inset-0 before:bg-[url(/bg-container.svg)] before:bg-cover before:bg-no-repeat before:opacity-30">
          <p className="text-2xl lg:text-4xl font-semibold text-white text-center font-header uppercase">
            Leaderboard
          </p>
          <div className="relative z-30 inline-flex text-lg font-semibold text-white bg-white p-1 rounded-md gap-4">
            <button
              onClick={() => setLeaderboard("overall")}
              className={cn(
                "px-4 rounded-sm transition-colors",
                leaderboard === "overall"
                  ? "bg-blue-950 text-white hover:opacity-95 transition-all duration-300"
                  : "text-blue-950"
              )}
            >
              Overall
            </button>
            <button
              onClick={() => setLeaderboard("medals")}
              className={cn(
                "px-4 rounded-sm transition-colors",
                leaderboard === "medals"
                  ? "bg-blue-950 text-white hover:opacity-95 transition-all duration-300"
                  : "text-blue-950"
              )}
            >
              Medals
            </button>
          </div>
        </div>
        {leaderboard === "overall" ? (
          <>
            <div
              className={cn(
                "lg:mt-0 grid items-end gap-[2%]",
                podiumTeams.length !== 2
                  ? "grid-cols-3 md:px-[2%] lg:px-[10%]"
                  : "grid-cols-2 px-[24%]"
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
            <div className="relative z-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-xs md:text-base">
                    <th className="text-white font-semibold text-left px-3 md:px-6 py-2 w-20">
                      Rank
                    </th>
                    <th className="text-white font-semibold text-left md:px-6 py-2">
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
                      <ScoreRow key={index} score={score} />
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
          </>
        ) : (
          <div className="relative z-4">
            <table className="w-full border-collapse bg-slate-100">
              <thead>
                <tr className="bg-blue-950 text-xs md:text-base">
                  <th className="text-white font-semibold text-left px-1 pl-2 md:px-6 py-2 w-20">
                    Rank
                  </th>
                  <th className="text-white font-semibold text-left md:px-6 py-2">
                    School
                  </th>
                  <th className="text-white font-semibold text-center md:px-2 py-2 w-16">
                    <span className="inline-flex items-center justify-center bg-red-800 w-6 h-6 md:w-8 md:h-8 rounded-full">
                      1
                    </span>
                  </th>
                  <th className="text-white font-semibold text-center md:px-2 py-2 w-16">
                    <span className="inline-flex items-center justify-center bg-blue-800 w-6 h-6 md:w-8 md:h-8 rounded-full">
                      2
                    </span>
                  </th>
                  <th className="text-white font-semibold text-center md:px-2 py-2 w-16">
                    <span className="inline-flex items-center justify-center bg-blue-400 w-6 h-6 md:w-8 md:h-8 rounded-full">
                      3
                    </span>
                  </th>
                  <th className="text-white font-semibold text-center lg:text-right px-0 md:px-6 py-2">
                    Total
                  </th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {[...podiumTeams, ...paginatedTeams].map((score, index) =>
                  score ? (
                    <MedalRow key={index} score={score} />
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
        )}
      </div>
    </section>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-4 gap-4 font-semibold">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md bg-blue-950 text-white disabled:opacity-50"
      >
        Back
      </button>
      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md bg-blue-950 text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Overall;
