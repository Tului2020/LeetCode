
// [width, height]
let books = [
  [1,1],
  [2,3],
  [2,3],
  [1,1],
  [1,1],
  [1,1],
  [1,2]
];

let shelf_width = 4;
let shelves = [[0, 1, 2]];





var minHeightShelves = function(books, shelf_width) {

  


};




var getShelfHeight = (shelfIdx) => {
  let shelf = shelves[shelfIdx];
  return Math.max(...shelf.map(bookIdx => books[bookIdx]).map(bookInfo => bookInfo[1]))
}

var getShelfWidth = (shelfIdx) => {
  let shelf = shelves[shelfIdx];
  return shelf.map(bookIdx => books[bookIdx]).map(bookInfo => bookInfo[0]).reduce((a, b) => a + b)
}




