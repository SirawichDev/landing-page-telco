import type {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import MainLayout from "./components/layouts/main-layout";

import tailwindPlugin from "app/styles/tailwind-plugins.css";
import tailwindStylesheetUrl from "../external-style/tailwind-default.css";


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: tailwindPlugin },
  ];
};

export const ErrorBoundary: ErrorBoundaryComponent = (props) => {
  const { error } = props;

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>Something went wrong.</div>
        {process.env.NODE_ENV === "development" && <div>{error.message}</div>}
        <Scripts />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </body>
    </html>
  );
}
