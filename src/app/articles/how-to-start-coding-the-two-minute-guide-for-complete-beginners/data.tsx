import Link from "next/link";

export const articleSections = [
  {
    sectionBlocks: [
      {
        type: "paragraph",
        content: (
          <em className="font-extralight">
            This article is about where and how to learn to code. If you’d like
            a more comprehensive guide to launching your career in software, you
            can check out my previous article{" "}
            <Link href="/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch">
              <span className="text-cyan-400 hover:underline">
                The Ultimate Guide to Becoming a Software Developer, from
                scratch.
              </span>
            </Link>
          </em>
        ),
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "paragraph",
        content: (
          <>
            Learning to code is easy—all you need is a computer and the
            internet. The hard part is knowing where to start. This article will
            help you get the ball rolling.
          </>
        ),
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "header",
        content: (
          <>
            First step: orient yourself – with YouTube, ChatGPT & talking to
            others.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            First thing’s first, you need a basic understanding of coding and of
            the IT industry.{" "}
            <strong className="font-bold">
              Watch some YouTube videos aimed at beginners
            </strong>
            , which explain a bit about software development. Just start with
            the basics and then follow your interest.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <em className="font-extralight">
              Some suggestions to get you started: videos about the history of
              programming; about popular programming languages; about different
              kinds of coding (e.g. frontend vs backend); how the IT world
              works; and what it’s like to work as a developer.
            </em>
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Make a <strong className="font-bold">ChatGPT</strong> or{" "}
            <strong className="font-bold">Grok</strong> account if you don’t
            have one, and ask it questions that you have, and that arise over
            time. Tell it to tailor its answers to an entry-level learner.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            If you know any{" "}
            <strong className="font-bold">
              developers, or people with a connection to the IT world, send them
              a message
            </strong>{" "}
            or email. Tell them about your plans to start coding. Ask them some
            questions, or if they would be free for a call or a coffee. Talking
            with them will give you more of a feel for what the world of IT is
            like.
          </>
        ),
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "header",
        content: <>Second step: learn what it feels like to code.</>,
      },
      {
        type: "paragraph",
        content: (
          <>
            You need to get a feel of what coding is actually like.{" "}
            <a
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline text-cyan-400">Codecademy</span>
            </a>{" "}
            is a learning platform which teaches people to write code in a very
            guided way.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            You can start with its free tier—pick one of its courses, whichever
            you feel like or suspect would be most useful to you, and start
            getting some coding hours in.
          </>
        ),
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "header",
        content: <>Next up: write code in your own environment!</>,
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong className="font-bold">Download an IDE</strong>—a platform
            where developers write code.{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-cyan-400 hover:underline">
                Visual Studio Code
              </span>
            </a>{" "}
            is a free and widely-used option.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            <strong className="font-bold">Then go back to YouTube</strong> and
            find a guided coding tutorial, so you can follow along and make a
            small app. This will be quite a step forward, as you will be
            creating and running software yourself, which may feel quite
            satisfying.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <em className="font-extralight">
            Some good YouTube channels for free guided tutorials:
          </em>
        ),
      },
      {
        type: "unordered-list",
        content: [
          <>
            <a
              href="https://www.youtube.com/@TraversyMedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em className="font-extralight text-cyan-400 hover:underline">
                Traversy Media
              </em>
            </a>
          </>,
          <>
            <a
              href="https://www.youtube.com/@programmingwithmosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em className="font-extralight text-cyan-400 hover:underline">
                Programming with Mosh
              </em>
            </a>
          </>,
        ],
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "header",
        content: <>Finally: level up by joining a video learning platform...</>,
      },
      {
        type: "paragraph",
        content: (
          <>
            YouTube only has so many quality coding tutorials. To progress on
            from the beginner stuff, I recommend checking out either{" "}
            <a
              href="https://www.pluralsight.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline text-cyan-400">PluralSight</span>
            </a>{" "}
            or{" "}
            <a
              href="https://www.udemy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline text-cyan-400">Udemy</span>
            </a>
            . They each have scores of high quality guided coding tutorials,
            made by talented and experienced developers, and covering many areas
            of software development.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            By now, you should have enough information to be able to pick a
            particular area of software development (and a main language or
            technology) to initially focus on. Your chosen area could be one
            that aligns with your interests, talents, or career goals. If you
            feel unsure, don’t worry and just pick a popular language to go with
            (JavaScript or Java will do). If you decide to pivot to something
            else later, it’s not a problem because most coding languages have a
            lot in common.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <em>
            n.b. There are many fine places that teach coding online besides the
            resources I’ve mentioned, other video platforms and much more (
            <a
              href="https://www.coursera.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline text-cyan-400">Coursera</span>
            </a>
            ,{" "}
            <a
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline text-cyan-400">
                Frontend Masters
              </span>
            </a>
            , etc.).
          </em>
        ),
      },
    ],
  },
  {
    sectionBlocks: [
      {
        type: "header",
        content: (
          <>
            Moving on: as soon as you are able to, join a learning institution
            or company, preferably in-person.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            It’s great that you can basically learn to code by yourself online,
            but eventually you will have to share your new skill with the
            outside world in some way, if you want to pursue it as more than a
            hobby.
          </>
        ),
      },
      {
        type: "paragraph",
        content: (
          <>
            Register with a coding school, bootcamp, or university. Or else find
            companies who will let you in the door to get unpaid (or paid!) work
            experience. On the job is where the real learning happens. Start
            building that resume, collecting references, and laying the
            foundation for your career in IT.
          </>
        ),
      },
    ],
  },
];
