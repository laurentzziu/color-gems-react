// https://wowmotty.blogspot.ro/2009/06/convert-jquery-rgb-output-to-hex-color.html
export const rgba2hex = (rgb_color) => {
  var rgb = rgb_color.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
  return (rgb && rgb.length === 4) ? "#" +
   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : rgb_color;
}
