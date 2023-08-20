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
      question: "Is the app free?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I set up my schedule?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change the colour of a class?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I edit or delete subjects?",
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
              src="/appStoreBadge.svg"
              className="w-[160px] mx-auto md:mx-0"
              alt=""
            />
            {/* </a> */}
            <img
              src="/scratches/wave.png"
              className="w-60 absolute hidden md:block bottom-[-110px]"
              alt=""
            />
            <img
              src="/scratches/curly-arrow.png"
              className="absolute top-[-250px] hidden lg:block right-0 w-80"
              alt=""
            />
          </div>
          <div className="flex flex-1 justify-center relative w-full">
            {/* <img src="Blob.svg" className="" alt="" /> */}
            {/* <img src="mockup1.png" className="object-contain max-w-md" alt="" /> */}
            <img
              src="/iphone3.png"
              className="object-contain max-w-md max-h-[650px] drop-shadow-xl z-10 hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="/scratches/circle.png"
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
            <div className="flex flex-col gap-3 relative">
              <img
                src="/scratches/cloud.png"
                className="absolute top-[-80px] md:top-[-120px] left-8 md:left-auto md:right-32 w-32 md:w-48"
                alt=""
              />
              <p className="text-sky-700 font-semibold text-sm md:text-base">
                Features
              </p>
              <p className="text-3xl md:text-4xl font-semibold">
                Always late for class?
              </p>
            </div>
            <p className="text-lg md:text-xl">
              Don´t worry we got you, InClass has a feature for everything, from
              the exact time your class starts to personalized reminders so you
              can choose when to be reminded for a class.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex flex-col flex-1 gap-8 relative">
            <img
              src="/scratches/flower.png"
              className="absolute top-[-16px] md:top-[-50px] right-8 w-16 md:w-24"
              alt=""
            />
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
              src="/mockups/ipad-schedule.png"
              className="md:absolute h-full object-cover overflow-x-visible object-left drop-shadow-xl hover:scale-105 transition-all duration-300"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex-1 md:min-h-[512px] order-3 md:order-1 gap-4 md:gap-8 grid grid-cols-2">
            {/* <img
              src="ipad1.png"
              className="md:absolute h-full object-cover overflow-x-visible object-left drop-shadow-xl"
              alt=""
            /> */}
            <img
              src="/mockups/iphone-exams.png"
              className="object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="/mockups/iphone-tasks.png"
              className="object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 order-2 gap-8 relative">
            <img
              src="/scratches/flag.png"
              className="absolute top-[-16px] md:top-[-50px] right-8 w-16 md:w-24"
              alt=""
            />
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
        </div>

        <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24">
          <div className="flex flex-col flex-1 gap-8 relative">
            <img
              src="/scratches/leaf2.png"
              className="absolute top-[-16px] md:top-[-50px] right-8 w-14 md:w-20"
              alt=""
            />
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
          <div className="flex flex-1 md:min-h-[512px] relative w-full justify-center max-w-lg">
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
              <div className="border rounded-3xl flex items-center gap-2 py-2 pl-1 pr-4 max-w-md drop-shadow-xl bg-white hover:scale-105 transition-all duration-300">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">Matemática Discreta</p>
                    <p className="text-sm text-gray-500">6m ago</p>
                  </div>
                  <p>Your class starts in 15 minutes</p>
                </div>
              </div>

              <div className="border rounded-3xl flex items-center sm:ml-12 gap-2 py-2 pl-1 pr-4 max-w-md drop-shadow-xl bg-white hover:scale-105 transition-all duration-300">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">Física II</p>
                    <p className="text-sm text-gray-500">24m ago</p>
                  </div>
                  <p>Your exam starts at 18:30 hs</p>
                </div>
              </div>

              <div className="border rounded-3xl flex items-center sm:ml-6 gap-2 py-2 pl-1 pr-4 max-w-md drop-shadow-xl bg-white hover:scale-105 transition-all duration-300">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex justify-between items-end w-full">
                    <p className="font-semibold">3 tasks due today</p>
                    <p className="text-sm text-gray-500">57m ago</p>
                  </div>
                  <p>from 2 subjects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl py-16 md:py-24 justify-center w-full scroll-m-8"
        id="customization"
      >
        <div className="px-4 md:px-8 flex flex-col gap-12 md:gap-24">
          <div className="max-w-7xl px-4 md:px-8 flex justify-center">
            <div className="max-w-3xl flex flex-col gap-5 text-center relative">
              <img
                src="/scratches/star.png"
                className="absolute top-[-80px] md:top-[-100px] right-[-20px] md:right-[-100px] w-20 md:w-32"
                alt=""
              />
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
              src="/mockups/iphone-style-1.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="/mockups/iphone-style-2.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="/mockups/iphone-style-3.png"
              className="object-contain hover:scale-105 transition-all duration-300"
              alt=""
            />
            <img
              src="/mockups/iphone-style-4.png"
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
          <div className="max-w-3xl flex flex-col gap-5 text-center relative">
            <img
              src="/scratches/3-arrows.png"
              className="absolute dm:top-[-60px] md:top-[-100px] left-6 top-[-90px] sm:left-[-80px] md:left-[-130px] w-24 md:w-36 rotate-[240deg] sm:rotate-[-170deg]"
              alt=""
            />
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
          <div className="py-8 px-5 md:px-8 bg-slate-100 rounded-2xl flex flex-col gap-8 items-center w-full relative">
            <img
              src="/scratches/question-mark.png"
              className="absolute top-[-16px] md:top-[-50px] right-4 md:right-8 w-24 md:w-36"
              alt=""
            />
            <img
              src="/scratches/mail.png"
              className="absolute bottom-[-30px] sm:bottom-[-50px] xl:bottom-4 left-4 xl:left-[-40px] w-24 md:w-36"
              alt=""
            />
            <div className="flex items-baseline">
              <Image
                src="/zoe2.png"
                height={64}
                width={64}
                alt=""
                className="w-16 h-16 rounded-full border-2 border-white translate-x-4"
              />
              <Image
                src="/bruno.png"
                height={80}
                width={80}
                alt=""
                className="w-20 h-20 rounded-full border-2 border-white z-20"
              />
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
        className="flex flex-col py-16 md:py-24 gap-12 md:gap-16 w-full max-w-7xl px-4 md:px-8 scroll-m-8 relative"
        id="platforms"
      >
        <img
          src="/scratches/fire.png"
          className="absolute w-24 sm:w-36 bottom-2 left-2"
          alt=""
        />
        <img
          src="/scratches/leaf1.png"
          className="absolute w-20 sm:w-28 bottom-2 right-2"
          alt=""
        />
        <p className="text-4xl font-semibold">All our platforms</p>
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          <a href="">
            <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center group">
              <p className="z-10 text-lg font-medium group-hover:font-semibold group-hover:text-xl transition-all">
                iPhone / iPad / macOS
              </p>
              <p className="absolute font-black text-5xl text-white text-center group-hover:opacity-50 transition-all">
                AVAILABLE
              </p>
            </div>
          </a>
          <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center">
            <p className="z-10 text-lg font-medium">macOS native</p>
            <p className="absolute font-black text-5xl text-white text-center">
              COMING
              <br />
              SOON
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl h-60 flex flex-col justify-center items-center">
            <p className="z-10 text-lg font-medium">web</p>
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
