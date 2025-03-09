import Image from "next/image";
import ArticlePage, { ArticleSection } from "../ArticlePage";
import { articleSections } from "./data";

const Article = () => {
  return (
    <ArticlePage
      category="Tech Trends"
      title={"The New Normal: AI in Software Development"}
      subtitle={
        "Using LLMs is now part of being a developer, and that’s not going to change."
      }
      dateTime={"2025-03-10"}
      xShareLink={
        "https://x.com/intent/tweet?text=The%20New%20Normal:%20AI%20in%20Software%20Development&url=https://www.beyonddevelopment.co/articles/the-new-normal-ai-in-software-development"
      }
      linkedInShareLink={
        "https://www.linkedin.com/sharing/share-offsite/?url=https://www.beyonddevelopment.co/articles/the-new-normal-ai-in-software-development"
      }
      featuredImage={
        <picture>
          <source srcSet="/ai-person.webp" type="image/webp" />
          <Image
            src="/ai-person.jpg"
            alt="A young man made out of code, staring into the distance"
            width={800}
            height={600}
            className="w-full object-cover rounded-md"
            priority
            loading="eager"
          />
        </picture>
      }
      // featuredImage={
      //   <Image
      //     src="/screen-with-coffee.webp"
      //     alt="Article Image"
      //     width={800}
      //     height={502}
      //     className="w-full object-cover rounded-md"
      //     priority
      //     loading="eager"
      //   />
      // }
      sections={articleSections as ArticleSection[]}
      upNextArticleTitle="How to Start Coding: The 2-Minute Guide for Complete Beginners"
      upNextArticleImagePath="/screen-with-coffee.jpg"
      upNextArticleHref="/articles/how-to-start-coding-the-two-minute-guide-for-complete-beginners"
    />
  );
};

export default Article;
