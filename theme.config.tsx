import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./public/images/logo.svg";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src={Logo} width={50} height={50} alt="Morphex Labs" />,
  project: {
    link: "https://github.com/morphex-labs/morphex",
  },
  chat: {
    link: "https://discord.com/invite/TR7zzfT2ru",
  },
  docsRepositoryBase: "https://github.com/morphex-labs/morphex-docs/",
  useNextSeoProps() {
    return {
      titleTemplate: "Morphex - %s",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Morphex Docs" />
      <meta
        property="og:description"
        content="Morphex - Decentralized Perpetual Exchange documentation"
      />
    </>
  ),
  banner: {
    key: "1.0-release",
    text: (
      <a href="https://morphex-labs.vercel.app/" target="_blank">
        🎉 Morphex v1.0.0 is released. Visit site →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        GPL-3.0 {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/morphex-labs/morphex" target="_blank">
          Morphex Labs
        </a>
      </span>
    ),
  },
};

export default config;
