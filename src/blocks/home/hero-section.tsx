"use client"; 

import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 sm:p-12">
      <GlareCard>
        <Image
          src="/images/hero/1.jpg"
          alt="Hero"
          width={320}
          height={395}
          className="h-full w-full object-cover"
          priority
        />
      </GlareCard>
    </div>
  );
}


