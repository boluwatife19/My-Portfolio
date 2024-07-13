import React from "react";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IconCode, IconDeviceIpadHorizontalCode, IconHome, IconLink, IconPhoneCalling, IconRocket, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: (
        <IconRocket className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Service",
      link: "#service",
      icon: (
        <IconLink className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconDeviceIpadHorizontalCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
