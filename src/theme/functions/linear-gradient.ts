function linearGradient(
  angle: number,
  startColor: string,
  startColorStop: number = 0,
  endColor: string,
  endColorStop: number = 0,
) {
  return `linear-gradient(${angle}deg, ${startColor} ${startColorStop}%, ${endColor} ${endColorStop}%)`;
}

export default linearGradient;
