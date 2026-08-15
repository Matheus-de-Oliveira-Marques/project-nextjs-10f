import type { Contact as ContactType } from "@/data/resume";
import { Section } from "./Section";

type ContactProps = {
  contact: ContactType;
};

export function Contact({ contact }: ContactProps) {
  const links = [
    { label: "E-mail", href: `mailto:${contact.email}`, value: contact.email },
    contact.phone
      ? { label: "Telefone", href: `tel:${contact.phone}`, value: contact.phone }
      : null,
    contact.github
      ? { label: "GitHub", href: contact.github, value: contact.github }
      : null,
    contact.linkedin
      ? { label: "LinkedIn", href: contact.linkedin, value: contact.linkedin }
      : null,
  ].filter((link) => link !== null);

  return (
    <Section title="Contato">
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.label} className="flex gap-2">
            <span className="font-semibold text-zinc-600">{link.label}:</span>
            <a
              href={link.href}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
