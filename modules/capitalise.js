export default function capitalise(string) {
  if (string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
  } else {
    return '';
  }
}
