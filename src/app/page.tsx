import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import About from "./pages/about";
import Hero from "./pages/hero";
import Service from "./pages/service";
import Team from "./pages/team";

export default function Home() {
  return (
    <div className="min-w-full h-screen">
      <AppHeader/>
      <Hero/>
      <Service/>
      <Team/>
      <About/>
      <AppFooter/>
    </div>

  )
}
