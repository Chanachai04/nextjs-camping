"use client";
import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

<<<<<<< HEAD
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [20, 30],
});

type LatLng = [number, number];

function LocationMarker({
  position,
  setPosition,
}: {
  position: LatLng | null;
  setPosition: (pos: LatLng | null) => void;
}) {
  useMapEvents({
    click(e) {
      const newPos: LatLng = [e.latlng.lat, e.latlng.lng];
      setPosition(newPos);
    },
  });

  return position ? (
    <Marker position={position} icon={markerIcon}>
      <Popup>Selected location</Popup>
    </Marker>
  ) : null;
}

const MapLandmark = ({ location }: { location?: { lat: number; lng: number } }) => {
  const defaultLocation: LatLng = [13.8, 100.5];
  const initialLocation: LatLng = location ? [location.lat, location.lng] : defaultLocation;

  const [position, setPosition] = useState<LatLng | null>(location ? [location.lat, location.lng] : null);

  return (
    <>
      <h1 className="mt-4 font-semibold">Where is your landmark?</h1>
      <input name="lat" type="hidden" value={position?.[0] ?? ""} />
      <input name="lng" type="hidden" value={position?.[1] ?? ""} />

      <MapContainer className="h-[50vh] rounded-lg z-0 relative mb-2" center={initialLocation} zoom={7} scrollWheelZoom>
        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer checked name="Layout 1">
=======
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});
type LatLng = [number, number];
type LoactionMarkerProps = {
  position: LatLng | null;
  setPosition: (position: LatLng | null) => void;
};

function LocationMarker({ position, setPosition }: LoactionMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: LatLng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapLandmark = ({ location }: { location?: { lat: number; lng: number } }) => {
  const defaultLocation: [number, number] = [13.8, 100.5];
  const [position, setPosition] = useState(null);

  return (
    <>
      <h1 className="mt-4 font-semibold">Where are your landmark?</h1>
      <input name="lat" type="hidden" value={position ? position[0] : ""} />
      <input name="lng" type="hidden" value={position ? position[1] : ""} />
      <MapContainer
        className="h-[50vh] rounded-lg z-0 relative mb-2"
        center={location || defaultLocation}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Marker position={location || defaultLocation} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer name="Layout 1" checked>
>>>>>>> 4b46c06b8243ce43c8371041561d3eeffa1dcf85
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
<<<<<<< HEAD

          <LayersControl.BaseLayer name="Layout 2">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Layout 3">
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
=======
          <LayersControl.BaseLayer name="Layout 2">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Layout 3">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
>>>>>>> 4b46c06b8243ce43c8371041561d3eeffa1dcf85
              url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 4b46c06b8243ce43c8371041561d3eeffa1dcf85
export default MapLandmark;
