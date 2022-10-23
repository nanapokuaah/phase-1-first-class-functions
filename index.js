function receivesAFunction(callback){
    callback()
}//So what this allows us to do, is to pass in another function that exists as an argument to a function, and invoke that function from inside the other!

function returnsANamedFunction(){
    function sayHi(){
    }// take no arguments or return a named function

return sayHi
}

function returnsAnAnonymousFunction(){
    return function(){
// The`returnsAnAnonymousFunction` function should take no arguments and return an _anonymous function_
    }
}