import React from "react";
import styles from "./information.module.css";
import GoogleMapReact from "google-map-react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrMap } from "react-icons/gr";

const Information = (props) => {
  const options = {
    center: {
      lat: 37.56055429739983,
      lng: 126.93943304788996,
    },
    zoom: 17,
  };
  const renderMarkers = (map, maps) => {
    new maps.Marker({
      position: options.center,
      map,
      title: "연세로 50-1 임상의학연구센터",
    });
  };
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>Information</h1>
        </div>
      </header>
      <section className={styles.location}>
        <div className={styles.mapComment}>
          <div className={styles.mapCommentInner}>
            <h3>
              <HiOutlineLocationMarker />
              address
            </h3>
            <span>연세로 50-1 임상의학연구센터</span>
            <h3>
              <HiOutlineMail />
              email
            </h3>
            <span>abc@gamil.net</span>
            <h3>
              <AiFillPhone /> Phone number
            </h3>
            <span>010-1234-5678</span>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.mapBox}>
          <h2>
            <GrMap />
            Map
          </h2>
          <div className={styles.map}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAL1tZA1aTdiabZs_1cCdwnt4dxGlzFh90",
              }}
              defaultCenter={options.center}
              defaultZoom={options.zoom}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            />
          </div>
        </div>
      </section>

      <section className={styles.information}></section>
    </main>
  );
};

export default Information;
