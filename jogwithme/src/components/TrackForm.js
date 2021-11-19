import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);


  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Activity Name"
        />
      </Spacer>
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button
          title="Start Recording your activity"
          onPress={startRecording}
        />
      )}
    </>
  );
};

export default TrackForm;
