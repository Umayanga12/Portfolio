import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const AboutMe = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="About Me..."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
