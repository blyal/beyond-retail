import ShareIconButton from "@/components/buttons/ShareIconButton";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const ArticlePage = () => {
  return (
    // <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-blue-950 pt-36 text-grey-100 font-nunito">
    <div className="bg-gradient-to-b from-gray-900 to-blue-950 pt-36 text-grey-100">
      <section className="max-w-4xl mx-auto p-6">
        {/* Section: Title and Meta */}
        <div className="text-center">
          <p className="text-cyan-500 uppercase text-sm font-bold mb-5">
            Guides & Tutorials
          </p>
          <h1 className="text-5xl font-light leading-[1.15] mb-5 font-nunito">
            The Ultimate Guide to Becoming a Software Engineer, from scratch.
          </h1>
          <p className="text-base font-bold mb-5 font-nunito">
            Programming is a pathway to a lifetime of opportunity, in the tech
            industry and beyond.
          </p>

          {/* Meta Info */}
          <div className="text-gray-100 text-base flex justify-center font-light font-nunito items-center gap-2 mb-5">
            <span className="text-cyan-400 font-bold">By Alex Blyth</span>
            <span>&bull;</span>
            <time dateTime="2024-11-21" className="mr-1">
              Nov 21, 2024
            </time>
            <span>BeyondDevelopment.co</span>
            <span>&bull;</span>
            <strong className="font-bold">Share on</strong>{" "}
            <ShareIconButton
              icon={<FaXTwitter size={20} />}
              link={
                "https://x.com/intent/tweet?text=The%20Ultimate%20Guide%20to%20Becoming%20a%20Software%20Engineer,%20from%20scratch&url=https://www.beyonddevelopment.co/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
              }
            />{" "}
            <ShareIconButton
              icon={<FaLinkedin size={24} />}
              link={
                "https://www.linkedin.com/sharing/share-offsite/?url=https://www.beyonddevelopment.co/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
              }
            />
          </div>
        </div>

        {/* Section: Featured Image */}
        <div className="my-8">
          <Image
            src="/code-doorway.png"
            alt="A Doorway Made of Software Code"
            width={800}
            height={600}
            className="w-full object-cover rounded-md"
          />
        </div>

        {/* Section: Article Content */}
        <article className="text-gray-100 leading-[1.75] text-xl text-grey-100 font-light font-nunito">
          <div className="mb-12">
            <p className="mt-8">
              Software Engineers remain among the most sought-after
              professionals. At the same time, programming is one of the most
              accessible skills to learn—all you need is a computer and an
              internet connection. As a developer, you will draw a decent salary
              (especially if you work on your subsidiary abilities, such as
              interview, presentation, and negotiation skills). The career also
              opens possibilities for travel—in terms of both business travel
              and relocation.
            </p>
            <p className="mt-8">
              This article will guide you through the process of getting started
              down this path, from square one, to foot-in-the-door, to
              comfortably positioned for a career in tech.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">Wait, but what about AI?</h3>
            <p className="mt-8">
              So far, working in tech has pretty much just been made easier by
              the arrival of AI, especially for developers. Although the hiring
              market has its ups and downs, companies are still looking for
              devs.
            </p>
            <p className="mt-8">
              As it stands, it’s best to think of AI as a powerful tool that can
              only boost you in your journey towards becoming a developer, if
              you learn how to use it well.
            </p>
            <p className="mt-8">
              So for now, don’t worry about AI taking your job, and read on.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">1. Clarify the goal.</h3>
            <p className="mt-8">
              It’s important to demystify the journey in your mind as much as
              possible by having clarity on what the ultimate goal is: become an
              employed software engineer.
            </p>
            <p className="mt-8">
              Achieving <em>this</em> goal is the hard part. Afterwards, you’ll
              be in a good position to continue your growth in whatever other
              direction you then desire—either continuing to progress towards
              being a senior developer, or pivoting to an adjacent position such
              as project manager (where you will be at an advantage due to your
              technical knowledge); or even starting your own business.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">
              2. Know what the &apos;must-haves&apos; are to achieve the goal.
            </h3>
            <p className="mt-8">
              To get employed, you will need{" "}
              <span className="underline">four</span> things:
            </p>
            <ol className="mt-2 list-decimal list-inside pl-6">
              <li>
                <em>some</em> technical skills—you don’t have to be a wizard
                when you find your first job. Being a rookie is fine, as long as
                you have something to offer.
              </li>
              <li>some kind of qualification or accreditation.</li>
              <li>a CV and matching LinkedIn profile.</li>
              <li>persistence.</li>
            </ol>
            <p className="mt-8">
              Of these four elements, I put{" "}
              <strong className="font-bold">technical skills</strong> first for
              a reason. The great thing about software development is that the
              smartest companies know that having technical skills is the thing
              that really matters for a developer, compared to a formal
              education or a strong CV game. That&apos;s why companies like
              Google are known for hiring people who have never even been to
              university. Personally, the most talented developer I know has
              never had any formal programming education, but due to the value
              he brings to the table, it matters not one bit to the company he
              works for. And, now that he’s racked up some experience, his CV
              looks healthy anyway.
            </p>

            <p className="mt-8">
              However, when companies don’t know you, qualifications and a CV
              are important for getting your foot in the door. If you can get a
              job without them, great, but planning to get those boxes ticked is
              the most direct way to appeal to companies as a potential
              employee.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">3. Start learning.</h3>
            <p className="mt-8">Get online and start learning to program.</p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                YouTube is your first port-of-call. Search up simple videos that
                explain what programming is, and how the tech industry works.
                Find out a bit about what different types of programming there
                are, so you can get a flavour for what kind of programmer you
                might want to be.
              </li>
              <li>
                i.e. if you’re a more visual person, you might like to follow a
                Front End Developer path, using HTML, JavaScript and CSS to
                structure and style websites. Or, perhaps you’re a more logical
                and mathematical person, who might be better suited to Data
                Analytics or Back End Development. If you’re not sure yet, it
                doesn’t matter—start somewhere. Your skills will still be useful
                if you decide to switch later.
              </li>
            </ul>
            <p className="mt-8">
              If you don’t already have a{" "}
              <strong className="font-bold">ChatGPT</strong> or{" "}
              <strong className="font-bold">Grok</strong> account, now is the
              time to make one. It will be your new best friend on your
              programming journey. Ask it lots of questions, and ask it to
              adjust the simplicity of its answers to your current learning
              level.
            </p>
            <p className="mt-8">
              For example, if you’re looking into Front End Development, you
              will come across the term ‘React’ at some point, which is not
              exactly a coding language, and you’ll wonder, ‘what is React?’.
              ChatGPT can explain that to you in simple terms, better than most
              humans could.
            </p>
            <p className="mt-8">
              Once you’re ready to start programming yourself, I would consider
              starting with a service like{" "}
              <strong className="font-bold">Codecademy</strong>.
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                Codecademy is a website that teaches you how to write code, from
                the very basics. They have a free tier, and then you can pay a
                fairly reasonable fee for access to more learning modules.
              </li>
              <li>
                You can move around on Codecademy’s different courses and get a
                feel for different languages and types of programming if you
                like. But you’ll need to eventually pick a language to go deeper
                on.
              </li>
              <li>
                If you’re really not sure, you can ask ChatGPT for advice.
                Perhaps go with one of the most popular and employable coding
                languages that are also good for beginners. JavaScript or Java
                are fine options.
              </li>
            </ul>
            <p className="mt-8">
              After using Codecademy for a while, you will have some basic
              knowledge of how to write code. You can now go back to YouTube and
              search for some slightly more complex guided coding tutorials.
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                Traversy Media and Programming with Mosh are some well-known
                channels which produce such videos.
              </li>
              <li>
                At this point you’ll probably want to download an{" "}
                <strong className="font-bold">IDE</strong> (a computer app which
                developers use to write their code), so that you can program
                along with these tutorials, and build your very first apps.
              </li>
              <li>
                You’ll also want to create a{" "}
                <strong className="font-bold">GitHub</strong> account—kind of
                like the Instagram or Pinterest for developers, but instead of
                photos, people post their code (and also save their code
                history—so it has a practical purpose as well). Trust me, a
                GitHub account will be very useful for your goal of getting
                employed, and the sooner you have one, the better.
              </li>
            </ul>
            <br />
            <p className="mt-8">
              After doing tutorials on YouTube for a while, I recommend to get a
              paid subscription to{" "}
              <strong className="font-bold">PluralSight</strong> (or,
              alternatively, <strong className="font-bold">Udemy</strong>).
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                They offer the same thing as YouTube, but are dedicated
                platforms, with top-of-the-line tutorials. Coding along and
                thereby building a couple of small projects will be a big step
                forward. Those projects can later be shown in job interviews,
                and are concrete proof that you can make something—including to
                yourself. …which should not be taken lightly, as for many of us,
                those early days of trying to get our skills off the ground can
                be confusing and frustrating.
              </li>
              <li>
                Don’t worry if things still seem intimidating at this
                point—you’re making progress, even if it doesn’t feel like it.
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">4. Get accredited.</h3>
            <p className="mt-8">
              You will want to start this as soon as possible, preferably at the
              same time as you are doing the previous step.{" "}
            </p>
            <p className="mt-8">
              Find the most prestigious institution you can, that is also
              affordable for you—a university, a technical college, a boot camp,
              some kind of accredited online coding program. <em>Something.</em>{" "}
            </p>
            <p className="mt-8">
              All of the options I mentioned are useful for learning technical
              skills, yes, but I actually think that learning by yourself is
              very important, which is why I listed it separately, in a prior
              step. You cannot wait for other people to give you permission to
              learn, especially in a world with such abundant self-paced online
              resources. More than learning technical skills, the main uses of
              participation in accredited learning programs, I believe, are as
              follows:
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                Meeting other people who are on the same journey as you. You can
                compete, collaborate, and inspire each other on.
              </li>
              <li>
                You might be lucky and have a good mentor or teacher, even one
                that takes an interest in helping you.
              </li>
              <li>
                You might get opportunities to work with others in a structured
                way, which is very useful. Contrary to the stereotype of the
                lone, late-night programmer, software development is a highly
                collaborative profession.
              </li>
              <li>
                You will build stuff, which will further increase your
                confidence, as well as broaden your portfolio (to later show in
                job applications).
              </li>
              <li>
                You might get introductions to companies and institutions. Those
                could lead to internships, jobs opportunities, and experience.
              </li>
              <li>
                You will get <strong className="font-bold">something</strong> to
                put on your CV and LinkedIn.
              </li>
            </ul>
            <p className="mt-8">Which accreditation to pursue?</p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                If you have time and money, university is the one that is most
                certain to lead to employment—even, ironically, when in some
                cases universities actually teach you less than other
                accreditation options.
              </li>
              <li>
                Boot camps are very intense, but they don’t last long, and can
                also be very valuable for finding a job. Some boot camps have
                partnerships with companies, allowing graduates to get full-time
                jobs only months after first starting to program. I’ve
                personally known people who got their careers up-and-running
                very fast through participating in a boot camp.
              </li>
              <li>
                So, the answer: choose the accreditation program first which
                matches your budget of time and money, and then keep doing more
                accreditations until you find employment (which, remember, is
                your goal).
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">
              5. Make a CV and a LinkedIn page.
            </h3>
            <p className="mt-8">
              In order to get a job, you will need to apply to jobs. To apply to
              jobs, you will need a CV, and a LinkedIn page as well.
            </p>
            <p className="mt-8">
              I don’t want to give too much CV-building advice. There’s
              countless resources online for that. I would only add, keep it
              relatively short, and cut the irrelevant stuff that tech companies
              will be uninterested in. If, for example, you have a philosophy
              degree or worked as a hotel manager, you might include those as
              they suggest good qualities such as analytical thinking and
              responsibility. But, if you worked for a year as an Uber driver,
              consider excluding that. A CV is a cultivated self-presentation to
              employees. If you judge something to be unhelpful, you don’t have
              to include it.
            </p>
            <p className="mt-8">
              I have found almost all my software engineering jobs through
              LinkedIn. A LinkedIn profile is an avatar of your professional
              self, so take a bit of time to deck it out. Get a professional
              photo taken. Find and add any contacts you have on LinkedIn. Add
              any of your past skills and awards to your page, as well as your
              newfound coding skills. Use LinkedIn’s free month of Premium and
              do a few LinkedIn coding courses, which you can display on your
              profile. Having a good LinkedIn profile is underrated.
            </p>
            <p className="mt-8">
              The main challenge with your CV/LinkedIn is that it is needed for
              applying for jobs, but before you’ve had a (relevant) job,
              there&apos;s not much to include on them. This is where the
              accreditation comes in handy, as it is something to include.
              Furthermore, many accreditation programs will allow you the chance
              to build an app as part of a team, sometimes for an external
              company, which is kind of like an unpaid job or internship. It’s
              something to include on a CV, and it could be a leg-up into the
              professional world.
            </p>

            <p className="mt-8">
              With software, unpaid relevant work is never really unpaid: the
              payment is the advancements in terms of learning and experience
              you make, the positive reference from your manager, and the entry
              on your CV.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">
              6. Get applying. And don&apos;t stop.
            </h3>
            <p className="mt-8">
              There’s no real time that is too early to start applying to work
              at companies. Even if you have no experience, the worst thing that
              can happen when you apply to a company is that they say no. Work
              for free, if you have to. The thing you need is experience and new
              skills—as I mentioned, think of those as the payment. Trust me, it
              will be worth it.
            </p>
            <p className="mt-8">
              When applying for jobs, LinkedIn has been my first port-of-call.
              Stay open to other channels as well though, because there are a
              lot of them (and the usefulness of a given platform may depend on
              your location).
            </p>
            <p className="mt-8">
              Something you need to know when starting with job applications is
              that, even for more experienced developers, the vast majority of
              applications are rejected. So don’t fear rejection. It may hurt,
              but you will get used to it, because you will receive so many that
              eventually you will just get bored of it. Similarly, unless you
              have a rare talent for interviewing, get used to the experience of
              having a bad interview. It’s similar to a comedian bombing
              onstage—happens to all, including the very best. It’s not a big
              deal, just try to use it as a chance to learn how to do a tiny bit
              better in the next one.
            </p>
            <p className="mt-8">
              Keep going. Keep applying. Keep refining your approach, the way
              you present yourself, your CV and your LinkedIn. If you feel like
              things are just not coming together, aim lower. Approach a
              company, explain your situation, and offer to work for a while
              part-time for free. Remember, you are building skills and building
              a profile. One small win, one small project, one small
              internship—they all put you in a better position, slightly more
              likely to be able to progress. It’s hard work. But remember, this
              is the hard part. Be the person who can do hard things. If it was
              easy, everyone would do it.
            </p>
            <p className="mt-8">
              Following these steps, eventually, you{" "}
              <em className="underline">will</em> land a job as a software
              developer.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold">You did it – now what?</h3>
            <p className="mt-8">
              You may feel a bit out of your depth at first, but this is where
              your <em>real</em> education begins. In software engineering, as
              with many jobs, education is great, but the majority of skills are
              learned on the job. If you commit to this first job, knowing you
              will be far from perfect, but just keep showing up, over time you
              will watch yourself improving. You will gradually understand more,
              know what to do in more situations, participate in successful
              projects, create working software that companies actually use to
              run their business. Your managers will also watch you improving,
              slowly-but-surely.
            </p>
            <p className="mt-8">
              And, one day, suddenly, you will realise that: you{" "}
              <span className="underline">are</span> a software developer, and
              you have skills that make you valuable to people. That&apos;s when
              the real work begins ;)
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ArticlePage;
