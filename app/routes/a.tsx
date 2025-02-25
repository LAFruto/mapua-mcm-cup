import { Outlet, useLoaderData } from "@remix-run/react";
import Footer from "~/components/layout/Footer";
import { getActivitiesByType } from "~/models";

export const loader = async () => {
  const events = await getActivitiesByType("event");

  return {
    events: events,
  };
};

export default function ActivityLayout() {
  const { events } = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <Footer events={events} />
    </>
  );
}
