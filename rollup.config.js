import typescript from "@rollup/plugin-typescript";


export default {
  input: "src/ts/index.ts",
  output: {
    dir: "public/js",
    format: "umd",
  },
  plugins: [
        typescript({
      compilerOptions: { module: "esnext" },
      outDir: "public/js",
    }),
  ],
};