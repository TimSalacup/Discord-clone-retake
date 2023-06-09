import React from "react";

function ServerIcon({ image }) {
  return (
    <img
      src={image}
      alt="logo"
      className="h-12 cursor-not-allowed rounded-full transition-all duration-100 ease-out hover:rounded-2xl"
    />
  );
}

export default ServerIcon;
