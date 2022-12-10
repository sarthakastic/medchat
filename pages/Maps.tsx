import React, { useCallback, useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Maps = () => {
  const [map, setMap] = React.useState(null);
  const [longitude, setLongitude] = useState<number>(15);
  const [latitude, setLatitude] = useState<number>(0);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const containerStyle = {
    width: "90vw",
    height: "90vh",
  };

  //   const onLoad = React.useCallback(function callback(map) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map)
  //   }, [])
  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  //   }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => (
          setLatitude(position.coords.latitude),
          setLongitude(position.coords.longitude)
        )
      );
    }
  }, []);
  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <>
      <div>{}</div>
      <div className="flex z-10 justify-center items-center h-[calc(100vh-64px)] ">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>
            <p>Can't Load Map</p>
            <div
              className="mt-2 hover:cursor-pointer rounded-2xl bg-primary text-white border-2 w-full flex items-center justify-center "
              onClick={() => window.location.reload()}
            >
              Reload
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Maps;
