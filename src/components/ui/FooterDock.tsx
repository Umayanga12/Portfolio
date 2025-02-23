"use client";

import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function FooterDock() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <FaGithub />
        </DockIcon>
        <DockIcon>
          <FaEnvelope />
        </DockIcon>
        <DockIcon>
          <FaLinkedin />
        </DockIcon>
      </Dock>
    </div>
  );
}
