import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 pb-12 flex flex-col gap-12 md:gap-16 bg-slate-950 items-center text-white">
      <div className="max-w-7xl px-8 flex flex-col md:flex-row justify-between gap-8 w-full items-start">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <img src="appicon.png" className="h-12" alt="" />
              <p className="font-semibold text-2xl">InClass</p>
            </div>
            <p>Banking technology that has your back.</p>
          </div>
          <div className="md:flex gap-3 md:gap-8 grid grid-cols-2">
            <p>Overview</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Careers</p>
            <p>Help</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>Get the app</p>
          <img
            src="appStoreBadge.svg"
            className="w-[160px] mx-auto md:mx-0"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-7xl px-8 w-full">
        <div className=" flex pt-8 justify-between text-slate-400 border-t border-slate-400 flex-col sm:flex-row gap-6 md:gap-8">
          <p>© {new Date().getFullYear()} InClass. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
