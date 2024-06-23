import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import GeminiGenerateChat from "@/lib/gemini";

import HeaderModalAI from "@/components/challenges/modal/ai/header";
import BodyModalAI from "@/components/challenges/modal/ai/body";
import FooterModalAI from "@/components/challenges/modal/ai/footer";

interface AiChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatProps {
  ai: { text: string }[];
  me: { text: string }[];
}

const Loading = () => (
  <div className="flex justify-center items-center w-full h-full">
    <span className="animate-pulse w-fit bg-primary-200 px-5 rounded-full">
      AI Sedang Meresponse pertanyaan anda...
    </span>
  </div>
)

export default function AiChallengeModal({ isOpen, onClose }: AiChallengeModalProps) {
  const [tempMessage, setTempMessage] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const [chat, setChat] = useState<ChatProps>({
    ai: [{ text: "Halo, saya Greeve AI. Adakah yang bisa dibantu?" }],
    me: []
  });

  const onTypeResponse = (response: string) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        setChat((prev) => ({
          ...prev,
          ai: [
            ...prev.ai.slice(0, -1),
            { text: prev.ai[prev.ai.length - 1].text + response[currentIndex] }
          ]
        }));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 12);
  }

  const onSendPromptAI = async (prompt: string) => {
    setAiLoading(true);
    const response = await GeminiGenerateChat(prompt);

    setChat((prev) => ({
      ...prev,
      ai: [...prev.ai, { text: "" }]
    }));

    onTypeResponse(response);
    setAiLoading(false);
  };

  const onMeSendMesssage = async (message: string) => {
    setTempMessage("");
    setChat((prev) => ({
      ...prev,
      me: [...prev.me, { text: message }]
    }));
    await onSendPromptAI(message);
  }

  const onMeSendAutoPrompt = async (prompt: { label: string; prompt: string }) => {
    setChat((prev) => ({
      ...prev,
      me: [...prev.me, { text: prompt.label }]
    }));
    await onSendPromptAI(prompt.prompt);
  }

  const onHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTempMessage(e.target.value);
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="min-h-[92vh] flex flex-col items-center md:rounded-2xl max-w-4xl">
        <HeaderModalAI />
        <BodyModalAI chat={chat} />

        {aiLoading && <Loading />}

        <FooterModalAI
          loading={aiLoading}
          onChange={onHandleChange}
          onMeSendAutoPrompt={onMeSendAutoPrompt}
          onMeSendMesssage={onMeSendMesssage}
          value={tempMessage}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  )
}