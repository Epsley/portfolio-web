import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-12 sm:px-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:gap-10 md:text-left">
        <Image
          src="/Fly.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="h-36 w-36 shrink-0 rounded-full object-cover sm:h-44 sm:w-44 md:h-50 md:w-50"
          priority
        />
        <div className="min-w-0">
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Marc Foix Velázquez
          </h1>
          <p className="mt-3 text-xl leading-snug font-extralight sm:text-2xl md:text-3xl lg:text-4xl">
            Data Analyst and Web Developer
          </p>
        </div>
      </div>
    </main>
  );
}
