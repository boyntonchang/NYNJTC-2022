import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import MapContainer from "./MapContainer";

Modal.setAppElement('#root')
const TrailDetail = ({ trails, saveTrails }) => {
  let { name } = useParams();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const newTrail = trails.find((trail) => trail.Title === name);

  return (
    <>
      <h3 className="main-label">
        {newTrail.Title}
        <button className="btn pill" onClick={saveTrails}>
          Save for my trails
        </button>
      </h3>
      <div className="geo-info">
        <div className="info-area">
          <label>Region</label>
          <h3>{newTrail.Region}</h3>
        </div>
        <div className="info-area">
          <label>Park</label>
          <h3>{newTrail.Park}</h3>
        </div>
        <div className="info-area">
          <label>State</label>
          <h3>{newTrail.State}</h3>
        </div>
      </div>
      <div className="geo-info">
        <div className="info-area">
          <label>Length</label>
          <h3>{newTrail.Length}</h3>
        </div>
        <div className="info-area">
          <label>Time</label>
          <h3>{newTrail.TIME} hours</h3>
        </div>
        <div className="info-area">
          <label>Difficulty</label>
          <h3>{newTrail.Difficulty}</h3>
        </div>
      </div>
      <div className="overview-label info-area">
        {newTrail.Overview}
        <div style={{ textAlign: "right", marginTop: "1rem" }}>
          <button
            className="btn btn-primary"
            onClick={() => setModalIsOpen(true)}
          >
            Click here to see more detail of this trail
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <h2>{newTrail.Title}</h2>
            <p className="description">{newTrail.description}</p>

            <button
              style={{ textAlign: "right", marginTop: "1rem" }}
              onClick={() => setModalIsOpen(false)}
              className="btn btn-outline-primary"
            >
              Close
            </button>
          </Modal>
        </div>
      </div>
      <div className="overview-label info-area">
        <MapContainer trail={newTrail} />
      </div>
      {/* {isShowDesc && <p className="description">{trail.description}</p>} */}
    </>
  );
};

export default TrailDetail;
