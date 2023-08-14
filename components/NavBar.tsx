"use client";

import { Button } from "@/components/ui/button";
import { useWindowScroll } from "@mantine/hooks";
import NavBarSheet from "@/components/NavBarSheet";

export default function NavBar() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <nav
      className={`h-20 flex justify-center sticky top-0 z-50 ${
        scroll.y > 0 && "border-b backdrop-blur-xl"
      } `}
    >
      <div className="flex items-center max-w-7xl w-full justify-between px-4 md:px-8">
        <a href="">
          <div className="flex items-center gap-4">
            <img src="appicon.png" className="h-12" alt="" />
            <p className="font-semibold text-2xl">InClass</p>
          </div>
        </a>
        <div className="gap-2 hidden sm:flex">
          {/* <Button variant="ghost" className="font-semibold">
            Tutorials
          </Button> */}
          <a href="#features">
            <Button variant="ghost" className="font-semibold text-base">
              Features
            </Button>
          </a>
          <a href="#customization">
            <Button variant="ghost" className="font-semibold text-base">
              Customize
            </Button>
          </a>
          <a href="#contact">
            <Button variant="ghost" className="font-semibold text-base">
              Contact
            </Button>
          </a>
          <a href="#platforms">
            <Button variant="ghost" className="font-semibold text-base">
              Platforms
            </Button>
          </a>
        </div>
        {/* <Button
          variant="ghost"
          size="icon"
          className="sm:hidden flex justify-center"
        >
          <Menu />
        </Button> */}
        <NavBarSheet />
      </div>
    </nav>
  );
}
