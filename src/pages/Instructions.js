import React from "react";
import { Link } from "@reach/router";

import { Nav } from "../components/Nav";
import { useNotion } from "../services/notion";

export function Instructions() {
  const { user } = useNotion();

  if (!user) {
    return null;
  }

  return (
    <main className="main-container">
      {user ? <Nav /> : null}

      <div>
        <p>
          Welcome to the <strong>rotated heads task</strong>! In this
          experiment, your task will be to identify which ear (left or
          right) is being presented on a stylized "head" (circle) shown
          on the screen. Sometimes, the head will be pointed up
          (indicated by a triangle "nose" above the circle) and other
          times the head will be pointed down (indicated by a triangle
          nose below the circle).
        </p>

        <p>
          To indicate your answers, please use the left arrow (←) when
          the image presented contains the "left ear", and use the right
          arrow (→) when the image presented contains the "right ear."
          Some images will contain no ears; please do ignore these
          images and do not press any buttons.
        </p>
      </div>

      <Link to="/experiment">Begin</Link>
    </main>
  );
}
