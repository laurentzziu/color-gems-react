// https://gist.github.com/Phoenix2k/7980936
export const rgba2hex = (color_value) => {
  let parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
      length = color_value.indexOf('rgba') ? 3 : 2;
  delete(parts[0]);
  for (let i = 1; i <= length; i++) {
    parts[i] = parseInt( parts[i] ).toString(16);
    if (parts[i].length === 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('').toUpperCase();
}
