import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* TEXT */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello This <br />
              is
              <span className="text-accent font-bold"> Beellionaire</span>
            </h1>
            <p className="max-w-[500px] max-h-[250px] overflow-y-auto pr-2 mb-9 text-white/80 scroll-smooth custom-scrollbar text-justify ">
              I&apos; am a Web Developer based in Solo, specializing in{" "}
              <span className="text-[#eaaa15] font-bold">
                modern web applications, UI/UX design, and responsive front-end
                development.
              </span>{" "}
              With a strong passion for technology and problem-solving, I build
              websites that are not only visually appealing but also fast,
              secure, and user-friendly. I have worked on various projects
              ranging from personal portfolios to business platforms, helping
              clients transform their ideas into functional digital solutions.
              My expertise covers both front-end and back-end development, with
              a focus on clean code, scalability, and great user experience. I
              am always eager to learn new technologies, explore creative
              approaches, and deliver web solutions that make a real impact.
            </p>

            {/* BUTTON SOCIALS */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
