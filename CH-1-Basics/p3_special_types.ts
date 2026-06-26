/**
 * Type 'any'
 * it tells compiler to skip type checking for a variable
 * 
 * When to use:
    -> When migrating JavaScript code to TypeScript
    -> When working with dynamic content where the type is unknown
    -> When you need to opt out of type checking for a specific case
 */

    let x: any = 45;
    x = "Amrik";
    x = true;

    