import { FaGithub } from "react-icons/fa";
import { RainbowButton } from "../magicui/rainbow-button";

const ButtonText = () => {
  return (
    <div className="flex flex-col items-center">
      <FaGithub />
      {/* <b>GitHub</b> */}
    </div>
  );
};


export function GitHubButton() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <RainbowButton onClick={() => (window.location.href = "https://github.com/Umayanga12")}>
        <ButtonText />
      </RainbowButton>
    </div>
  );
}

