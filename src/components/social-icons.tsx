import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: "X",
    url: "https://www.linkedin.com/in/minsuwai/",
    image: "x.svg",
    alt: "Follow me on X",
  },
  {
    name: "GitHub",
    url: "https://www.linkedin.com/in/minsuwai/",
    image: "github.svg",
    alt: "Follow me on GitHub",
  },
];

export function SocialIcons() {
  return (
    <div className="mb-4 flex justify-between">
      <h2 className="text-lg">Social Media</h2>
      <div className="flex gap-2">
        {socialIcons.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${item.image}`}
              alt={item.alt}
              width={20}
              height={20}
              loading="eager"
            ></Image>
          </Link>
        ))}
      </div>
    </div>
  );
}
