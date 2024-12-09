import Image from "next/image";
import ArticlePage, { ArticleSection } from "../ArticlePage";
import { articleSections } from "./data";

const Article = () => {
  return (
    <ArticlePage
      category="Guides & Tutorials"
      title={"How to Start Coding: The 2-Minute Guide for Complete Beginners"}
      subtitle={
        "Learning to code is easy, all you need is a computer and the internet. Knowing where to start is the hard part. Here’s the guide I wish I’d had when I began my journey as a developer."
      }
      dateTime={"2024-12-06"}
      xShareLink={
        "https://x.com/intent/tweet?text=How%20To%20Start%20Coding:%20The%202-Minute%20Guide%20for%20Complete%20Beginners&url=https://www.beyonddevelopment.co/articles/how-to-start-coding-the-two-minute-guide-for-complete-beginners"
      }
      linkedInShareLink={
        "https://www.linkedin.com/sharing/share-offsite/?url=https://www.beyonddevelopment.co/articles/how-to-start-coding-the-two-minute-guide-for-complete-beginners"
      }
      featuredImage={
        <Image
          src="/screen-with-coffee.jpg"
          alt="Article Image"
          width={800}
          height={502}
          className="w-full object-cover rounded-md"
        />
      }
      sections={articleSections as ArticleSection[]}
      upNextArticleTitle="The Ultimate Guide to Becoming a Software Engineer, from scratch."
      upNextArticleImagePath="/code-doorway.png"
      upNextArticleHref="/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
    />
  );
};

export default Article;