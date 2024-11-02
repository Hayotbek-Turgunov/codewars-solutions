function flyBy(lamps, drone) {
  // Determine the length of the flight path
  let flightLength = drone.length;

  // Turn on lamps along the flight path length, and leave the rest as they are
  return lamps
    .split("")
    .map((lamp, index) => (index < flightLength ? "o" : lamp))
    .join("");
}
