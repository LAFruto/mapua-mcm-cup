import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import EventCarousel from "~/components/home/Events";
import Hero from "~/components/home/Hero";
import Overall from "~/components/home/Overall";
import Footer from "~/components/layout/Footer";
import { getActivitiesByType, getOverall } from "~/models";

export const meta: MetaFunction = () => {
  return [
    { title: "Mapúa-MCM Cup 2025" },
    {
      name: "Mapúa-MCM Cup 2025 - Website",
      content: "Bridging the AI-Driven World Thru Excellence",
    },
    {
      property: "og:title",
      content: "Mapúa-MCM Cup 2025",
    },
    {
      property: "og:description",
      content: "Bridging the AI-Driven World Thru Excellence",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://mapua-mcm-cup.com",
    },
    {
      property: "og:image",
      content: "/social-preview.png",
    },
    {
      property: "og:image:width",
      content: "2400",
    },
    {
      property: "og:image:height",
      content: "1260",
    },
  ];
};

export const loader = async () => {
  const events = await getActivitiesByType("event");
  const overall = await getOverall();

  return {
    events: events,
    overall: overall.categories[0].scores,
  };
};

export default function Index() {
  const { events, overall } = useLoaderData<typeof loader>();

  return (
    <>
      <Hero activities={[...events]} />
      <Overall scores={overall} />
      <EventCarousel events={events} />
      <Footer events={events} />
    </>
  );
}
