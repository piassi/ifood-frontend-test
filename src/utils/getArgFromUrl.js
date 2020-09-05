export function getArgFromUrl(argToGet) {
  const arg = window.location.hash
    .substr(1)
    .split('&')
    .map((item) => item.split('='))
    .find((item) => item[0] === argToGet);
  return arg ? arg[1] : '';
}
