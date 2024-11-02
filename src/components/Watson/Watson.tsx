import { useEffect } from "react";

declare global {
    interface Window {
      watsonAssistantChatOptions?: {
        integrationID: string;
        region: string;
        serviceInstanceID: string;
        onLoad: (instance: any) => Promise<void>;
        clientVersion?: string;
      };
    }
  }

const Watson = () => {
  useEffect(() => {
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "a100136d-40bc-4df4-8b38-433dc1c9fc75", 
        region: "us-south", 
        serviceInstanceID: "f8bcc4dd-e927-4915-8abd-ed33d159b5bf", 
        onLoad: async (instance) => {
          await instance.render();
        },
      };


      const script = document.createElement("script");
      script.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []); 
  return null; 
};

export default Watson;
