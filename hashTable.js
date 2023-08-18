// class HashTableX {
//   constructor(size) {
//     this.table = new Array(size)
//     this.size = size
//   }

//   hash(key) {
//     let index = 0
//     for (let i = 0; i < key.length; i++) {
//       index += key.charCodeAt(i)
//     }

//     return index % this.size
//   }

//   set(key, value) {
//     const index = this.hash(key)
//     const bucket = this.table[index]
//     if (!bucket) {
//       this.table[index] = [[key, value]]
//     } else {
//       const keyValueExists = bucket.find((el) => el[0] === key)
//       if (!keyValueExists) {
//         this.table[index].push([key, value])
//       } else {
//         keyValueExists[1] = value
//       }
//       return [key, value]
//     }
//     // this.table[index] = value
//   }

//   get(key) {
//     const index = this.hash(key)
//     // return this.table[val]
//     const bucket = this.table[index]
//     if (!bucket) {
//       return "Value does not exist"
//     } else {
//       const keyValueExists = bucket.find((el) => el[0] === key)
//       if (keyValueExists) {
//         return keyValueExists[1]
//       } else {
//         return "Value does not exist"
//       }
//     }
//   }

//   remove(key) {
//     // const res = this.table[val]
//     // this.table[val] = undefined
//     // return res

//     const index = this.hash(key)
//     const bucket = this.table[index]
//     if (bucket) {
//       const keyValueIndex = bucket.findIndex((el) => el[0] === key)
//       if (keyValueIndex === -1) return false

//       this.table[index].splice(keyValueIndex, 1)
//       return true
//     }

//     return false
//   }

//   print() {
//     for (let i = 0; i < this.size; i++) {
//       if (this.table[i]) {
//         console.log(i, "-", this.table[i])
//       }
//     }
//   }
// }

class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let index = 0
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i)
    }
    return index % this.size
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (!bucket) return null

    const keyValuePair = bucket.find((el) => el[0] === key)
    if (!keyValuePair) return null

    return keyValuePair[1]
  }

  set(key, value) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (!bucket) {
      return (this.table[index] = [[key, value]])
    } else {
      const keyValuePair = bucket.find((el) => el[0] === key)
      if (!keyValuePair) {
        return bucket.push([key, value])
      } else {
        return (keyValuePair[1] = value)
      }
    }
  }

  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (!bucket) return false

    const keyValuePairIndex = bucket.findIndex((el) => el[0] === key)

    if (keyValuePairIndex === -1) return false

    const deleted = bucket.splice(keyValuePairIndex, 1)

    return true
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(this.table[i])
      }
    }
  }
}

const ht = new HashTable(50)

ht.set("name", "bob")
ht.set("mane", "luciano")
ht.set("age", 25)
ht.set("eag", 28)
ht.set("gae", 55)
ht.set("employed", false)

// console.log(ht.get("name"))
// console.log(ht.get("employed"))
// console.log(ht.get("age"))

ht.print()
