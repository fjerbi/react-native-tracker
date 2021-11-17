import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Activity Name" />
      </Spacer>
      <Button title="Start Recording your activity" />
    </>
  );
};

export default TrackForm;
