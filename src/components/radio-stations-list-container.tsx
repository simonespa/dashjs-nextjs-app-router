"use client";

import { useSignals } from "@preact/signals-react/runtime";
import {
  serviceId,
  programmeImageUrl,
  programmeTitle,
  programmeDescription,
  programmeDescription2,
} from "@/lib/signals";

export default function RadioStationsListContainer({
  sid,
  children,
}: {
  sid: string;
  children: React.ReactNode;
}) {
  // This hook makes the component reactive to signals.
  // See https://github.com/preactjs/signals/tree/main/packages/react#usesignals-hook
  useSignals();

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    const sid = e.currentTarget.dataset.sid;

    if (sid) {
      serviceId.value = sid;
    }

    fetch("/api", {
      cache: "default",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }

        return response.json();
      })
      .then((data) => {
        const station = data.find(
          (station: { id: string }) => station.id === sid,
        );

        if (station) {
          programmeImageUrl.value = `${station.image_url.replace(
            "{recipe}",
            "160x160",
          )}.webp`;
          programmeTitle.value = station.titles.primary;
          programmeDescription.value = station.synopses.short;
          programmeDescription2.value = `${station.titles.secondary} (${station.progress.label})`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div
      onClick={handleClick}
      data-sid={sid}
      className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 "
    >
      {children}
    </div>
  );
}
