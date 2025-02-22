import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ActivityBanner from "~/components/activity/ActivityBanner";
import ActivityLeaderboards from "~/components/activity/ActivityLeaderboards";
import ActivityLinks from "~/components/activity/ActivityLinks";
import { getActivityById, getLeaderboardById } from "~/models";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.activityId) {
    throw new Response("Activity ID is required", { status: 400 });
  }

  const event = await getActivityById(params.activityId);
  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }

  const result = await getLeaderboardById(event.name);

  return {
    event,
    teams: result?.teamResult,
    participants: result?.participantResult,
  };
};

const Activity = () => {
  const { event, teams, participants } = useLoaderData<typeof loader>();

  return (
    <div>
      <ActivityBanner activity={event} />
      {/* TEAM BREAKDOWN */}
      {event.isScored && teams && <ActivityLeaderboards leaderboards={teams} />}
      {/* PARTICIPANT BREAKDOWN */}
      {event.isScored && participants && (
        <ActivityLeaderboards leaderboards={participants} type="participant" />
      )}
      <ActivityLinks />
    </div>
  );
};

export default Activity;
