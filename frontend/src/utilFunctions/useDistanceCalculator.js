import { useEffect, useState } from "react";

const useDistanceCalculator = (lat1, lon1, lat2, lon2) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const calculateDistance = () => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distanceInKm = R * c;
      const distanceInMiles = (distanceInKm * 0.621371).toFixed(2);
      return distanceInMiles;
    };

    if (lat1 && lon1 && lat2 && lon2) {
      const calculatedDistance = calculateDistance();
      setDistance(calculatedDistance);
    } else {
      setDistance(null);
    }
  }, [lat1, lon1, lat2, lon2]);

  return distance;
};

export default useDistanceCalculator;
