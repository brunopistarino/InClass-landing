import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    <main className="flex flex-col mt-[-80px] items-center">
      <section className="min-h-screen flex justify-center w-full max-w-7xl px-8">
        <div className="flex justify-between w-full items-center gap-4">
          <div className="max-w-2xl flex flex-col gap-12">
            <div className="flex flex-col gap-6 items-start">
              <a href="">
                <div className="border p-1 rounded-full flex items-center gap-2 pr-2">
                  <span className="border px-2 rounded-full">New!</span>{" "}
                  Available in App Store
                  <ArrowRight />
                </div>
              </a>
              <h1 className="text-6xl font-semibold">
                All your academic life in one place
              </h1>
              {/* <p className="text-xl">
                Designed by marketers. Untitled gives you the guidance, data and
                innovation you need to become a better marketer.
              </p> */}
              <p className="text-xl">
                For studentds by students. Designed to make you reach all show
                goals in school and never forget classes, importat exams or
                assignments.
              </p>
            </div>
            {/* <a href=""> */}
            <img src="appStoreBadge.svg" className="max-w-[160px]" alt="" />
            {/* </a> */}
          </div>
          <div>
            {/* <img src="Blob.svg" className="" alt="" /> */}
            <img
              src="iphone.png"
              className="object-contain max-w-md mt-20"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col py-24 gap-24">
        <div className="max-w-7xl px-8 flex justify-center">
          <div className="max-w-3xl flex flex-col gap-5 text-center">
            <div className="flex flex-col gap-3">
              <p className="text-cyan-700 font-semibold">Features</p>
              <p className="text-4xl font-semibold">
                Analytics that feels like it’s from the future
              </p>
            </div>
            <p className="text-xl">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-8 flex justify-between items-center gap-24">
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 bg-slate-400">
                <ArrowRight />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl font-semibold">Share team inboxes</p>
                <p className="text-lg">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-4 gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">Leverage automation to move fast</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Always give customers a human to chat to
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Automate customer support and close leads faster
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 min-h-[512px] relative">
            <img
              src="mock.png"
              className="absolute h-full object-cover overflow-x-visible object-left"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-7xl px-8 flex justify-between items-center gap-24">
          <div className="flex flex-1 min-h-[512px] relative">
            <img
              src="mock.png"
              className="absolute h-full object-cover overflow-x-visible object-right"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 bg-slate-400">
                <ArrowRight />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl font-semibold">
                  Deliver instant answers
                </p>
                <p className="text-lg">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-4 gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Keep your customers in the loop with live chat
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Embed help articles right on your website
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Customers never have to leave the page to find an answer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-8 flex justify-between items-center gap-24">
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="p-3 rounded-full border-8 bg-slate-400">
                <ArrowRight />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl font-semibold">
                  Manage your team with reports
                </p>
                <p className="text-lg">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-4 gap-5">
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Filter, export, and drilldown on the data quickly
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Save, schedule, and automate reports to your inbox
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 />
                <p className="text-lg">
                  Connect the tools you already use with 100+ integrations
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 min-h-[512px] relative">
            <img
              src="mock.png"
              className="absolute h-full object-cover overflow-x-visible object-left"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col py-24 gap-24 w-full max-w-7xl">
        <div className="max-w-7xl px-8 flex justify-center">
          <div className="max-w-3xl flex flex-col gap-5 text-center">
            <p className="text-4xl font-semibold">Frequently asked questions</p>
            <p className="text-xl">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>

        <div className="max-w-7xl px-8 flex justify-center">
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-7xl px-8 flex justify-center w-full">
          <div className="p-8 bg-slate-100 rounded-2xl flex flex-col gap-8 items-center w-full">
            <div className="flex items-baseline">
              <img
                src="profile1.png"
                alt=""
                className="bg-black w-14 h-14 rounded-full border-2 border-white translate-x-4"
              />
              <img
                src="profile1.png"
                alt=""
                className="bg-black w-16 h-16 rounded-full border-2 border-white z-20"
              />
              <img
                src="profile1.png"
                alt=""
                className="bg-black w-14 h-14 rounded-full border-2 border-white translate-x-[-16px]"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">Still have questions?</p>
              <p className="text-lg">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <Button>Get in touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
