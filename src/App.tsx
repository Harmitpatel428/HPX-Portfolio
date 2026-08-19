import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Systems } from "./components/Systems";
import { Journey } from "./components/Journey";
import { Customer360 } from "./components/Customer360";
import { Org } from "./components/Org";
import { DeepDives } from "./components/DeepDives";
import { Pricing } from "./components/Pricing";
import { Trust } from "./components/Trust";
import { Faq } from "./components/Faq";
import { Closing } from "./components/Closing";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#platform"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-ui focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Systems />
        <Journey />
        <Customer360 />
        <Org />
        <DeepDives />
        <Pricing />
        <Trust />
        <Faq />
      </main>
      <Closing />
    </div>
  );
}
