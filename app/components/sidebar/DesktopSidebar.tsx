"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "@/app/components/sidebar/DesktopItem";

/**
 * DesktopSidebar - A sidebar component for desktop view.
 *
 * The component maintains a state for its open status and fetches the routes to be displayed
 * using the `useRoutes` hook. Each route is rendered as a `DesktopItem`.
 *
 * State:
 * - isOpen: Boolean indicating whether the sidebar is open or not.
 *
 * Imports:
 * - useRoutes: Hook that fetches the route data.
 * - useState: React hook used to manage state.
 * - DesktopItem: Component used to display each individual route in the sidebar.
 */

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOen, setIsOpen] = useState(false);

  return (
    <div
      className="
        hidden
        lg:fixed
        lg:inset-y-0
        lg:left-0
        lg:w-20
        lg:z-40
        xl:px-6
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      "
    >
      <nav className="mt-4 flex flex-col justify-between">
        <ul className="flex flex-col items-center space-y-1" role="list">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
