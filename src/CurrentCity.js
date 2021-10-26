import React, { useState } from "react";
import "./CurrentCity.css";

export default function CurrentCity() {
  return (
    <div>
      <button type="button" class="btn btn-outline-info" id="currentLoc">
        Current Location 🗺
      </button>
    </div>
  );
}
