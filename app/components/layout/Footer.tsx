import { Link } from "@remix-run/react";
import { Image } from "../Image";
import Chevron from "../icons/Chevron";
import { ActivityRecord } from "~/types";
import { cn } from "~/lib/util";
import Facebook from "../icons/Facebook";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

interface FooterProps {
  events: ActivityRecord[];
}

const Footer = ({ events }: FooterProps) => {
  return (
    <footer className="bg-blue-950 py-8">
      <div className="max-container padding-container flex flex-col">
        <FooterHeader />
        <FooterBody events={events} />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

const FooterHeader = () => {
  return (
    <div className="flex flex-col-reverse  lg:flex-row  justify-between items-center gap-7 pb-12 lg:pb-8">
      <div className="flex lg:hidden flex-col">
        <p className="font-semibold text-white text-center">Powered by</p>
        <Link
          to="https://api-mmcm.org/"
          target="_blank"
          rel="noreferrer"
          className="self-start h-16 mt-2"
        >
          <Image
            src="/api.png"
            height={1012}
            width={1012}
            aria-label="api"
            className="object-contain h-full w-full"
          />
        </Link>
      </div>
      <div className="inline-flex items-center gap-10">
        <Link to="/" target="_blank" rel="noreferrer" className="h-28">
          <Image
            src="/footer-logo.png"
            height={1012}
            width={1012}
            aria-label="Mapua-MCM Cup 2025"
            className="object-contain h-full w-full"
          />
        </Link>
        <Link
          to="https://mcm.edu.ph"
          target="_blank"
          rel="noreferrer"
          className="h-16 mt-2"
        >
          <Image
            src="/mapua.png"
            height={1012}
            width={1012}
            aria-label="MAPUA"
            className="object-contain h-full w-full"
          />
        </Link>
      </div>
      <Link to="#hero" className="bg-red-600 text-white font-bold w-16 h-16">
        <Chevron className="-rotate-90 w-full h-full p-4" />
      </Link>
    </div>
  );
};

const FooterBody = ({ events }: { events: ActivityRecord[] }) => {
  const columns = Array.from({ length: 3 }, () => [] as ActivityRecord[]);
  events.forEach((event, index) => {
    columns[index % 3].push(event);
  });

  return (
    <div className="border-y border-white flex flex-col lg:grid grid-cols-4 text-white">
      <div className="flex flex-col justify-between h-full lg:border-r py-12 px-4">
        <div className="flex flex-col gap-4">
          <p className="text-sm">For further details, view the rulebook:</p>
          <Link
            to="/rule-book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold px-4 py-2 rounded-sm hover:bg-red-600/90 text-center transition-all"
          >
            View Rulebook
          </Link>
        </div>
        <div className="hidden lg:flex flex-col ">
          <p className="font-semibold">Powered by</p>
          <Link
            to="https://api-mmcm.org/"
            target="_blank"
            rel="noreferrer"
            className="self-start h-16 mt-2"
          >
            <Image
              src="/api.png"
              height={1012}
              width={1012}
              aria-label="api"
              className="object-contain h-full w-full"
            />
          </Link>
        </div>
      </div>

      {/* Contact Columns */}
      <div className="col-span-3 py-4 lg:py-0">
        <div className="flex flex-col lg:grid grid-cols-3">
          {columns.map((column, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-6 py-6 lg:py-12 px-4 lg:border-b",
                index != 2 && "lg:border-r border-white"
              )}
            >
              {column.map((e) => (
                <div key={e.id} className="flex flex-col text-white">
                  <p className="text-xs italic">{e.title}</p>
                  <p className="font-bold">{e.head}</p>
                  <p className="text-xs">
                    {e.email} {e.email && e.contact ? " - " : ""} {e.contact}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {socials.map((s, index) => (
            <div
              className={cn(
                "h-full w-full p-4 lg:py-10 flex lg:items-center lg:justify-center gap-4",
                index != 2 && "lg:border-r border-white"
              )}
              key={index}
            >
              <s.icon className="w-6 h-6 lg:h-10 lg:w-10" />
              <Link
                to={s.link}
                className="flex items-center justify-center text-sm xl:text-lg font-bold"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="text-white text-sm text-center mt-8">
      Copyright 2025 | Mapúa Malayan College Mindanao | All Rights Reserved
    </div>
  );
};

const socials = [
  {
    icon: Mail,
    label: "mcmcup@mcm.edu.ph",
    link: "mailto:mcmcup@mcm.edu.ph",
  },
  {
    icon: Facebook,
    label: "MapuaMCMCup",
    link: "https://www.facebook.com/mapuamcmcup.official",
  },
  {
    icon: Phone,
    label: "096113910794",
    link: "/",
  },
];
