import AnimationSection from "./animation-section";
import Footer from "./footer";
import Hero from "./hero";

export default function Page() {
  return (
    <main className="relative w-full">
      <Hero />
      <AnimationSection />
      <Footer />
    </main>
  );
}
