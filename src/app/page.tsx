import Image from "next/image";
import { fetchRadioStations } from "@/lib/fetch-radio-stations";
import RadioStationsListContainer from "@/components/radio-stations-list-container";
import ProgrammeImage from "@/components/programme-image";
import ProgrammeMetadata from "@/components/programme-metadata";
import AudioPlayer from "@/components/audio-player";

export { metadata } from "@/app/metadata";

export default async function Home() {
  const radioStations = await fetchRadioStations();

  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <ProgrammeImage />

        <ProgrammeMetadata />

        <AudioPlayer />

        <div className="flex flex-col p-5">
          <div className="border-b pb-1 flex justify-between items-center mb-2">
            <span className=" text-base font-semibold uppercase text-gray-700">
              Radio Stations
            </span>
          </div>

          <div className="h-54 overflow-y-auto">
            {radioStations.map((radioStation) => {
              return (
                <RadioStationsListContainer
                  key={radioStation.sid}
                  sid={radioStation.sid}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL="/globe.svg"
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
                </RadioStationsListContainer>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
