import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const tutoriasl = [
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
    {
      title: "How to add a class",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      link: "/blog/privacy-policy",
      image: "/blog/blog-test.png",
    },
  ];

  return (
    <main className="flex flex-col items-center py-16 md:py-24 gap-12 md:gap-16">
      <div className="max-w-7xl w-full px-4 md:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-semibold">Latest tutorials</p>
          <p className="text-xl text-gray-600">
            Get the most out of the app with these tutorials.
          </p>
        </div>
      </div>
      <p>WROK IN PROGRESS</p>
      {/* <div className="max-w-7xl w-full px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
        {tutoriasl.map((tutorial, x) => (
          <Link
            className="flex flex-col gap-6 group"
            href={tutorial.link}
            key={x}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                fill
                className="object-cover rounded-2xl border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-4">
                <p className="text-2xl font-semibold group-hover:underline">
                  {tutorial.title}
                </p>
              </div>
              <p className="text-base text-gray-600">{tutorial.description}</p>
            </div>
          </Link>
        ))}
      </div> */}
    </main>
  );
}
