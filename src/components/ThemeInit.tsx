"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeInit() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark"); // Ensures the theme is always dark initially
  }, []);

  return null;
}
