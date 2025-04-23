import Image from "next/image";

const IMAGE_URL = "https://ichef.bbci.co.uk/images/ic/160x160/{ID}.jpg.webp";

export default function ProgrammeMetadata({
  id,
  title,
  description,
}: Partial<{
  id: string;
  title: string;
  description: string;
}>) {
  const image = id ? (
    <Image
      width={320}
      height={180}
      src={IMAGE_URL.replace("{ID}", id)}
      alt={`${title} - ${description}`}
      className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
    />
  ) : (
    <Image
      priority={true}
      width={320}
      height={180}
      src="/globe.svg"
      alt={"Select a radio station"}
      className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
    />
  );

  const metadata =
    id && title && description ? (
      <>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </>
    ) : null;

  return (
    <>
      {image}
      {metadata}
    </>
  );
}
