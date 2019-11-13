import React from "react";

export default function useHover() {
  const [hovering, setHovering] = React.useState(false);

  function onMouseOver() {
    setHovering(true);
  }

  function onMouseOut() {
    setHovering(false);
  }

  return { hovering, onMouseOver, onMouseOut };
}
