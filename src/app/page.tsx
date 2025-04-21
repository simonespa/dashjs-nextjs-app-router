import AudioPlayer from "@/components/audio-player";
import ProgrammeMetadata from "@/components/programme-metadata";
import RadioStationsList from "@/components/radio-stations-list.client";
import RadioStationsListFallback from "@/components/radio-stations-list-fallback.client";
import { getRadioStations } from "@/lib/get-radio-stations";
import { Suspense } from "react";

export default async function Home() {
  const radioStations = getRadioStations();

  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <ProgrammeMetadata />

        <AudioPlayer />

        <Suspense fallback={<RadioStationsListFallback />}>
          <RadioStationsList radioStations={radioStations} />
        </Suspense>
      </div>
    </div>
  );
}
