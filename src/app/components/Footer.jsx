"use client";

import React from "react";
import { Icon } from "@iconify/react";

const socialLinks = [
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/mkotbi/",
    label: "LinkedIn",
  },
  {
    icon: "mdi:github",
    link: "https://github.com/shadowofleaf96",
    label: "GitHub",
  },
  {
    icon: "mdi:youtube",
    link: "https://www.youtube.com/channel/UC9_eEbHsL_1TL1O67Fwe7Yw",
    label: "YouTube",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass p-8 rounded-[2.5rem] flex flex-col items-center gap-8 border-foreground/5">
          {/* Logo/Brand */}

          {/* Divider */}

          {/* Copyright/Info */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-foreground/30 text-sm font-medium">
            <p>© 2026 MK. All rights reserved.</p>
            <div className="w-full h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-foreground/50 hover:text-primary hover:shadow-neon transition-all hover:-translate-y-1"
                >
                  <Icon icon={social.icon} width="24" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
