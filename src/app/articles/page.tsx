// import Image from "next/image";
import Link from "next/link";

export default function ArticlesHub() {
  return (
    <div className="bg-gradient-to-b from-[#00070D] to-[#00111A] min-h-screen pt-32 text-gray-50">
      <div className="container mx-auto px-[5%] xl:px-4 py-12">
        <div className="mb-6">
          {/* TODO: use a more edgey font */}
          {/* TODO: possibly remove mobilePortrait:text-center */}
          <h2 className="uppercase mobilePortrait:text-center lg:text-center font-bold tracking-[0.2em] text-gray-200">
            Articles
          </h2>
          {/* (when have more, change to 'Latest Articles') */}
        </div>

        {/* Featured Article */}
        <div className="lg:bg-gray-900 mb-8 flex lg:block">
          <div className="lg:hidden pr-4 text-xl opacity-75">1</div>
          <Link
            href="/articles/the-new-normal-ai-in-software-development"
            passHref
          >
            <div className="cursor-pointer lg:h-80 flex flex-col lg:flex-col-reverse lg:grid lg:grid-cols-3">
              <div className="col-span-1 lg:p-9 flex flex-col gap-3 lg:gap-9">
                <p className="text-sm opacity-60 hidden lg:block">
                  Tech Trends
                </p>
                <h2 className="text-lg lg:text-3xl line-clamp-3">
                  The New Normal: AI in Software Development
                </h2>
                <br className="hidden lg:block" />
                <p className="opacity-60 text-xs lg:text-base">
                  Alex Blyth | March 10, 2025
                </p>
              </div>
              <div className="w-full h-32 lg:h-80 col-span-2 mt-3 lg:m-0">
                <picture>
                  <source srcSet="/ai-person-cropped.webp" type="image/webp" />
                  <img
                    src="/ai-person-cropped.jpg"
                    alt="A young man made out of code, staring into the distance"
                    className=" mx-auto w-full h-full object-cover rounded-md lg:rounded-none"
                  />
                </picture>{" "}
                {/* <Image
                  src="/code-doorway.png"
                  alt="Featured Article"
                  width={1000}
                  height={600}
                  className="mx-auto w-full h-full object-cover rounded-md lg:rounded-none"
                /> */}
              </div>
            </div>
          </Link>
        </div>
        {/* <hr className="lg:hidden border-gray-50 opacity-20 w-[95%] mx-auto" /> */}

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex lg:block lg:bg-gray-900 ">
            <div className="lg:hidden pr-4 text-xl opacity-75">2</div>
            <Link
              href="/articles/how-to-start-coding-the-two-minute-guide-for-complete-beginners"
              passHref
            >
              <div className="shadow-md overflow-hidden cursor-pointer">
                {/* <Image
                src="/code-doorway.png"
                alt="Article 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
                <div className="w-full h-28 hidden lg:block">
                  <picture>
                    <source
                      srcSet="/screen-with-coffee.webp"
                      type="image/webp"
                    />
                    <img
                      src="/screen-with-coffee.jpg"
                      alt="Article Image"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="lg:px-6 lg:py-7 flex flex-col gap-2 lg:gap-4">
                  <h3 className=" text-lg lg:text-xl line-clamp-3">
                    How to Start Coding: The 2-Minute Guide for Complete
                    Beginners
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 mb-2">
                    Dec 12, 2024
                  </p>
                </div>
              </div>
            </Link>{" "}
          </div>
          <div className="flex lg:block lg:bg-gray-900 ">
            <div className="lg:hidden pr-4 text-xl opacity-75">3</div>
            <Link
              href="/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
              passHref
            >
              <div className="shadow-md overflow-hidden cursor-pointer">
                {/* <Image
                src="/code-doorway.png"
                alt="Article 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
                <div className="w-full h-28 hidden lg:block">
                  <picture>
                    <source srcSet="/code-doorway.webp" type="image/webp" />
                    <img
                      src="/code-doorway.png"
                      alt="Featured Article Image"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="lg:px-6 lg:py-7 flex flex-col gap-2 lg:gap-4">
                  <h3 className=" text-lg lg:text-xl line-clamp-3">
                    The Ultimate Guide to Becoming a Software Engineer, from
                    scratch.
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 mb-2">
                    Nov 30, 2024
                  </p>
                </div>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
