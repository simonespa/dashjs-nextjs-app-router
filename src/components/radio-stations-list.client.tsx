'use client'

import Image from "next/image";
import { use } from 'react';

interface Props {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
}

export default function RadioStationsList({
  radioStations,
}: {
  radioStations: Promise<Props[]>
}) {
  const stations = use(radioStations);

  return (
    <div className="flex flex-col p-5">
      <div className="border-b pb-1 flex justify-between items-center mb-2">
        <span className=" text-base font-semibold uppercase text-gray-700">
          Radio Stations
        </span>
      </div>

      <div className="h-54 overflow-y-auto">
        {stations.map((radioStation) => {
          return (
            <div
              key={radioStation.id}
              data-id={radioStation.id}
              className="flex border-b py-3 cursor-pointer hover:shadow-md px-2 "
            >
              <Image
                width={40}
                height={40}
                alt={radioStation.name}
                src={radioStation.logoUrl}
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div className="flex flex-col px-2 w-full">
                <span className="text-sm text-red-500 capitalize font-semibold pt-1">
                  {radioStation.name}
                </span>
                <span className="text-xs text-gray-500 uppercase font-medium ">
                  {radioStation.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
