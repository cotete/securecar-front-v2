"use client";
import { useEffect } from "react";

// Defina o tipo apropriado para `watsonAssistantChatOptions`
type WatsonAssistantChatOptions = {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  onLoad: (instance: WatsonAssistantInstance) => void;
};

type WatsonAssistantInstance = {
  render: () => void;
};

declare global {
  interface Window {
    watsonAssistantChatOptions: WatsonAssistantChatOptions;
  }
}

const Watson = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "a100136d-40bc-4df4-8b38-433dc1c9fc75",
      region: "us-south", 
      serviceInstanceID: "f8bcc4dd-e927-4915-8abd-ed33d159b5bf", 
      onLoad: (instance: WatsonAssistantInstance) => {
        instance.render(); 
      }
    };

    // Adicione o script do Watson Assistant ao documento
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
      document.head.appendChild(script);
    }, 0);
  }, []);

  return null;
};

export default Watson;
