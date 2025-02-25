import Clock from "./icons/Clock";
import Contact from "./icons/Contact";
import Pin from "./icons/Pin";
import User from "./icons/User";

interface InfoCardProps {
  date?: Date;
  timeRange?: string;
  location?: string;
  head: string;
  contact?: string;
  email?: string;
}

const InfoCard = ({
  date,
  timeRange,
  location,
  head,
  contact,
  email,
}: InfoCardProps) => {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 gap-8  p-4 rounded-sm">
      {date && timeRange && (
        <div className="flex flex-col gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-medium">
            <Clock className="w-4 h-4 mr-2" /> Date & Time
          </span>
          Feb {parseInt(date.toISOString().split("T")[0].split("-")[2], 10)},{" "}
          {timeRange}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium">
          <Pin className=" fill-white w-4 h-4 mr-2" /> Location
        </span>
        {location}
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium">
          <User className=" fill-white w-4 h-4 mr-2" /> Event Chair
        </span>
        {head}
      </div>
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium">
          <Contact className=" fill-white w-4 h-4 mr-2" /> Contact
        </span>
        {email}
        {email && contact ? " - " : ""} {contact}
      </div>
    </div>
  );
};

export default InfoCard;
