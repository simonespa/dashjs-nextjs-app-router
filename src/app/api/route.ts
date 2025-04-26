export const revalidate = 30;

export async function GET() {
  const url = "https://rms.api.bbc.co.uk/v2/networks/playable";

  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#cache
    const response = await fetch(url, {
      cache: "default",
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const stations = await response.json();

    return Response.json(stations.data);
  } catch (error) {
    console.error(error);
    return Response.json([]);
  }
}
