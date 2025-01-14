import Image from "next/image";

export function Hero() {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Hi, I am Minsuwai</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi quae,
        veniam molestias, nostrum similique autem blanditiis iste nesciunt
        expedita delectus? Cumque ut in non unde dolores assumenda, sit dicta,
        tenetur ad at alias quae.
      </p>

      <Image
        src={"/hero.png"}
        width={700}
        height={192}
        quality={70}
        placeholder="blur"
        blurDataURL="/hero-placeholder.png"
        loading="eager"
        alt="Hero Image"
      ></Image>
    </div>
  );
}
