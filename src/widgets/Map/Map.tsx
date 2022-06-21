import { FC, RefObject, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface IMap {
  lat?: number;
  lon?: number;
}

const Map: FC<IMap> = ({ lat = 44.787, lon = 20.457 }) => {
  const mapRef = useRef<L.Map>() as RefObject<L.Map>;
  const handleFlyTo = () => {
    mapRef?.current?.flyTo({ lat: lat, lng: lon }, 16);
  };
  useEffect(() => {
    handleFlyTo();
  }, [lat, lon]);

  return (
    <div className="bg-darkGray h-[65%]">
      <MapContainer ref={mapRef} center={[lat, lon]} zoom={16}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]} />
      </MapContainer>
    </div>
  );
};

export default Map;
