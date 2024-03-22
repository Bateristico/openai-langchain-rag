// import dotenv from "dotenv";
// // Peer dependency, used to support .gitignore syntax
// import ignore from "ignore";
// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";
// import OpenAI from "openai";
// import * as parse from "pdf-parse";

// create main arrow function
const main = async () => {
  // Will not include anything under "ignorePaths"
  const loader = new GithubRepoLoader("https://github.com/langchain-ai/langchainjs", {
    recursive: false,
    ignorePaths: ["*.md", "yarn.lock"],
  });

  const docs = await loader.load();
  console.log(docs.slice(0, 3));
};

main();

console.log("hello");
