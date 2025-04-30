import { useTransform, useMotionTemplate } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { SiSpacex } from "react-icons/si";
import { motion, useScroll } from "framer-motion";
import { div } from "framer-motion/client";

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
      <ParallaxImages />


      
    <div className="absolute bottom-0 left-0 right-0 
    h-96 bg-gradient-to-b from-zinc-950/0
     to-bg-zinc-950"/>
    
    
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);

  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        backgroundSize,
        clipPath,

        backgroundImage: "url('../src/assets/space.jpg')",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};



const ParallaxImages =() =>{
    return ( 

<div className=" relative z-10 mx-auto  max-w-5xl px-4
 pt[200px]">
    
    
    
    <ParallaxImg
    src="../src/assets/rocket.jpg"
    alt="an example of Space Launch"
    start={-200}
    end={200}
    className="w-1/3"/>


<ParallaxImg
    src="../src/assets/astronaunt.jpg"
    alt="an example of Space Launch"
    start={-200}
    end={200}
    className="w-1/3"/>
    
    
    
    
    
    </div>



    )

}


const ParallaxImg = ({
    className, 
    alt, 
    src,
    start, 
    end,
}: {
    className: string;
    alt:string;

    src:string;
    start: number;
    end:number;

}) => {
    return <motion.img src={src} alt={alt} className=
{className} />
};