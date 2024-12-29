import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import HeroTailwind from "../components/HeroTailwind"
import ToolsLogos from "../components/ToolsLogos"

export default function Home() {
    return (
      <div className="">
        <HeroSection />

        
        {/* <HeroTailwind /> */}
        <ToolsLogos />
        
        <Projects />
        
      </div>
    )
  }
  