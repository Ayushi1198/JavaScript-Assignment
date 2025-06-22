function isValidIP(ip) {
  if (typeof ip !== 'string') return false;

  let parts = ip.trim().split('.');
  if (parts.length !== 4) return false;
  for (let part of parts) {
    if (part === '' || isNaN(part)) return false;
    let num = Number(part);
    if (num < 0 || num > 255 || part.includes(' ')) return false;
  }
  return true;
}
let ipInput = prompt("Enter an IP address:");
console.log(isValidIP(ipInput) ? "Valid IP address" : "Invalid IP address");
