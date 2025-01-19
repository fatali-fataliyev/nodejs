function IPLOOKUP(ipAddress) {
  return "AZ" + ipAddress;
}

const IPDATA = {
  name: "Fatali",
  ipVersion: 4,
};

module.exports = {
  func: IPLOOKUP,
  data: IPDATA,
};
