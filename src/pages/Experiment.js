import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { fromEvent } from "rxjs";
import anonymus from "anonymus";

import { notion, useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import studyData from "../studies/rho";

const study = window.lab.util.fromObject(studyData);

// notion.enableLocalMode(); // Ensures data comes via local wifi instead of cloud

export function Experiment() {
  const { user } = useNotion();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    study.run();

    fromEvent(study, "run").subscribe(() => {
      notion
        .dispatchAction({
          command: "brainwaves",
          action: "record",
          responseRequired: true,
          responseTimeout: 300 * 1000 + 5000,
          message: {
            name: anonymus.create(), // Creates recording name. E.g. "Aliceblue llama"
            experimentId: "rotated-heads-oddball", // Used for grouping recordings
            label: "rotated-heads-oddball", // A tag for the recording
            duration: 300 * 1000 //300 * 1000 //  300 seconds
          }
        })
        .catch(() => {
          alert(`Failed to communicate with device.`);
        });
    });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <main className="main-container">
      {user ? <Nav /> : null}

      <div className="container fullscreen" data-labjs-section="main">
        <main className="content-vertical-center content-horizontal-center">
          <div>
            <h2>Loading Experiment</h2>
            <p>
              The experiment is loading and should start in a few
              seconds
            </p>
          </div>
        </main>
      </div>
    </main>
  );
}
