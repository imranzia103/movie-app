
import { FiArrowDownRight } from "react-icons/fi";
import { SiSpacex } from "react-icons/si";

export const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950">
      <Nav />
      <Hero />
    </div>
  );
};
const Nav = () => {
  return (
    <nav
      className=" fixed left-0 right-0 top-0 z-50 
        flex items-centern justify-between px-6 py-3text-white"
    >
      <SiSpacex className=" text-3xl " />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className=" flex items-center gap-1 text-xs
text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowDownRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
    </div>
  );
};

const CenterImage = () => {
  return (
    <div
      className="sticky top-0 h-screen w-full"
      style={{
        backgroundImage:
        "url('../src/assets/space.jpg')",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
