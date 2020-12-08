import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";

import { notion, useNotion } from "../services/notion";
import { Nav } from "../components/Nav";
import studyData from "../studies/study";

const study = window.lab.util.fromObject(studyData);

export function Experiment() {
  const { user } = useNotion();
  const [calm, setCalm] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    study.run();
  }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    const subscription = notion.calm().subscribe((calm) => {
      const calmScore = Math.trunc(calm.probability * 100);
      setCalm(calmScore);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

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
