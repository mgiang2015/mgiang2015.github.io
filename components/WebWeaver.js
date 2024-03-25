import { ChatWindow } from "../components/webweaver/ChatWindow";

export default function WebWeaver() {

  // TODO: Change information in InfoCard
  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Web Weaver 🕷️🕸️
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            Web Weaver takes in a URL (e.g articles from Medium, Guardian, ...) and perform {" "}
            <a href="https://aws.amazon.com/what-is/retrieval-augmented-generation/">
              Retrieval-Augmented Generation
            </a>{" "}
            with provided data using {" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            chain in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            This UI is a modified version of an open source project - you can see the source code and
            deploy your own version{" "}
            <a
              href="https://github.com/langchain-ai/langchain-nextjs-template"
              target="_blank"
            >
              from the GitHub repo
            </a>
            !
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Provide me with an URL, click WEAVE WEBSITE, then try asking a question below!
          </span>
        </li>
        <li className="text-l">
          💡
          <span className="ml-2">
            Need an example? Try{" "}
            <a href="https://lilianweng.github.io/posts/2023-06-23-agent/">
              this article on LLM Powered Autonomous Agents
            </a>{" "} and ask "What is task decomposition?"
          </span>
        </li>
      </ul>
    </div>
  );

  // TODO: CHANGE API PATH
  return (
    <ChatWindow
      endpoint="http://localhost:8080/rag-pinecone/invoke"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'What is task decomposition?'
      }
      emoji="🕷️"
      titleText="Wallie the Web Weaver"
    ></ChatWindow>
  );
}
