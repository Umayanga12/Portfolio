"use client"; // Needed for client-side interactivity
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject"; // Ensure the path is correct
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <RecentProject />

        {/* Uncomment these if needed */}
        {/* <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
