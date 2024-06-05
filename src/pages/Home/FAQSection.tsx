import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ornamen1 from "../../assets/images/ornamen4.png";
import ornamen2 from "../../assets/images/ornamen5.png";
import ornamen3 from "../../assets/images/ornamen6.png";
import ornamen4 from "../../assets/images/ornamen7.png";

interface accordionItemProps {
  question: string;
  answer: string;
}

const accordionItem: accordionItemProps[] = [
  {
    question: "Apakah Aplikasi ini berbayar?",
    answer:
      "Tidak, aplikasi ini dapat diunduh dan digunakan secara gratis. Anda bisa mengakses berbagai fitur utama seperti membeli produk ramah lingkungan, membaca informasi tentang isu lingkungan, dan mengukur dampak lingkungan Anda tanpa biaya. Namun, ada beberapa fitur premium dan produk tertentu yang mungkin memerlukan pembayaran.",
  },
  { question: "Produk apa saja yang tersedia pada aplikasi ini?", answer: "coming soon" },
  { question: "Bagaimana cara berlangganan membership?", answer: "coming soon" },
  { question: "Metode pembayaran apa yang tersedia?", answer: "coming soon" },
  { question: "Bagaimana cara mendapatkan greeve koin?", answer: "coming soon" },
  { question: "Bagaimana cara menggunakan greeve koin?", answer: "coming soon" },
];

const FAQSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[96px] relative">
      <img className="absolute top-0 left-0 -z-30" src={ornamen1} alt="ornamen1" />
      <img className="absolute top-0 left-0 -z-40" src={ornamen2} alt="ornamen2" />
      <img className="absolute -bottom-1 right-0 -z-30" src={ornamen3} alt="ornamen3" />
      <img className="absolute -bottom-1 right-0 -z-40" src={ornamen4} alt="ornamen4" />
      <div className="mb-[32px]">
        <h3 className="text-neutral-900 text-[36px] font-extrabold">Frequently Asked Question</h3>
      </div>
      <Accordion type="single" collapsible className="container max-w-[695px]">
        {accordionItem.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-neutral-900 text-[18px] font-medium">{item.question}</AccordionTrigger>
            <AccordionContent className="text-neutral-600 text-[16px] font-normal">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
