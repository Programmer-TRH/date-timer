export async function getCountries() {
  const response = await fetch(
    "https://api-dev.autoby24.ch/api/core/country?limit=all",
  );
  const data = await response.json();
  return data;
}

export async function getStates(countryName: string) {
  if (!countryName) return { results: [] };
  const response = await fetch(
    `https://api-dev.autoby24.ch/api/core/state?country=${countryName}&limit=all`,
  );
  const data = await response.json();
  return data;
}

export async function getCities(stateName: string) {
  if (!stateName) return { results: [] };
  const response = await fetch(
    `https://api-dev.autoby24.ch/api/core/city?state=${stateName}&limit=all`,
  );
  const data = await response.json();
  return data;
}
