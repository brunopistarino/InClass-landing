import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 pb-12 flex flex-col gap-12 md:gap-16 bg-slate-950 items-center text-white">
      <div className="max-w-7xl px-8 flex flex-col md:flex-row justify-between gap-8 w-full items-start">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <img src="/appicon.png" className="h-12" alt="" />
              <p className="font-semibold text-2xl">InClass</p>
            </div>
            <p>All your academic life in one place.</p>
          </div>
          <div className="md:flex gap-3 md:gap-8 grid grid-cols-2">
            <a href="/#features" className="hover:underline underline-offset-4">
              Features
            </a>
            <a
              href="/#customization"
              className="hover:underline underline-offset-4"
            >
              Customize
            </a>
            <a href="/#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
            <a
              href="/#platforms"
              className="hover:underline underline-offset-4"
            >
              Platforms
            </a>
            {/* <p>Overview</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Careers</p>
            <p>Help</p>
            <p>Privacy</p> */}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>Get the app</p>
          <a href="https://apps.apple.com/us/app/inclass-school-planner/id6462791378?itsct=apps_box_badge&amp;itscg=30200">
            <img
              src="/appStoreBadge.svg"
              className="w-[160px] mx-auto md:mx-0"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="max-w-7xl px-8 w-full">
        <div className=" flex pt-8 justify-between text-slate-400 border-t border-slate-400 flex-col sm:flex-row gap-6 md:gap-8">
          <p>© {new Date().getFullYear()} InClass. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.instagram.com/inclassapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
