let airports = [
  "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",
  "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"
]

let routes = [
  ["DSM", "ORD"],
  ["ORD", "BGI"],
  ["BGI", "LGA"],
  ["SIN", "CDG"],
  ["CDG", "SIN"],
  ["CDG", "BUD"],
  ["DEL", "DOH"],
  ["DEL", "CDG"],
  ["TLV", "DEL"],
  ["EWR", "HND"],
  ["HND", "ICN"],
  ["HND", "JFK"],
  ["ICN", "JFK"],
  ["JFK", "LGA"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["SFO", "SAN"],
  ["SFO", "DSM"],
  ["SAN", "EYW"],
]

class Tree {
  constructor(name) {
    this.name = name;
    this.flightsTo = [];
  }
  


}



