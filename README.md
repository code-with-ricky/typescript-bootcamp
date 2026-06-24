# TypeScript 
- TypeScript is syntactic superset of javascript which adds `static typing`
- TypeScript uses compile time type checking
- TypeScript compiler transpiles TypeScript code to JavaScript

## TypeScript Compiler Installation
- install using `npm` ionside your project
```bash
npm install typescript --save-dev
```

- Compiler is installed in `node_modules` directory
- It is run using following command:
```bash
npx tsc
```

### Installing Globally
- Means adding `tsc` command to system `PATH` so it available from any folder
```bash
npm install -g typescript
```

- Check version:
```bash
tsc -v
```

> NOTE: Best practice is to install TypeScript as a project `devDependency` and run it with `npx tsc` so the exact version is consistent across environments. 

---

## Configure Compiler
- compiler can be configured using `tsconfig.json` file
- we can create `tsconfig.json` file using following command:
```bash
npx tsc --init
```
---

## TypeScript configuration
- `tsconfig.json` tells typescript compiler how to process our code, which files to include and which feature to enable/disable

### Key Concepts
- **`compilerOptions`** : Controls how TypeScript compiles your code (e.g., target, module, strictness).
- **`include`** : Files or folders to include in the compilation
- **`exclude`** : Files or folders to exclude.
- **`files`** : Explicit list of files to include
- **`extends`** : Inherit options from another config file.
- **`references`** : Enable project references for monorepos or multi-package setups.

### Minimal Configuration
```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs"
    },
    "include": ["src/**/*"]
}
```

### Advanced Configuration
```json
{
    "compilerOptions": {
        "target": "es2020",
        "module": "esnext",
        "strict": true,
        "baseUrl": ".",
        "paths": {
            "@app/*": ["src/app/*"]
        },
        "outDir": "dist",
        "esModuleInterop": true
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

### BEST PRACTICES
- Always enable `strict` for safer code
- Use `extends` to avoid duplicating config in monorepos or multiple projects.
- Do not commit build output folders (like `dist`) to version control.

---

## Primitive types in TypeScript

### Boolean
- stores `true` or `false` values
- used for flags, toggles and conditions
```ts
let isAdmin: boolean = true;
let isMinor = false;  // TypeScript infers the type boolean
```

### Number
- used for `integer` and `floating` literals
```ts
let age: number = 34;
const pi: number = 3.14;
```

### String
- used for `text` data
- Can use `single quotes` ('), `double quotes` ("), or `backticks` (`) for template literals.
```ts
let username: string = 'Ricky';
let colot: string = "blue";
let greetings: string = `Hello, ${username}`;
```

### BigInt
- for whole numbers larger than `2^53 - 1`
- came for `ES2020+`
```ts
const hugeNumber = BigInt(9007199254740991);
```

### Symbol
- Creates `unique` identifiers
- useful for creating unique property keys and constants
```ts
const uniqueKey: symbol = Symbol("description");
const obj = {
    [uniqueKey]: "This is a unique property"
};
console.log(obj[uniqueKey]);
```