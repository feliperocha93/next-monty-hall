import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../model/DoorModel";

function Home() {
  const [d1, setD1] = useState(new DoorModel(1));

  return (
    <div style={{display: 'flex'}}>
      <Door door={d1} />
    </div>
  );
}

export default Home;
