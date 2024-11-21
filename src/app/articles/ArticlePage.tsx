import ShareIconButton from "@/components/buttons/ShareIconButton";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface ArticlePageProps {
  category: "Guides & Tutorials";
  title: string;
  subtitle: string;
  dateTime: string; // Should be ISO 8601 format (e.g., "2024-11-21")
  xShareLink: string;
  linkedInShareLink: string;
  featuredImage: React.ReactNode;
  sections: ArticleSection[];
}

export interface ArticleSection {
  sectionBlocks: ArticleBlock[];
}

interface ArticleBlock {
  type: "header" | "paragraph" | "ordered-list" | "unordered-list";
  content: React.ReactNode | React.ReactNode[];
}

const ArticlePage = ({
  category,
  title,
  subtitle,
  dateTime,
  xShareLink,
  linkedInShareLink,
  featuredImage,
  sections,
}: ArticlePageProps) => {
  const formattedDate = new Date(dateTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-950 pt-36 text-grey-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Section: Title and Meta */}
        <div className="text-center">
          <p className="text-cyan-500 uppercase text-sm font-bold mb-5">
            {category}
          </p>
          <h1 className="text-5xl font-light leading-[1.15] mb-5 font-nunito">
            {title}
          </h1>
          <p className="text-base font-bold mb-5 font-nunito">{subtitle}</p>

          {/* Meta Info */}
          <div className="text-gray-100 text-base flex justify-center font-light font-nunito items-center gap-2 mb-5">
            <span className="text-cyan-400 font-bold">By Alex Blyth</span>
            <span>&bull;</span>
            <time dateTime={dateTime} className="mr-1">
              {formattedDate}
            </time>
            <span>BeyondDevelopment.co</span>
            <span>&bull;</span>
            <strong className="font-bold">Share on</strong>{" "}
            <ShareIconButton
              icon={<FaXTwitter size={20} />}
              link={xShareLink}
            />{" "}
            <ShareIconButton
              icon={<FaLinkedin size={24} />}
              link={linkedInShareLink}
            />
          </div>
        </div>

        {/* Section: Featured Image */}
        <div className="my-8">{featuredImage}</div>

        {/* Section: Article Content */}
        <article className="text-gray-100 leading-[1.75] text-xl text-grey-100 font-light font-nunito">
          {sections.map((section, i) => {
            return (
              <section key={i} className="mb-12">
                {section.sectionBlocks.map((block) => {
                  switch (block.type) {
                    case "header":
                      return (
                        <h3 className="text-3xl font-bold">{block.content}</h3>
                      );
                    case "paragraph":
                      return <p className="mt-8">{block.content}</p>;
                    case "ordered-list":
                      return (
                        <ol className="mt-2 list-decimal list-inside pl-6">
                          {(block.content as React.ReactNode[]).map(
                            (item, i) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ol>
                      );
                    case "unordered-list":
                      return (
                        <ul className="mt-2 list-disc pl-6">
                          {(block.content as React.ReactNode[]).map(
                            (item, i) => (
                              <li key={i}>{item}</li>
                            )
                          )}
                        </ul>
                      );
                  }
                })}
              </section>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
