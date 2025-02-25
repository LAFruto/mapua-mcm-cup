import { Outlet, useLoaderData } from "@remix-run/react";
import Footer from "~/components/layout/Footer";
import { getActivitiesByType } from "~/models";

export const loader = async () => {
  const events = await getActivitiesByType("event");

  return {
    events: events,
  };
};

const ImportLayout = () => {
  const { events } = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <Footer events={events} />
    </>
  );
};

export default ImportLayout;
