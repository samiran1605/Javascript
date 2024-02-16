

// for (const iterator of object) {

// }

//  Maps

const map = new Map();

map.set('IN', 'india')
map.set('USA', 'united states of America')
map.set('EN', 'england')
map.set('FR', 'france')

for (const [key, value] of map) {
  console.log(key, value)
}
