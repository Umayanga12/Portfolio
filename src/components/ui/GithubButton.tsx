import { FaGithub } from "react-icons/fa";
import { RainbowButton } from "../magicui/rainbow-button";
import Link from "next/link";

export function GitHubButton() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Link href="https://github.com/Umayanga12">
        <RainbowButton>
          <FaGithub className="text-xl" />
        </RainbowButton>
      </Link>
    </div>
  );
}
