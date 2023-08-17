class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    this.table[index] = value
  }

  get(key) {
    const val = this.hash(key)
    return this.table[val]
  }

  remove(key) {
    const val = this.hash(key)
    const res = this.table[val]
    this.table[val] = undefined
    return res
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, "-", this.table[i])
      }
    }
  }
}

const hashTable = new HashTable(50)

hashTable.set("name", "luciano")
hashTable.set("age", 25)
hashTable.set("job", "truck driver")
hashTable.set("hobby", "programming")

hashTable.remove("age")
hashTable.remove("name")

hashTable.print()
