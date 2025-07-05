import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/navbar";

export default function Home() {
  console.log("rendered");
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
