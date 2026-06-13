import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/Fly.png"
        width={200}
        height={200}
        alt="Picture of the author"
        className="rounded-full"
      />
      <div className="flex-col ml-10">
        <h1 className="text-7xl font-bold">Marc Foix Velázquez</h1>
        <p className="text-4xl">Data Analyst and Web Developer</p>
      </div>
    </div>
  );
}
