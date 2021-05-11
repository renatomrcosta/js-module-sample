
import DefaultStuff from "./es2015_module"
import * as MyModule from "./es2015_module"
import { SomeClass, someLambda, bananas } from "./es2015_module"

console.log("look at that nice module import")
console.log({MyModule})
MyModule.bananas()
bananas()
MyModule.someLambda()
someLambda()
DefaultStuff()
