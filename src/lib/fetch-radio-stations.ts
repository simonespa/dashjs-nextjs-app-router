export async function fetchRadioStations() {
  const url = "https://rms.api.bbc.co.uk/v2/networks/playable";

  const radioStations = [];

  try {
    // https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#cache
    const response = await fetch(url, {
      cache: "default",
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const stations = await response.json();

    for (const station of stations.data) {
      radioStations.push({
        sid: station.id,
        name: station.network.short_title,
        logoUrl: station.network.logo_url.replace(
          "{type}_{size}.{format}",
          "colour_default.svg",
        ),
        description: station.titles.primary,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return radioStations;
}
