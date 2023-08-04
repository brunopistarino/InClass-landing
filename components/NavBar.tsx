import { Button } from "@/components/ui/button";

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
        <div className="flex gap-2">
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
      </div>
    </nav>
  );
}
