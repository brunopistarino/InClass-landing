import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="h-20 flex justify-center sticky top-0 backdrop-blur-xl border-b z-50">
      <div className="flex items-center max-w-7xl w-full justify-between px-8">
        <a href="">
          <div className="flex items-center gap-4">
            <img src="appicon.png" className="h-12" alt="" />
            <p className="font-semibold text-2xl">InClass</p>
          </div>
        </a>
        <div className="gap-2 hidden sm:flex">
          <Button variant="ghost" className="font-semibold">
            Tutorials
          </Button>
          <Button variant="ghost" className="font-semibold">
            Features
          </Button>
          <Button variant="ghost" className="font-semibold">
            Contact
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden flex justify-center"
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
