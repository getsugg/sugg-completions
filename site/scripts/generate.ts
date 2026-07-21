console.log("[generate] Running scripts generation...");
await import("./generate-scripts.ts");

console.log("[generate] Running landing code generation...");
await import("./generate-landing-code.ts");

console.log("[generate] Done!");
