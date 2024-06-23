import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";


interface AutoPrompts {
  id: number;
  label: string;
  prompt: string;
}

const autoPrompts: AutoPrompts[] = [
  {
    id: 1,
    label: "Buatkan saya tantangan yang menarik!",
    prompt: "Buatkan saya tantangan yang menarik, berikan Judul, Deskripsi, Exp, Koin, Tingkat kesulitannya diantara [mudah, sedang. sulit], dan pilihan kategorinya [mengurangi limbah, hemat uang, mengurangi pemanasan global, perluas wawasan], untuk kategori bisa pilih lebih dari 1, kalau untuk tingkat kesulitan harus milih 1. Tolong dibuatkan."
  },
  {
    id: 2,
    label: "Ide Tantangan yang menarik apa ya?",
    prompt: "Ide Tantangan yang menarik apa ya? Bisa kasih saran, yang berkaitan dengan kategori [mengurangi limbah, hemat uang, mengurangi pemanasan global, perluas wawasan], untuk kategori bisa pilih lebih dari 1"
  },
  {
    id: 3,
    label: "Apa yang sedang trend kali ini?",
    prompt: "Apa yang sedang trend kali ini? Bisa kasih saran, yang berkaitan dengan kategori [mengurangi limbah, hemat uang, mengurangi pemanasan global, perluas wawasan], untuk kategori bisa pilih lebih dari 1"
  }
];

interface FooterModalAIProps {
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onMeSendAutoPrompt: (prompt: AutoPrompts) => void;
  onMeSendMesssage: (message: string) => void;
  onClose: () => void;
  value: string;
}

export default function FooterModalAI({
  loading, onChange, onMeSendAutoPrompt, onMeSendMesssage, value, onClose
}: FooterModalAIProps) {
  const submitRef = useRef<HTMLButtonElement | null>(null);

  return (
    <DialogFooter className="w-full">
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center w-full gap-5 pb-2">
          {autoPrompts.map((prompt) => (
            <Button
              key={prompt.id}
              variant="outline_primary"
              className="w-full"
              onClick={() => onMeSendAutoPrompt(prompt)}
              disabled={loading}
            >
              {prompt.label}
            </Button>
          ))}
        </div>

        <Textarea
          className="min-h-5 max-h-20 ring-0 ring-transparent focus-visible:ring-transparent focus-visible:ring-0 focus-visible:border-primary-200 transition-colors"
          placeholder="Tulis pertanyaanmu..."
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submitRef.current?.click();
            }
          }}
        />

        <div className="flex items-center gap-5 w-full">
          <Button ref={submitRef}
            className="w-full"
            onClick={() => onMeSendMesssage(value)}
            disabled={loading}
          >
            Tanya
          </Button>
          <Button variant="outline_primary" onClick={onClose}>
            Keluar
          </Button>
        </div>
      </div>
    </DialogFooter>
  )
}