import { OpenAIEmbeddings } from "@langchain/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { similarity } from "ml-distance";

// import * as parce from "pdf-parse";

const main = async () => {
  const embeddings = new OpenAIEmbeddings();

  const loader = new PDFLoader("./src/static/docs/Runbook.pdf");
  const rawText = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 128,
    chunkOverlap: 0,
  });

  const spritDocs = await splitter.splitDocuments(rawText);
  const vectorStore = new MemoryVectorStore(embeddings);

  console.log(spritDocs);
};

main();
