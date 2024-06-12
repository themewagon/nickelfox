function hexToRgba(hex: string, alpha: number) {
  hex = hex.replace(/^#/, '');

  if (hex.length !== 6) {
    throw new Error('Invalid hex color code');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r},${g},${b},${alpha * 0.01})`;
}

export default hexToRgba;
