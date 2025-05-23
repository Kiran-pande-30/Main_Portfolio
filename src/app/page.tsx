import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
<<<<<<< HEAD
=======
import { TravelCard } from "@/components/travel-page";
import { CodingProfileCard } from "@/components/profile-card";
>>>>>>> a23149b (Updated Portfolio)
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
<<<<<<< HEAD
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="text-sm text-muted-foreground">
                  Email : <a 
                    href={`mailto:${DATA.contact.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {DATA.contact.email}
                  </a>
                </span>
              </BlurFade>
=======
>>>>>>> a23149b (Updated Portfolio)
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
<<<<<<< HEAD
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
=======
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-black dark:text-white">
>>>>>>> a23149b (Updated Portfolio)
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
<<<<<<< HEAD
            <h2 className="text-xl font-bold">
              Open Source Cohort Participation
            </h2>
=======
            <h2 className="text-xl font-bold">Technical Experience</h2>
>>>>>>> a23149b (Updated Portfolio)
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
<<<<<<< HEAD
                description={work.description}
=======
                description={
                  Array.isArray(work.description)
                    ? work.description
                    : [work.description]
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="coding-profiles">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Coding Profiles</h2>
          </BlurFade>

          {DATA.codingProfiles.map((profile, id) => (
            <BlurFade
              key={profile.title}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <CodingProfileCard
                href={profile.href}
                logoUrl={profile.logoUrl}
                altText={profile.title}
                title={profile.title}
                stats={profile.stats}
>>>>>>> a23149b (Updated Portfolio)
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
<<<<<<< HEAD
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
=======

          {Object.entries(DATA.skills).map(
            ([category, skills], categoryIndex) => (
              <BlurFade
                key={category}
                delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1}
              >
                <div className="flex items-center flex-wrap gap-x-2 gap-y-2">
                  <Badge className="bg-white text-black border border-black">
                    {category}
                  </Badge>
                  {skills.map((skill, skillIndex) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </BlurFade>
            )
          )}
        </div>
      </section>

>>>>>>> a23149b (Updated Portfolio)
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like solving problems
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
<<<<<<< HEAD
                    description={project.description}
=======
                    description={
                      Array.isArray(project.description)
                        ? project.description
                        : [project.description]
                    }
>>>>>>> a23149b (Updated Portfolio)
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Responsibility Zone
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Roles that challenged me to grow and lead
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.positions.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
<<<<<<< HEAD
=======
      {/* <section id="travel">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Travel Journal
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Places I've Explored
                </h2>
              </div>
            </div>
          </BlurFade>

          <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
            {DATA.travel.map((place, id) => (
              <BlurFade
                key={place.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <TravelCard
                  key={place.title}
                  title={place.title}
                  description={place.description}
                  dates={place.dates}
                  tags={place.tags}
                  image={place.image}
                  video={place.video}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
>>>>>>> a23149b (Updated Portfolio)
    </main>
  );
}
