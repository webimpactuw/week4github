import Image from "next/image";
import names from "./names";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold text-center mb-12">
        Web Impact Directory!
      </h1>

      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        {names.map((name) => (
          <div className="text-center">{name}</div>
        ))}
      </div>
    </main>
  );
}
