// components/CodingProfileCard.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  logoUrl: string;
  altText: string;
  title: string;
  stats: { label: string; value: string | number }[];
}

export function CodingProfileCard({ href, logoUrl, altText, title, stats }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex w-full items-center gap-4 rounded-md border p-4 transition-all hover:shadow-md"
    >
      <Image
        src={logoUrl}
        alt={altText}
        width={50}
        height={50}
        className="rounded-md object-contain"
      />
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-4 mt-1 text-sm text-muted-foreground">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <span className="font-medium text-foreground">{stat.value}</span> {stat.label}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
