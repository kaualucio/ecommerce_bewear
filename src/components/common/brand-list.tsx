"use client";
import Image from "next/image";
import React from "react";

import AdidasLogo from "/public/logo-adidas.svg";
import ConverseLogo from "/public/logo-converse.svg";
import NewBalanceLogo from "/public/logo-nb.svg";
import NikeLogo from "/public/logo-nike.svg";
import PoloLogo from "/public/logo-polo.svg";
import PumaLogo from "/public/logo-puma.svg";
import ZaraLogo from "/public/logo-zara.svg";

const BRANDS = [
  {
    image: NikeLogo,
    label: "Nike",
  },
  {
    image: AdidasLogo,
    label: "Adidas",
  },
  {
    image: PumaLogo,
    label: "Puma",
  },
  {
    image: NewBalanceLogo,
    label: "New Balance",
  },
  {
    image: ConverseLogo,
    label: "Converse",
  },
  {
    image: PoloLogo,
    label: "Polo",
  },
  {
    image: ZaraLogo,
    label: "Zara",
  },
];

export const BrandList = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {BRANDS.map((brand) => (
          <div
            key={brand.label}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#F1F1F1]">
              <Image
                src={brand.image}
                alt={brand.label}
                width={32}
                height={32}
              />
            </div>
            <p className="text-center text-sm font-medium whitespace-nowrap">
              {brand.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
