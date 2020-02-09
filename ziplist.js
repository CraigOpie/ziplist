function ziplist(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  const newList = _.zip(list1, list2);
  return _.flatten(newList);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(ziplist(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
