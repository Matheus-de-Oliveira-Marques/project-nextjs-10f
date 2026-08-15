import { resume } from "@/data/resume";

export default function Home() {
  const { profile } = resume;

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
      <p className="text-lg text-zinc-600">{profile.role}</p>
      <p className="max-w-xl text-sm text-zinc-500">{profile.summary}</p>
    </main>
  );
}
