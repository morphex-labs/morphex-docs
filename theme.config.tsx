import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./public/images/logo.svg";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src={Logo} width={50} height={50} alt="Morphex Labs" />,
  project: {
    link: "https://github.com/morphex-labs",
  },
  chat: {
    link: "https://discord.com/invite/TR7zzfT2ru",
  },
  docsRepositoryBase: "https://github.com/morphex-labs/morphex-docs/",
  useNextSeoProps() {
    return {
      titleTemplate: "BMX - %s",
    };
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BMX Docs" />
      <meta property="og:description" content="BMX documentation" />
    </>
  ),
  footer: {
    text: (
      <span>
        GPL-3.0 {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/morphex-labs" target="_blank">
          BMX Labs
        </a>
      </span>
    ),
  },
};

export default config;
