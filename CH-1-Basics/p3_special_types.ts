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
    if (typeof value === 'string') {
        console.log("String type ->", value);
    } else if (Array.isArray(value)) {
        console.log("Array ->", value);
    }
}

/**
    Type 'never'
    -> The never type represents the type of values that never occur.
    -> It's used to indicate that something never happens or should never happen.
    
    Common use cases:
        -> Functions that never return (always throw an error or enter an infinite loop)
        -> Type guards that never pass type checking
        -> Exhaustiveness checking in discriminated unions

    When to use?
        -> For functions that will never return a value
        -> In type guards that should never match
        -> For exhaustive type checking in switch statements
        -> In generic types to indicate certain cases are impossible
 */

// function that never return
function throwError(message: string): never {
    throw new Error(message);
}

// interface will be learned in later part, so stay connected
interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

interface Triangle {
    kind: 'triangle';
    base: number;
    height: number;
}

// Exhaustiveness checking with discriminated unions
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'triangle':
            return (shape.base * shape.height) / 2;
        default:
            // causes a compile-time error if a new shape type is added to Shape but not handled in the switch, making the function exhaustively checked by TypeScript.
            // if i remove the case 'triangle', then following error message comes:
            // Type 'Triangle' is not assignable to type 'never'.ts(2322)

            // type by commenting the case 'triangle'
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}