function stringToColorAndContrast(name: string) {
  let hash = 0;
  let i;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  let hex = '#';

  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    hex += `00${value.toString(16)}`.slice(-2);
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const contrastColor = luminance > 0.5 ? '#000000' : '#FFFFFF';

  return { hex, contrastColor };
}

export function stringAvatar(name: string) {
  const { hex, contrastColor } = stringToColorAndContrast(name);

  return {
    sx: {
      bgcolor: hex,
      color: contrastColor,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
