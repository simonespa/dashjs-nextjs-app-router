"use client";

import Image from "next/image";
import { useSignals } from "@preact/signals-react/runtime";
import { serviceId, programmeImageUrl } from "@/lib/signals";

export default function ProgrammeImage() {
  useSignals();

  return (
    <Image
      priority={true}
      width={320}
      height={180}
      src={programmeImageUrl.value}
      alt={`${serviceId.value} logo`}
      className="w-64 h-64 mx-auto rounded-full mb-4 shadow-lg shadow-teal-50"
    />
  );
}
