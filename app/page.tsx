import Image from "next/image";

import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Bell,
  AlarmCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col md:mt-[-80px] items-center">
      <section className="min-h-screen flex justify-center w-full max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <div className="flex justify-between w-full items-center flex-col md:flex-row gap-16">
          <div className="max-w-2xl flex flex-col gap-8 md:gap-12 relative">
            <div className="flex flex-col gap-4 md:gap-6 items-start">
              <a href="">
                <div className="border p-1 rounded-full flex items-center gap-2 pr-2">
                  <span className="border px-2 rounded-full">New!</span>{" "}
                  Available in App Store
                  <ArrowRight />
                </div>
              </a>
              <h1 className="text-4xl md:text-6xl font-semibold">
                All your academic life{" "}
                <span className="underline-offset-8 rainbow-underline">
                  in one place
                </span>
              </h1>
              <p className="text-lg md:text-xl">
                For students by students. Designed to make you reach all your
                goals in school and never forget classes, important exams or
                assignments.
              </p>
            </div>
            {/* <a href=""> */}
            <img
              src="appStoreBadge.svg"
              className="w-[160px] mx-auto md:mx-0"
              alt=""
            />
            {/* </a> */}
            <img
              src="scratches/wave.png"
              className="w-60 absolute hidden md:block bottom-[-110px]"
              alt=""
            />
            <img
              src="scratches/curly-arrow.png"
              className="absolute top-[-250px] hidden lg:block right-0 w-80"
              alt=""
            />
          </div>
          <div className="flex flex-1 justify-center relative w-full">
            {/* <img src="Blob.svg" className="" alt="" /> */}
            {/* <img src="mockup1.png" className="object-contain max-w-md" alt="" /> */}
            <img
              src="iphone3.png"
              className="object-contain max-w-md max-h-[650px] drop-shadow-xl z-10"
              alt=""
            />
            <img
              src="scratches/circle.png"
              className="absolute w-full top-0 bottom-0 my-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col py-16 md:py-24 gap-12 md:gap-24 scroll-m-8"
        id="features"
      >
        <div className="max-w-7xl px-4 md:px-8 flex justify-center">
          <div className="max-w-3xl flex flex-col gap-4 md:gap-5 text-center">
            <div className="flex flex-col gap-3">
              <p className="text-sky-700 font-semibold text-sm md:text-base">
                Features
              </p>
              <p className="text-3xl md:text-4xl font-semibold line-through">
                Analytics that feels like it’s from the future
              </p>
            </div>
            <p className="text-lg md:text-xl line-through">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 border-sky-100 bg-sky-200">
                <CalendarDays className="text-sky-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl md:text-3xl font-semibold">
                  Keep track of your schedule
                </p>
                {/* <p className="text-base md:text-lg">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p> */}
                <p className="text-base md:text-lg">
                  Personalize subjects with times, locations and teachers.
                  Manage your academic calendar, assignments, and exams all in
                  one place. Easily view daily classes and plan ahead with an
                  intuitive interface.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-2 md:pl-4 gap-4 md:gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  Add and edit your subjects with details and colors
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  View your classes and plan ahead
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  See your calendar with all your tasks and events
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:min-h-[512px] relative">
            <img
              src="ipad-schedule.png"
              className="md:absolute h-full object-cover overflow-x-visible object-left drop-shadow-xl"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex flex-1 md:min-h-[512px] order-3 md:order-1 relative">
            {/* <img
              src="ipad1.png"
              className="md:absolute h-full object-cover overflow-x-visible object-right drop-shadow-xl"
              alt=""
            /> */}
            {/* <img
              src="notifications.png"
              className=" h-full object-cover overflow-x-visible object-right drop-shadow-xl my-auto"
              alt=""
            /> */}
            <div className="flex flex-col justify-center w-full gap-4">
              <div className="border rounded-3xl flex items-center gap-2 py-2 pl-1 pr-4 max-w-md">
                <img src="appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">Matemática Discreta</p>
                    <p className="text-sm text-gray-500">3 min</p>
                  </div>
                  <p>Your class starts in 15 minutes</p>
                </div>
              </div>

              <div className="border rounded-3xl flex items-center ml-12 gap-2 py-2 pl-1 pr-4 max-w-md">
                <img src="appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">Física II</p>
                    <p className="text-sm text-gray-500">15 min</p>
                  </div>
                  <p>Your exam starts at 18:30 hs</p>
                </div>
              </div>

              <div className="border rounded-3xl flex items-center ml-6 gap-2 py-2 pl-1 pr-4 max-w-md">
                <img src="appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">3 tasks due today</p>
                    <p className="text-sm text-gray-500">10 min</p>
                  </div>
                  <p className="line-through">
                    Your class starts in 15 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 order-2 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 border-pink-100 bg-pink-200">
                <Bell className="text-pink-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl md:text-3xl font-semibold">
                  Get useful notifications
                </p>
                <p className="text-base md:text-lg">
                  Never forget a class, assignment, or exam with timely and
                  personalized notifications. Set your own preferences for when
                  and how you want to be notified.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-2 md:pl-4 gap-4 md:gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg">
                  Get notified for classes, assignments, and exams
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg">
                  Choose when and how to be notified
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg line-through">
                  Customers never have to leave the page to find an answer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 border-amber-100 bg-amber-200">
                <AlarmCheck className="text-amber-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl md:text-3xl font-semibold">
                  Save assignments and exams
                </p>
                <p className="text-base md:text-lg">
                  Create and edit your assignments with due dates, priority
                  levels, notes, and files. Sync your data across all your
                  devices and access it anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-2 md:pl-4 gap-4 md:gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg">
                  Manage your assignments with dates, times and notes
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg line-through">
                  Save, schedule, and automate reports to your inbox
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg">
                  Sync your data and access it anywhere
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:min-h-[512px] gap-8 grid grid-cols-2">
            {/* <img
              src="ipad1.png"
              className="md:absolute h-full object-cover overflow-x-visible object-left drop-shadow-xl"
              alt=""
            /> */}
            <img
              src="iphoneStyle2.png"
              className="object-contain drop-shadow-xl"
              alt=""
            />
            <img
              src="iphoneStyle2.png"
              className="object-contain drop-shadow-xl"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl py-16 md:py-24 justify-center w-full scroll-m-8"
        id="customization"
      >
        <div className="px-4 md:px-8 flex flex-col gap-12 md:gap-24">
          <div className="max-w-7xl px-4 md:px-8 flex justify-center">
            <div className="max-w-3xl flex flex-col gap-5 text-center">
              <p className="text-3xl md:text-4xl font-semibold">
                Give it your own style
              </p>
              <p className="text-base md:text-xl">
                Make InClass your own with themes, colors, and widgets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <img
              src="iphoneStyle1.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="iphoneStyle2.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="iphoneStyle3.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="iphoneStyle4.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col py-16 md:py-24 gap-12 md:gap-24 w-full max-w-7xl scroll-m-8"
        id="contact"
      >
        <div className="max-w-7xl px-4 md:px-8 flex justify-center">
          <div className="max-w-3xl flex flex-col gap-5 text-center">
            <p className="text-3xl md:text-4xl font-semibold">
              Frequently asked questions
            </p>
            <p className="text-base md:text-xl">
              Everything you need to know about our app.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex justify-center">
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg line-through">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base line-through">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex justify-center w-full">
          <div className="py-8 px-5 md:px-8 bg-slate-100 rounded-2xl flex flex-col gap-8 items-center w-full">
            <div className="flex items-baseline">
              {/* <img
                src="zoe2.png"
                alt=""
                className="w-16 h-16 rounded-full border-2 border-white translate-x-4"
              /> */}
              <Image
                src="/zoe2.png"
                height={64}
                width={64}
                alt=""
                className="w-16 h-16 rounded-full border-2 border-white translate-x-4"
              />
              {/* <img
                src="bruno.png"
                alt=""
                className="w-20 h-20 rounded-full border-2 border-white z-20"
              /> */}
              <Image
                src="/bruno.png"
                height={80}
                width={80}
                alt=""
                className="w-20 h-20 rounded-full border-2 border-white z-20"
              />
              {/* <img
                src="luca.png"
                alt=""
                className="w-16 h-16 rounded-full border-2 border-white translate-x-[-16px]"
              /> */}
              <Image
                src="/luca.png"
                height={64}
                width={64}
                alt=""
                className="w-16 h-16 rounded-full border-2 border-white translate-x-[-16px]"
              />
            </div>
            <div className="text-center flex flex-col gap-2">
              <p className="text-xl font-semibold">Still have questions?</p>
              {/* <p className="md:text-lg">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p> */}
              <p className="md:text-lg">
                We love hearing from you. If you have any questions, feedback,
                or suggestions, please contact us.
              </p>
            </div>
            <Button>Get in touch</Button>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col py-16 md:py-24 gap-12 md:gap-16 w-full max-w-7xl px-4 md:px-8 scroll-m-8"
        id="platforms"
      >
        <p className="text-4xl font-semibold">All our platforms</p>
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center">
            <p>iPhone / iPad</p>
          </div>
          <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center">
            <p className="z-10">mac</p>
            <p className="absolute font-black text-5xl text-white text-center">
              COMING
              <br />
              SOON
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center">
            <p className="z-10">web</p>
            <p className="absolute font-black text-5xl text-white text-center">
              COMING
              <br />
              SOON
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
