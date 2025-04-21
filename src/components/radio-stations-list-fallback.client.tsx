"use client";

import RadioStationsListItemFallback from "@/components/radio-stations-list-item-fallback.client";

export default function RadioStationsListFallback() {
  return (
    <div className="flex flex-col p-5">
      <div className="border-b pb-1 flex justify-between items-center mb-2">
        <span className=" text-base font-semibold uppercase text-gray-700">
          Radio Stations
        </span>
      </div>

      <div className="h-54 overflow-y-auto">
        <RadioStationsListItemFallback />
        <RadioStationsListItemFallback />
        <RadioStationsListItemFallback />
      </div>
    </div>
  );
}
