# 🤖 TypeScript i praktiken - Introduktion och grunder

Denna uppgift är en introduktion till TypeScript och låter er utforska grunderna i typad JavaScript. Ni kommer att sätta upp ett TypeScript-projekt, konfigurera kompilatorn och öva på att skriva typad kod. Genom praktiska övningar får ni lära er hur TypeScript hjälper till att hitta fel innan koden körs och gör er kod mer stabil och skalbar. **Rekommenderas att göras i grupp**.

## 🧑‍💻 Steg

1. Skapa mappen `src`
2. Initiera NPM med `npm init`
3. Installera TypeScript som dev dependency - `npm i -D typescript`. Utan shorthands blir det kommandot `npm install --save-dev typescript`. Båda kommandon har exakt samma funktionalitet
4. Lägg till `"tsc": "tsc --watch"` i `"scripts"`-objektet i `package.json`
5. Initiera TypeScript med `npx tsc --init`
6. Inspektera `tsconfig.json` som skapades. Här ligger alla reglerna för ditt TypeScript-projekt. Jämför den med `tsconfig`-filen som skapas i TypeScript-projekt med Vite

   ```json
   {
     "compilerOptions": {
       "target": "ES2022",
       "useDefineForClassFields": true,
       "module": "ESNext",
       "lib": ["ES2022", "DOM", "DOM.Iterable"],
       "types": ["vite/client"],
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "verbatimModuleSyntax": true,
       "moduleDetection": "force",
       "noEmit": true,

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "erasableSyntaxOnly": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedSideEffectImports": true
     },
     "include": ["src"]
   }
   ```

7. Ändra `module` till `"module": "esnext"` och lägg till `"moduleResolution": "bundler"`
8. Avkommentera `"rootDir": "./src"`och `"outDir": "./dist"`. Detta betyder att alla TypeScript-filer inuti mappen `src` kommer konverteras till vanlig JavaScript i mappen `dist`. Innehållet i `dist` kan sedan deployas och köras i webbläsaren utan problem. Webbläsaren kan inte tolka TypeScript
9. Kör sedan test-skriptet ni skapade ovan, `npm run tsc`för att konvertera dina TypeScript filer. Eftersom det innehåller `--watch`-flaggan kommer en ny konvertering göras varje gång ni sparar en ändring. Eftersom som innehållet i `src` är så pass litet kommer ändringarna konverteras nästintill omedelbart
10. Skapa en `.ts`-fil i mappen vars innehåll "bevakas" och konverteras till `.js-filer` i `dist`. Klistra in följande kod:

```js
// en kvittogenerator

function calcTotal(price, taxRate) {
return price + price \* taxRate;
}

function applyDiscount(subtotal, code) {
if (!code) return 0;

if (code === "STUDENT") return Math.round(subtotal \* 0.1);

if (code === "VIP") return 50;

return 0;
}

function printReceipt(customer, price, taxRate, discountCode) {
const subtotal = calcTotal(price, taxRate);
const discount = applyDiscount(subtotal, discountCode);
const total = subtotal - discount;

console.log(
"Tack " +
customer.toUpperCase() +
"! Att betala: " +
total.toFixed(2) +
" kr"
);
}

printReceipt("alex", "199", 0.25, "STUDENT");
```

10. Fixa alla TS errors. Använd VS Codes inbyggda TypeScript-validering eller ett tillägg som SonarQube for IDE
11. Inspektera `dist`-mappen och jämför hur dess fil(er) skiljer sig från `.ts`-filerna ni skapade

## 💻 Förväntat resultat

- TypeScript är installerat som dev dependency och initierat
- `tsconfig.json` innehåller allt som nämns i punkt 6 och 7
- Alla TS-errors i filen/filerna ni skapade är lösta
- TypeScript konverterar era TS-filer och lägger dem i `dist` och uppdaterar processen varje gång en ändring sparas

## 🎁 Bonusuppgifter

### Utöka funktionerna

- Lägg till en funktion `addTip(total: number, percentage: number): number` som lägger på dricks.
- Skapa `printDetailedReceipt(...)` som skriver ut subtotal, moms, rabatt, dricks och total.

### Använd union types

- Gör rabattkoderna till en union type:  
  `type DiscountCode = "STUDENT" | "VIP";`
- Ändra `applyDiscount` så att den använder denna typ.

### Switch

- I `applyDiscount` Använd en `switch` istället för if för rabattkoder och lägg till `never`-check så att alla koder måste hanteras.

Koden för `never`-check ser ut så här:

```ts
  default:
      const neverCheck: never = code;
      return neverCheck;
```

### Customer-objekt

- Gör ett interface `Customer` med: (t.ex. namn, vip-status). Skapa sen ett customer objekt som följer interface:et `Customer` och använd det i `printReceipt` genom att låta `printReceipt` ta ett argument av typen `Customer`.

## 🧑‍🎓 Läs mer

- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [tsconfig Reference](https://www.typescriptlang.org/tsconfig)
