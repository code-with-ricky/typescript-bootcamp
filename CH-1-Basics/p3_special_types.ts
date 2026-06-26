/**
 * Type 'any'
 * it tells compiler to skip type checking for a variable
 * 
 * When to use:
    -> When migrating JavaScript code to TypeScript
    -> When working with dynamic content where the type is unknown
    -> When you need to opt out of type checking for a specific case

    NOTE: avoid using 'any'
 */

    let x: any = 45;
    x = "Amrik";
    x = true;

/**
    Type 'unknown'
    -> The unknown type is a type-safe counterpart of any.
    -> It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".
    
    -> unknown must be type-checked before use
    -> You can't access properties on an unknown type without type assertion
    -> You can't call or construct values of type unknown

    When to use?
        -> When working with data from external sources (APIs, user input, etc.)
        -> When you want to ensure type safety while still allowing flexibility
        -> When migrating from JavaScript to TypeScript in a type-safe way

    Type narrowing with unknown:
        -> narrow down the type of an unknown value using type guards, given in following example
 */

function processValue(value: unknown) {
    if(typeof value === 'string') {
        console.log("String type ->", value);
    }else if(Array.isArray(value)){
        console.log("Array ->", value);
    }
}