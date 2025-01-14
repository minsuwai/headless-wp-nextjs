import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center mt-8">
      <p>
        &copy; 2025 minsuwai &middot; Build with NextJs v15 &middot;{" "}
        <Link href={"/sitemap.xml"}>Sitemap</Link>
      </p>
    </footer>
  );
}
