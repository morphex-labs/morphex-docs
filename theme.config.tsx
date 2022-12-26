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
  footer: {
    text: "Morphex Labs Docs",
  },
};

export default config;
