import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Secțiunea Hero va veni aici */}
      <section className="pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-heading leading-none">
          Bad Day,<br />
          <span className="text-brand-red">Good Pizza.</span>
        </h1>
        <p className="mt-6 font-mono text-lg max-w-md">
          Artisanal dough, fresh ingredients, and a dash of rebellion.
        </p>
      </section>
    </main>
  );
}