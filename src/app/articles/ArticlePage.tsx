import ShareIconButton from "@/components/buttons/ShareIconButton";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoChevronForward, IoArrowForward } from "react-icons/io5";

interface ArticlePageProps {
  category: "Guides & Tutorials" | "Tech Trends";
  title: string;
  subtitle: string;
  dateTime: string; // Should be ISO 8601 format (e.g., "2024-11-21")
  xShareLink: string;
  linkedInShareLink: string;
  featuredImage: React.ReactNode;
  sections: ArticleSection[];
  upNextArticleTitle: string;
  upNextArticleImagePath: string;
  upNextArticleHref: string;
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
  upNextArticleTitle,
  upNextArticleImagePath,
  upNextArticleHref,
}: ArticlePageProps) => {
  const formattedDate = new Date(dateTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-950 pt-36 mobileLandscape:pt-24 text-grey-100">
      <div className="max-w-4xl mx-auto p-6 ipadPortrait:px-14 mobilePortrait:px-8 mobileLandscape:px-12">
        {/* Section: Title and Meta */}
        <div className="text-left md:text-center">
          <p className="text-cyan-500 uppercase text-sm font-bold mb-5">
            {category}
          </p>
          <h1 className="text-5xl mobilePortrait:text-4xl font-light leading-[1.15] mb-5 font-nunito text-gray-100 ">
            {title}
          </h1>
          <p className="text-base font-bold mb-5 font-nunito text-gray-100 leading-relaxed">
            {subtitle}
          </p>

          {/* Meta Info */}
          <div className="text-gray-100 text-base flex mobilePortrait:flex-col items-start md:justify-center font-light font-nunito md:items-center gap-2 mobilePortrait:gap-1 mb-5 ">
            <span className="text-cyan-400 font-bold">By Alex Blyth</span>
            <span className="mobilePortrait:hidden">&bull;</span>
            <div className="flex gap-2">
              <time dateTime={dateTime} className="mr-1">
                {formattedDate}
              </time>
              <span>BeyondDevelopment.co</span>
            </div>
            <span className="mobilePortrait:hidden">&bull;</span>
            <div className="flex gap-2">
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
        </div>

        {/* Section: Featured Image */}
        <div className="my-8 mobileLandscape:mx-6">{featuredImage}</div>

        {/* Section: Article Content */}
        <article className="text-gray-100 leading-[1.75] text-xl text-grey-100 font-light font-nunito">
          {sections.map((section, i) => {
            return (
              <section key={i} className="[&:not(:last-child)]:mb-12 md:mb-12">
                {section.sectionBlocks.map((block) => {
                  switch (block.type) {
                    case "header":
                      return (
                        <h3 className="text-3xl font-bold mobilePortrait:text-2xl">
                          {block.content}
                        </h3>
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
      <Link href={upNextArticleHref}>
        <div className="flex justify-between bg-gray-900 w-full h-[5rem] md:hidden border-t border-gray-500 px-5 py-4">
          <div className="w-[80%] h-[100%] flex gap-4 text-sm">
            <div className="relative h-[100%] w-[50%] max-w-[5rem]">
              <Image
                src={upNextArticleImagePath}
                alt="Up Next Article Image"
                fill
                // width={300}
                // height={100}
                className="w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-thin">Read Next</p>
              <p className="line-clamp-1 font-bold">{upNextArticleTitle}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <IoArrowForward className="text-gray-200 scale-[1.5]" />
          </div>
        </div>
      </Link>
      <div className="hidden bg-black px-24 mobileLandscape:px-32 xl:px-60 md:grid grid-cols-3 gap-x-8 h-48 relative">
        <div className="col-span-1 h-48 relative">
          <Link href={upNextArticleHref}>
            <Image
              src={upNextArticleImagePath}
              alt="Up Next Article Image"
              fill
              className="w-full object-cover object-center"
            />
          </Link>{" "}
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <Link href={upNextArticleHref}>
            <div className="flex flex-col gap-1">
              <p className="uppercase text-cyan-500 tracking-widest text-[0.8rem] font-extralight">
                Up Next
              </p>
              <h3 className="text-2xl font-extrabold text-gray-100 leading-tight line-clamp-2">
                {upNextArticleTitle}
              </h3>
              <p className="text-[0.9rem] text-gray-300 font-light opacity-75">
                By Alex Blyth
              </p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 pr-4">
              <IoChevronForward className="text-sm transform scale-[3] opacity-50 hover:opacity-100 transition-opacity duration-200" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
