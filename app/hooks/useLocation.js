import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};
