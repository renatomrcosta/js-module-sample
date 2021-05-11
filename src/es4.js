
let es4 = require("./es4_module")
let {bananas, SomeClass, lamb} = require("./es4_module")
console.log("look at that nice module import")
console.log({es4})
new SomeClass()
lamb()
bananas()
