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
      question: "En que dispositivos funciona?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "En que paises está dispoible?",
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
    <main className="flex flex-col items-center md:mt-[-80px]">
      <section className="flex min-h-screen w-full max-w-7xl justify-center px-4 py-16 md:px-8 md:py-24">
        <div className="flex w-full flex-col items-center justify-between gap-16 md:flex-row">
          <div className="relative flex max-w-xl flex-col gap-8 md:gap-12">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <a href="https://apps.apple.com/us/app/inclass-school-planner/id6462791378?itsct=apps_box_badge&amp;itscg=30200">
                <div className="flex items-center gap-2 rounded-full border p-1 pr-2">
                  <span className="rounded-full border px-2">New!</span>{" "}
                  Available in App Store
                  <ArrowRight />
                </div>
              </a>
              <h1 className="max-w-xs text-4xl font-semibold sm:max-w-none md:text-6xl">
                All your school life{" "}
                <span className="rainbow-underline underline-offset-8">
                  in one place
                </span>
              </h1>
              <p className="text-lg md:text-xl">
                For students by students. Keep all your school life organized in
                one app, assignments, classes, exams and more!
              </p>
              {/* <p className="text-lg md:text-xl">
              Designed by students for students. Keep all your school life organized in one app, assignments, classes, exams and more!
                For students by students. Designed to make you reach all your
                goals in school and never forget classes, important exams or
                assignments.
              </p> */}
            </div>
            {/* <a href=""> */}
            {/* <a
              href="https://apps.apple.com/us/app/inclass-school-planner/id6462791378?itsct=apps_box_badge&amp;itscg=30200"
              style={{
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "13px",
                width: "250px",
                height: "83px",
              }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1693353600"
                alt="Download on the App Store"
                style={{
                  borderRadius: "13px",
                  width: "250px",
                  height: "83px",
                }}
              />
            </a> */}
            <a
              rel="stylesheet"
              href="https://apps.apple.com/us/app/inclass-school-planner/id6462791378?itsct=apps_box_badge&amp;itscg=30200"
            >
              <Image
                src={"/appStoreBadge.svg"}
                width={160}
                height={53}
                alt="Download on the App Store"
                className="mx-auto md:mx-0"
              />
            </a>
            <img
              src="/scratches/wave.png"
              className="absolute bottom-[-110px] hidden w-60 md:block"
              alt=""
            />
            <img
              src="/scratches/curly-arrow.png"
              className="absolute right-0 top-[-250px] hidden w-80 lg:block"
              alt=""
            />
          </div>
          <div className="relative flex w-full flex-1 justify-center">
            {/* <img src="Blob.svg" className="" alt="" /> */}
            {/* <img src="mockup1.png" className="object-contain max-w-md" alt="" /> */}
            <img
              src="/mockups/iphone-today2.webp"
              className="z-10 max-h-[650px] max-w-md object-contain drop-shadow-xl transition-all duration-300 hover:scale-105"
              alt=""
            />
            <img
              src="/scratches/circle.png"
              className="absolute bottom-0 top-0 my-auto w-full"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="flex scroll-m-8 flex-col gap-12 py-16 md:gap-24 md:py-24"
        id="features"
      >
        <div className="flex max-w-7xl justify-center px-4 md:px-8">
          <div className="flex max-w-3xl flex-col gap-4 text-center md:gap-5">
            <div className="relative flex flex-col gap-3">
              <img
                src="/scratches/cloud.png"
                className="absolute left-8 top-[-80px] w-32 md:left-auto md:right-32 md:top-[-120px] md:w-48"
                alt=""
              />
              <p className="text-sm font-semibold text-sky-700 md:text-base">
                Features
              </p>
              <p className="text-3xl font-semibold md:text-4xl">
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

        <div className="flex max-w-7xl flex-col items-center justify-between gap-10 px-4 md:flex-row md:gap-24 md:px-8">
          <div className="relative flex flex-1 flex-col gap-8">
            <img
              src="/scratches/flower.png"
              className="absolute right-8 top-[-16px] w-16 md:top-[-50px] md:w-24"
              alt=""
            />
            <div className="flex flex-col items-start gap-6">
              <div className="rounded-full border-8 border-sky-100 bg-sky-200 p-3">
                <CalendarDays className="text-sky-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl font-semibold md:text-3xl">
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
            <div className="flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  Add and edit your subjects with details and colors
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  View your classes and plan ahead
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-800" />
                <p className="text-base md:text-lg">
                  Organize your schedule week after week
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 md:min-h-[512px]">
            <img
              src="/mockups/ipad-schedule.webp"
              className="h-full overflow-x-visible object-cover object-left drop-shadow-xl transition-all duration-300 hover:scale-105 md:absolute"
              alt=""
            />
          </div>
        </div>

        <div className="flex max-w-7xl flex-col items-center justify-between gap-10 px-4 md:flex-row md:gap-24 md:px-8">
          <div className="order-3 grid flex-1 grid-cols-2 gap-4 md:order-1 md:min-h-[512px] md:gap-8">
            {/* <img
              src="ipad1.png"
              className="md:absolute h-full object-cover overflow-x-visible object-left drop-shadow-xl"
              alt=""
            /> */}
            <img
              src="/mockups/iphone-exams.webp"
              className="object-contain drop-shadow-xl transition-all duration-300 hover:scale-105"
              alt=""
            />
            <img
              src="/mockups/iphone-tasks.webp"
              className="object-contain drop-shadow-xl transition-all duration-300 hover:scale-105"
              alt=""
            />
          </div>
          <div className="relative order-2 flex flex-1 flex-col gap-8">
            <img
              src="/scratches/flag.png"
              className="absolute right-8 top-[-16px] w-16 md:top-[-50px] md:w-24"
              alt=""
            />
            <div className="flex flex-col items-start gap-6">
              <div className="rounded-full border-8 border-amber-100 bg-amber-200 p-3">
                <AlarmCheck className="text-amber-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl font-semibold md:text-3xl">
                  Create, Save, and Sync
                </p>
                <p className="text-base md:text-lg">
                  Create all your tasks with due dates, notes and files. Save it
                  and Sync your data across all your devices and access it
                  anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg">
                  iPhone, iPad and mac, you’ll never forget a class again!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg">
                  Stay updated with your tasks
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-800" />
                <p className="text-base md:text-lg">
                  Sync your data and access it anywhere
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-7xl flex-col items-center justify-between gap-10 px-4 md:flex-row md:gap-24 md:px-8">
          <div className="relative flex flex-1 flex-col gap-8">
            <img
              src="/scratches/leaf2.png"
              className="absolute right-8 top-[-16px] w-14 md:top-[-50px] md:w-20"
              alt=""
            />
            <div className="flex flex-col items-start gap-6">
              <div className="rounded-full border-8 border-pink-100 bg-pink-200 p-3">
                <Bell className="text-pink-800" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-2xl font-semibold md:text-3xl">
                  Get useful notifications
                </p>
                <p className="text-base md:text-lg">
                  Have you ever forgotten about an important deadline? Say no
                  more! with InClass you can set your own preferences for when
                  and how you want to be notified.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg">
                  Get notifications before your classes, exams, or tasks.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg">
                  Start your day with all things you have to do, in just one
                  tap.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-800" />
                <p className="text-base md:text-lg">
                  Get daily reminders about all your activities.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex w-full max-w-lg flex-1 justify-center md:min-h-[512px]">
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
            <div className="flex w-full flex-col justify-center gap-4">
              <div className="flex max-w-md items-center gap-2 rounded-3xl border bg-white py-2 pl-1 pr-4 drop-shadow-xl transition-all duration-300 hover:scale-105">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex w-full items-end justify-between">
                    <p className="font-semibold">Matemática Discreta</p>
                    <p className="text-sm text-gray-500">6m ago</p>
                  </div>
                  <p>Your class starts in 15 minutes</p>
                </div>
              </div>

              <div className="flex max-w-md items-center gap-2 rounded-3xl border bg-white py-2 pl-1 pr-4 drop-shadow-xl transition-all duration-300 hover:scale-105 sm:ml-12">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex w-full items-end justify-between">
                    <p className="font-semibold">Física II</p>
                    <p className="text-sm text-gray-500">24m ago</p>
                  </div>
                  <p>Your exam starts at 18:30 hs</p>
                </div>
              </div>

              <div className="flex max-w-md items-center gap-2 rounded-3xl border bg-white py-2 pl-1 pr-4 drop-shadow-xl transition-all duration-300 hover:scale-105 sm:ml-6">
                <img src="/appicon.png" className="h-14" alt="" />
                <div className="w-full">
                  <div className="flex w-full items-end justify-between">
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
        className="w-full max-w-7xl scroll-m-8 justify-center py-16 md:py-24"
        id="customization"
      >
        <div className="flex flex-col gap-12 px-4 md:gap-24 md:px-8">
          <div className="flex max-w-7xl justify-center px-4 md:px-8">
            <div className="relative flex max-w-3xl flex-col gap-5 text-center">
              <img
                src="/scratches/star.png"
                className="absolute right-[-20px] top-[-80px] w-20 md:right-[-100px] md:top-[-100px] md:w-32"
                alt=""
              />
              <p className="text-3xl font-semibold md:text-4xl">
                Give it your own style
              </p>
              <p className="text-base md:text-xl">
                Make InClass your own with themes, colors, and widgets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            <img
              src="/mockups/iphone-dark.webp"
              className="object-contain transition-all duration-300 hover:scale-105"
              alt=""
            />
            <img
              src="/mockups/iphone-appearance.webp"
              className="object-contain transition-all duration-300 hover:scale-105"
              alt=""
            />
            <img
              src="/mockups/iphone-style-3.webp"
              className="object-contain transition-all duration-300 hover:scale-105"
              alt=""
            />
            <img
              src="/mockups/iphone-colors.webp"
              className="object-contain transition-all duration-300 hover:scale-105"
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="flex w-full max-w-7xl scroll-m-8 flex-col gap-12 py-16 md:gap-24 md:py-24"
        id="contact"
      >
        {/* <div className="max-w-7xl px-4 md:px-8 flex justify-center">
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
        </div> */}

        {/* <div className="max-w-7xl px-4 md:px-8 flex justify-center">
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
        </div> */}

        <div className="flex w-full max-w-7xl justify-center px-4 md:px-8">
          <div className="relative flex w-full flex-col items-center gap-8 rounded-2xl bg-slate-100 px-5 py-8 md:px-8">
            <img
              src="/scratches/question-mark.png"
              className="absolute right-4 top-[-16px] w-24 md:right-8 md:top-[-50px] md:w-36"
              alt=""
            />
            <img
              src="/scratches/mail.png"
              className="absolute bottom-[-30px] left-4 w-24 sm:bottom-[-50px] md:w-36 xl:bottom-4 xl:left-[-40px]"
              alt=""
            />
            <div className="flex items-baseline">
              <Image
                src="/zoe2.png"
                height={64}
                width={64}
                alt=""
                className="h-16 w-16 translate-x-4 rounded-full border-2 border-white"
              />
              <Image
                src="/bruno.png"
                height={80}
                width={80}
                alt=""
                className="z-20 h-20 w-20 rounded-full border-2 border-white"
              />
              <Image
                src="/luca.png"
                height={64}
                width={64}
                alt=""
                className="h-16 w-16 translate-x-[-16px] rounded-full border-2 border-white"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-xl font-semibold">Still have questions?</p>
              <p className="md:text-lg">
                We love hearing from you. If you have any questions, feedback,
                or suggestions, please contact us.
              </p>
            </div>
            <a href="mailto:inclass2406@gmail.com">
              <Button>Get in touch</Button>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative flex w-full max-w-7xl scroll-m-8 flex-col gap-12 px-4 py-16 md:gap-16 md:px-8 md:py-24"
        id="platforms"
      >
        <img
          src="/scratches/fire.png"
          className="absolute bottom-2 left-2 w-24 sm:w-36"
          alt=""
        />
        <img
          src="/scratches/leaf1.png"
          className="absolute bottom-2 right-2 w-20 sm:w-28"
          alt=""
        />
        <p className="text-4xl font-semibold">All our platforms</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <a href="">
            <div className="group flex h-60 flex-col items-center justify-center rounded-2xl bg-slate-100">
              <p className="z-10 text-lg font-medium transition-all group-hover:text-xl group-hover:font-semibold">
                iPhone / iPad / macOS
              </p>
              <p className="absolute text-center text-5xl font-black text-white transition-all group-hover:opacity-50">
                AVAILABLE
              </p>
            </div>
          </a>
          <div className="flex h-60 flex-col items-center justify-center rounded-2xl bg-slate-100">
            <p className="z-10 text-lg font-medium">watch</p>
            <p className="absolute text-center text-5xl font-black text-white">
              COMING
              <br />
              SOON
            </p>
          </div>
          <div className="flex h-60 flex-col items-center justify-center rounded-2xl bg-slate-100">
            <p className="z-10 text-lg font-medium">web</p>
            <p className="absolute text-center text-5xl font-black text-white">
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
