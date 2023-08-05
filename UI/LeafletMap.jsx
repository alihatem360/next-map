"use client";

// import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import customIcon from "../public/marker.svg";
import React, { useEffect } from "react";
// import L from "leaflet";
import { useMap } from "react-leaflet";
import { Tooltip } from "react-leaflet";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 30.16364677185123,
  lng: 31.10646601815153,
};

const customMarkerIcon = new L.Icon({
  iconUrl: "/marker.svg",
  iconSize: [200, 200], // size of the icon
  iconAnchor: [100, 90], // point of the icon which will correspond to marker's location
});

function LeafletMap() {
  const allProjects = [
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/1/200/300",
      location: { lat: 30.16364677185123, lng: 31.10646601815153 },
    },
    {
      id: 2,
      name: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/2/200/300",
      location: { lat: 30.20364, lng: 31.03837 },
    },
    {
      id: 3,
      name: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/3/200/300",
      location: { lat: 30.166813566730088, lng: 31.04416074326251 },
    },
    {
      id: 4,
      name: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/id/4/200/300",
      location: { lat: 30.191634683815966, lng: 31.13420858503763 },
    },
  ];

  return (
    <MapContainer
      style={containerStyle}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {allProjects.map((point) => (
        <Marker
          key={point.id}
          position={[point.location.lat, point.location.lng]}
          icon={customMarkerIcon}
        >
          <Tooltip permanent>
            <div>marker</div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LeafletMap;
