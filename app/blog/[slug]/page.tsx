import { FC } from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import { DocsPageHeader } from "@/components/page-header";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocsFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const Page = async ({ params }: PageProps) => {
  const doc = await getDocsFromParams(params.slug);

  //   return <div>{JSON.stringify(doc)}</div>;
  return (
    // <div>
    //   <Mdx code={doc.body.code} />
    // </div>
    <div className="max-w-4xl mx-auto">
      <main className="relative py-6 lg:gap-10 lg:py-10">
        <div className="mx-auto w-full min-w-0">
          <DocsPageHeader heading={doc.title} text={doc.description} />
          <Mdx code={doc.body.code} />
          <hr className="my-4 md:my-6" />
          {/* <DocsPager doc={doc} /> */}
        </div>
      </main>
    </div>
  );
};

export default Page;
