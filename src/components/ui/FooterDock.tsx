"use client";

import React, { useState } from "react";
import { Dock, DockIcon } from "../magicui/dock";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function FooterDock() {
  const [notification, setNotification] = useState("");

  const handleCopyEmail = () => {
    const email = "imanthaumayanga512@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setNotification("Email copied to clipboard!");
      setTimeout(() => {
        setNotification(""); // Clear notification after 2 seconds
      }, 2000);
    });
  };

  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <Link href="https://github.com/Umayanga12">
            <FaGithub />
          </Link>
        </DockIcon>
        <DockIcon onClick={handleCopyEmail}>
          <FaEnvelope />
        </DockIcon>
        <DockIcon>
          <Link href="https://www.linkedin.com/in/umayanga-athapaththu-9564a524a/">
            <FaLinkedin />
          </Link>
        </DockIcon>
      </Dock>

      {/* Display notification when email is copied */}
      {notification && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg">
          {notification}
        </div>
      )}
    </div>
  );
}
