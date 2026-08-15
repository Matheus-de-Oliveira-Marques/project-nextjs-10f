import { resume } from "@/data/resume";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";

export default function Home() {
  const { profile, contact, experiences, education, skills, projects } = resume;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
      <Hero profile={profile} contact={contact} />
      <About profile={profile} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </main>
  );
}
