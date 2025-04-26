"use client";

import { useSignals } from "@preact/signals-react/runtime";
import {
  programmeTitle,
  programmeDescription,
  programmeDescription2,
} from "@/lib/signals";

export default function ProgrammeMetadata() {
  useSignals();

  return (
    <>
      <h2 className="text-xl font-semibold text-center">{programmeTitle}</h2>
      <p className="text-gray-600 text-sm text-center">
        {programmeDescription}
      </p>
      <p className="text-gray-600 text-sm text-center">
        {programmeDescription2}
      </p>
    </>
  );
}
