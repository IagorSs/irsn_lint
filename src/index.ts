import js from "@eslint/js";
import json from "@eslint/json";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  { ignores: [ "**/dist/" ] },
  {
    files          : [ "**/*.{js,mjs,cjs,ts,mts,cts}" ],
    plugins        : { js },
    extends        : [ "js/recommended" ],
    languageOptions: { globals: globals.node },
  },
  // Ref: https://typescript-eslint.io/rules/
  tseslint.configs.recommended,
  {
    files   : [ "**/*.json" ],
    plugins : { json },
    language: "json/json",
    extends : [ "json/recommended" ],
  },
  {
    files   : [ "**/*.jsonc" ],
    plugins : { json },
    language: "json/jsonc",
    extends : [ "json/recommended" ],
  },
  {
    files   : [ "**/*.json5" ],
    plugins : { json },
    language: "json/json5",
    extends : [ "json/recommended" ],
  },
  {
    // Ref: https://eslint.style/rules
    plugins: { "@stylistic": stylistic },
    rules  : {
      // Spacing
      "@stylistic/array-bracket-spacing"    : [ "error", "always" ],
      "@stylistic/arrow-spacing"            : "error",
      "@stylistic/block-spacing"            : "error",
      "@stylistic/computed-property-spacing": "error",
      "@stylistic/function-call-spacing"    : "error",
      "@stylistic/generator-star-spacing"   : "error",
      "@stylistic/key-spacing"              : [ "error", { align: "colon" } ],
      "@stylistic/keyword-spacing"          : "error",
      "@stylistic/no-mixed-spaces-and-tabs" : "error",
      // FIXME sabe with exceptions is conflicting
      // with "@stylistic/keyword-spacing"
      // "@stylistic/no-multi-spaces"          : [
      //   "error",
      //   { exceptions: { Property: true } },
      // ],
      // TODO finish this guy

      // Line Breaks
      "@stylistic/array-element-newline"         : [ "error", "consistent" ],
      "@stylistic/eol-last"                      : "error",
      "@stylistic/function-call-argument-newline": [ "error", "consistent" ],
      "@stylistic/implicit-arrow-linebreak"      : "error",
      "@stylistic/linebreak-style"               : "error",
      "@stylistic/newline-per-chained-call"      : [
        "error",
        { ignoreChainWithDepth: 2 },
      ],
      "@stylistic/object-property-newline": "error",
      // TODO finish this guy

      // Brackets
      "@stylistic/array-bracket-newline": "error",
      // TODO finish this guy
      "@stylistic/brace-style"          : [
        "error",
        "1tbs",
        { allowSingleLine: true },
      ],
      "@stylistic/curly-newline"         : "error",
      "@stylistic/function-paren-newline": [ "error", "multiline-arguments" ],
      // TODO finish this guy
      "@stylistic/new-parens"            : "error",
      "@stylistic/no-extra-parens"       : [
        "error",
        "all",
        { nestedBinaryExpressions: false },
      ],
      "@stylistic/object-curly-newline": [
        "error",
        { multiline: true },
      ],
      "@stylistic/object-curly-spacing"       : [ "error", "always" ],
      "@stylistic/space-before-function-paren": [ "error", "never" ],

      // Indent
      "@stylistic/indent": [ "error", 2 ],

      // Quotes (' | "")
      "@stylistic/quotes"     : [ "error", "double", { avoidEscape: true } ],
      "@stylistic/quote-props": [ "error", "consistent-as-needed" ],

      // Commas (,)
      "@stylistic/comma-dangle" : [ "error", "always-multiline" ],
      "@stylistic/comma-spacing": "error",
      "@stylistic/comma-style"  : "error",

      // Semis (;)
      "@stylistic/no-extra-semi": "error",
      "@stylistic/semi"         : [
        "error",
        "always",
        {
          omitLastInOneLineBlock    : true,
          omitLastInOneLineClassBody: true,
        },
      ],
      "@stylistic/semi-spacing": "error",
      "@stylistic/semi-style"  : "error",

      // Operators
      "@stylistic/indent-binary-ops" : [ "error", 2 ],
      "@stylistic/multiline-ternary" : [ "error", "always-multiline" ],
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/operator-linebreak": [ "error", "before" ],

      // Comments
      // FIXME Cannot use this guy
      // "@stylistic/lines-around-comment"          : [],
      "@stylistic/spaced-comment": "error",

      // Types
      // FIXME this rule conflicts with key-spacing
      // "@stylistic/type-annotation-spacing": [],
      "@stylistic/type-generic-spacing"    : "error",
      "@stylistic/type-named-tuple-spacing": "error",

      // Disallow
      "@stylistic/no-confusing-arrow"     : "error",
      "@stylistic/no-floating-decimal"    : "error",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max   : 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      "@stylistic/no-tabs"                      : "error",
      "@stylistic/no-trailing-spaces"           : "error",
      "@stylistic/no-whitespace-before-property": "error",

      // Misc
      "@stylistic/max-len": [
        "warn",
        80,
        4,
        {
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals  : true,
        },
      ],
      "@stylistic/max-statements-per-line"         : "error",
      "@stylistic/member-delimiter-style"          : "error",
      "@stylistic/nonblock-statement-body-position": "error",
      "@stylistic/padded-blocks"                   : [ "error", "never" ],
    },
  },
  {
    // Necessary to autofix feat
    plugins: { "simple-import-sort": simpleImportSort },
    rules  : {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    // Ref: https://eslint.org/docs/latest/rules/
    rules: {
      // TODO Separate better in sections
      // Possible Problems
      // TODO finish this guy
      // Suggestions
      // TODO finish this guy
      "curly"                  : [ "error", "multi-or-nest" ],
      "dot-notation"           : "error",
      "eqeqeq"                 : "error",
      "no-useless-computed-key": "error",
      "prefer-const"           : "error",
      // FIXME cannot set this variable, is giving error
      // "strict"                 : "error",
      "yoda"                   : "error",
    },
  },
]);
