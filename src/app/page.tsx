import AudioPlayer from "@/components/audio-player";
import ProgrammeMetadata from "@/components/programme-metadata";
import RadioStationsList from "@/components/radio-stations-list";

export default function Home() {
  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <ProgrammeMetadata />

        <AudioPlayer />

        <RadioStationsList />
      </div>
    </div>
  );
}
