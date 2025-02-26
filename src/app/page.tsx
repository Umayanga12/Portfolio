"use client"; // Needed for client-side interactivity
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject"; // Ensure the path is correct
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <ErrorBoundary>
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Experience />
          <RecentProject />
          <Footer />
        </div>
      </ErrorBoundary>
    </main>
  );
};

export default Home;
