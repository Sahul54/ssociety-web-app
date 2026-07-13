import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import WhySocietyHub from "@/components/home/WhySocietyHub";
import Testimonials from "@/components/home/Testimonials";
import DownloadApp from "@/components/home/DownloadApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Categories />
      <HowItWorks />
      <WhySocietyHub />
      <Testimonials />
      <DownloadApp />
    </>
  );
}