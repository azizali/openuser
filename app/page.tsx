import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        {/* <Problem /> */}
        {/* <FeaturesAccordion /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
