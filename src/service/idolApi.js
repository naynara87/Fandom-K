const BASE_URL = "https://fandom-k-api.vercel.app/8-3";

export default async function getIdolChart(gender = "female", pageSize = 10) {
  const url = `${BASE_URL}/charts/gender?gender=${gender}&pageSize=${pageSize}`;
  try {
    const response = await fetch(url);

    if (!response || !response.ok) {
      return [];
    }
    const result = await response.json();
    const data = result.idols;
    console.log(data);
    return data;
  } catch (error) {
    return [];
  }
}
