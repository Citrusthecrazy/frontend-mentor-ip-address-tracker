import { useState } from "react";
import { ICoords } from "./types";
import Header from "./widgets/Header/Header";
import Map from "./widgets/Map/Map";

function App() {
  const [coords, setCoords] = useState<ICoords | null>();
  return (
    <div className="h-[100vh] font-rubik">
      <Header setCoords={setCoords} />
      <Map lat={coords?.lat} lon={coords?.lon} />
    </div>
  );
}

export default App;
