import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function NavBarSheet() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden" asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>InClass</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-12">
          <SheetClose asChild>
            <a href="/#features">
              <Button variant="link" className="font-semibold">
                Features
              </Button>
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="/#customization">
              <Button variant="link" className="font-semibold">
                Customize
              </Button>
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="/#contact">
              <Button variant="link" className="font-semibold">
                Contact
              </Button>
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href="/#platforms">
              <Button variant="link" className="font-semibold">
                Platforms
              </Button>
            </a>
          </SheetClose>
        </div>
        <img
          src="scratches/fire.png"
          className="absolute w-28 bottom-4 left-8"
          alt=""
        />
      </SheetContent>
    </Sheet>
  );
}
