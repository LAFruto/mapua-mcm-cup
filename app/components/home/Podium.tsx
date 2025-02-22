import { cn } from "~/lib/util";
import { Score } from "~/types";

interface PodiumProps {
  team: Score;
}

const Podium = ({ team }: PodiumProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "relative w-full h-6 -mb-px",
          team.rank == 1
            ? "bg-red-600"
            : team.rank == 2
            ? "bg-blue-900"
            : team.rank == 3
            ? "bg-blue-400"
            : "",
          "[clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"
        )}
      ></div>
      <div
        className={cn(
          "w-full p-4 flex items-center justify-center",
          team.rank == 1
            ? "bg-red-700 h-32 lg:h-56"
            : team.rank == 2
            ? "bg-blue-950 h-20 lg:h-40"
            : team.rank == 3
            ? "bg-blue-500 lg:h-32"
            : ""
        )}
      >
        <p className="font-bold text-4xl lg:text-8xl text-center text-white leading-none">
          {team.rank}
        </p>
      </div>
    </div>
  );
};

export default Podium;
