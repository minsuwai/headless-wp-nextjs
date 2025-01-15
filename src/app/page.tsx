import { Hero } from "../components/hero";
import { SocialIcons } from "@/components/social-icons";
import { Categories } from "@/components/categories";
import { getCategories } from "@/lib/queries";
export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
    </div>
  );
}
