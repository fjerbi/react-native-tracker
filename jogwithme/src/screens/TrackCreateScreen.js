import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import * as Location from "expo-location";
import { watchPositionAsync, Accuracy } from "expo-location";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await Location.requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
         addLocation(location)
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text> Please Enable Location Services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
