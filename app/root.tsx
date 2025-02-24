import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";
import { SpeedInsights } from "@vercel/speed-insights/remix";

import { Image } from "./components/Image";
import "./styles/tailwind.css";
import Pattern from "./components/ui/Pattern";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  { rel: "icon", href: "/logo4.svg" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className=" text-blue-950 flex flex-col relative min-h-screen">
        <Pattern />
        <Analytics />
        <SpeedInsights />
        <div className="relative z-10">{children}</div>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// 404
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <div className="h-[250px]">
          <Image
            src="/logo.svg"
            height={1024}
            width={1024}
            aria-label="API"
            className="object-contain h-full w-full overflow-hidden"
          />
        </div>
        <div className="text-center p-8  bg-red-800 shadow-md relative z-30">
          <p className="text-4xl font-bold text-white mb-4">Error 404</p>
          <a href="/" className="text-white hover:underline">
            Go back to homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" h-[250px]">
        <Image
          src="/logo.svg"
          height={1024}
          width={1024}
          aria-label="API"
          className="object-contain h-full w-full overflow-hidden"
        />
      </div>
      <div className="text-center p-8 rounded-lg bg-red-800 shadow-md relative z-30">
        <p className="text-4xl font-bold text-white mb-4">
          Something went Wrong!
        </p>
        <a href="/" className="text-white hover:underline">
          Go back to homepage
        </a>
      </div>
    </div>
  );
}
