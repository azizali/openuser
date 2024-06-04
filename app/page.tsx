import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfileScroll from "@/components/ProfileScroll";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <ProfileScroll />
        {/* <Problem /> */}
        {/* <FeaturesAccordion /> */}
        {/* <Pricing /> */}
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
