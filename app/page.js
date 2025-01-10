//--------------------------------------------------------------------------
// NO SPACE BETWEEN PAGES

// import Image from "next/image"; // For if I want my headshot on the hero
import HeroSection from "./components/HeroSection";
import { Navbar} from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import ConnectSection from "./components/ConnectSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
      <header className="w-full fixed z-10">
          <Navbar />
        </header>
      <div>
        <HeroSection />
        <AboutSection />
      </div>
      <div className="mt-16">
        <ProjectSection />
      </div>
      <div className="mt-16">
        <Skills />
      </div>
      <div className="mt-16">
        <ConnectSection />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}

//--------------------------------------------------------------------------
// NO SPACE BETWEEN PAGES

// // import Image from "next/image";
// import HeroSection from "./components/HeroSection";
// import { Navbar} from "./components/Navbar";
// import { AboutSection } from "./components/AboutSection";
// import ProjectSection from "./components/ProjectSection";
// import Skills from "./components/Skills";

// export default function Home() {
//   return (
//     // Original: bg-h-black
//     // Gradient: bg-gradient-to-b from-h-black to-[#2A2A2A]
//     <main className="flex min-h-screen flex-col bg-gradient-to-b from-h-black to-d-grey-bg">
//       <header>
//         <Navbar />
//       </header>
//       <div>
//         <HeroSection />
//         <AboutSection />
//         <ProjectSection />
//         <Skills />
//       </div>
//       <footer>

//       </footer>
//     </main>
//   );
// }