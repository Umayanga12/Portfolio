"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MagicCard } from "../magicui/magic-card";

export function ProjectCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering until the component is mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row m-5">
      {["Magic", "Card", "Card"].map((text, index) => (
        <MagicCard
          key={index}
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {text}
        </MagicCard>
      ))}
    </div>
  );
}
