function getFirstPython(list) {
  // Find the first developer whose language is Python
  const dev = list.find((dev) => dev.language === "Python");

  // If we find such a developer, return the formatted string
  if (dev) {
    return `${dev.firstName}, ${dev.country}`;
  }

  // If no Python developer is found, return this message
  return "There will be no Python developers";
}
