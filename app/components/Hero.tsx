import type { Contact, Profile } from "@/data/resume";

type HeroProps = {
  profile: Profile;
  contact: Contact;
};

export function Hero({ profile, contact }: HeroProps) {
  return (
    <header className="flex flex-col gap-3 border-b border-zinc-200 pb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-xl text-zinc-600">{profile.role}</p>
      </div>
      <p className="text-sm text-zinc-500">{profile.location}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 hover:underline"
        >
          {contact.email}
        </a>
        {contact.website ? (
          <a
            href={contact.website}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.website}
          </a>
        ) : null}
      </div>
    </header>
  );
}
