// datatypes are of two types

// 1-primitive
// 2-non primitive


// they are categorised on the basis of how they are stored in memory and how they are accesed (call by value or call by reference) 

// #Primitive(call by value,original data is not given to us but a copied dta is given to us )
//     7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

//  #Reference or Non Primitibe(direct reference allocate kr dete h)
//     3 type:Array, Objects,Function




//     Array
//         const hero=["man",'"ron","hulk"];
//     object
//             my obj={
//                 name:SharedWorkerage;age=19;
//             }

//     function
//       const myfunction()
//         {
//                 console.log("hello")
//         }
      


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function(object function)
//        Object  =>  object