function isValidDomain(value) {
  if (typeof value !== 'string') return false;
  if (!value.includes('.') || value.length < 3) return false;
  let parts = value.split('.');
  if (parts.length < 2) return false;
  for (let part of parts) {
    if (part.length === 0 || part.includes(' ')) return false;
  }
  return true;
}
let domain = prompt("Enter a domain name:");
console.log(isValidDomain(domain) ? "Valid domain" : "Invalid domain");
