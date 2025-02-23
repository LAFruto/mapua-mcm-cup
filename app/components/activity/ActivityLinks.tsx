import EventsLink from "../home/EventsLink";
import LeaderboardLink from "../home/LeaderboardLink";

const ActivityLinks = () => {
  return (
    <div className="padding-container max-container grid grid-cols-2 h-full w-full gap-4 my-4">
      <LeaderboardLink />
      <EventsLink />
    </div>
  );
};

export default ActivityLinks;
