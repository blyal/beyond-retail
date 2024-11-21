import Image from "next/image";
import ArticlePage, { ArticleSection } from "../ArticlePage";
import { articleSections } from "./data";

const Article = () => {
  return (
    <ArticlePage
      category="Guides & Tutorials"
      title={
        "The Ultimate Guide to Becoming a Software Engineer, from scratch."
      }
      subtitle={
        "Programming is a pathway to a lifetime of opportunity, in the tech industry and beyond."
      }
      dateTime={"2024-11-21"}
      xShareLink={
        "https://x.com/intent/tweet?text=The%20Ultimate%20Guide%20to%20Becoming%20a%20Software%20Engineer,%20from%20scratch&url=https://www.beyonddevelopment.co/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
      }
      linkedInShareLink={
        "https://www.linkedin.com/sharing/share-offsite/?url=https://www.beyonddevelopment.co/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
      }
      featuredImage={
        <Image
          src="/code-doorway.png"
          alt="A Doorway Made of Software Code"
          width={800}
          height={600}
          className="w-full object-cover rounded-md"
        />
      }
      sections={articleSections as ArticleSection[]}
    />
  );
};

export default Article;
