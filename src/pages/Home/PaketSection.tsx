import { Button } from "@/components/ui/button";
import tick from "../../assets/icons/tickSquare.svg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PaketItemProps {
  name: string;
  price: number;
  waktuAkses: number;
  isHemat: boolean;
  waktuHemat: number;
}

const paketItem: PaketItemProps[] = [
  { name: "Epic", price: 299000, waktuAkses: 12, isHemat: true, waktuHemat: 2 },
  { name: "Boost", price: 149000, waktuAkses: 6, isHemat: true, waktuHemat: 1 },
  { name: "Lite", price: 30000, waktuAkses: 1, isHemat: false, waktuHemat: 0 },
];

interface featureItemProps {
  feature: string;
}

const featureItem: featureItemProps[] = [{ feature: "Tolak hingga 5 kartu challenge" }, { feature: "Ambil 5 kartu challenge" }, { feature: "Tiga kesempatan shuffle gratis!" }, { feature: "Nikmati voucher diskon lebih besar" }];

const PaketCard = ({ name, price, waktuAkses, isHemat, waktuHemat }: PaketItemProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Card className="w-[352px] shadow-lg border-0">
      <CardHeader className="flex flex-col gap-[17px]">
        <CardTitle className="text-neutral-600 text-[28px] font-medium">{name}</CardTitle>
        <CardDescription>
          <div className="flex flex-row h-auto gap-[4px] ">
            <h6 className="text-neutral-900 text-[36px] font-medium">Rp{price}</h6>
            <p className="text-neutral-600 text-[12px] font-medium">per tahun</p>
          </div>
          {isHemat ? (
            <p className="text-neutral-600 text-[16px] mt-[17px] font-normal">
              Hemat {waktuHemat} bulan! Dapatkan akses penuh selama {waktuAkses} bulan.
            </p>
          ) : (
            <p className="text-neutral-600 text-[16px] font-normal mt-[17px] mb-[24px]">Dapatkan akses penuh selama {waktuAkses} bulan.</p>
          )}
        </CardDescription>
        <Button onClick={() => scrollToSection("Download")} variant="outline" className="hover:bg-primary-500 border-primary-500 rounded-[40px] mb-[27px] p-[8px] hover:text-neutral-100 text-primary-500 text-[14px] font-medium">
          Mulai Sekarang
        </Button>
        <hr />
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 text-[16px] font-normal mb-[13px]">Apa yang termasuk:</p>
        {featureItem.map((item, index) => (
          <div key={index} className="flex justify-start gap-[6px] mb-[6px]">
            <img src={tick} alt="tick" />
            <p className="text-primary-500 text-[16px] font-normal">{item.feature}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const PaketSection = () => {
  return (
    <section className="flex flex-col items-center gap-[35px] px-[64px] py-[80px]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-neutral-900 text-[60px] font-semibold">Paket dan Harga</h3>
        <p className="text-neutral-600 text-[25px] font-normal">Kredit Tanpa Batas! Bayar tahunan dan hemat.</p>
      </div>
      <div className="flex gap-[48px] justify-between">
        {paketItem.map((item, index) => (
          <PaketCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PaketSection;
