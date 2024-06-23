import Markdown from "markdown-to-jsx"

const AiResponse = ({ response }: { response: string }) => {
  return (
    <div className="flex justify-start">
      <section className="flex flex-col gap-2 max-w-lg border border-neutral-200 rounded-xl p-3">
        <h5 className="text-primary-500 font-bold">Greeve AI</h5>
        <div className="text-sm leading-6">
          <Markdown options={{ wrapper: 'article' }}>
            {response}
          </Markdown>
        </div>
      </section>
    </div>
  )
}

const UserAsk = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end">
      <section className="flex flex-col gap-2 max-w-lg border border-neutral-200 rounded-xl p-3">
        <h5 className="text-primary-500 font-black">Kamu</h5>
        <p className="text-sm leading-6">
          {children}
        </p>
      </section>
    </div>
  )
}

interface ChatProps {
  ai: { text: string }[];
  me: { text: string }[];
}

export default function BodyModalAI({ chat }: { chat: ChatProps }) {
  return (
    <section className="flex-grow w-full pt-5 overflow-y-auto max-h-[60vh]">
      {chat.ai.map((ai, index) => (
        <div key={index} className="flex flex-col gap-3">
          <AiResponse response={ai.text} />
          {chat.me[index] && <UserAsk>{chat.me[index].text}</UserAsk>}
        </div>
      ))}
    </section>
  )
}