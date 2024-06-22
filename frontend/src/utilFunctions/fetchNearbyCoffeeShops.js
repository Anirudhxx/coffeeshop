const fetchNearbyCoffeeShops = async (lat, lng) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/near-me`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lat, lng }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coffee shops");
    }

    const data = await response.json();
    return data.nearbyCoffeeShops;
  } catch (error) {
    console.error("Error fetching coffee shops:", error);
    throw error;
  }
};

export default fetchNearbyCoffeeShops;
