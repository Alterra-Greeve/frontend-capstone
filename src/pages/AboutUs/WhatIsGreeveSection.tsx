import heroWhatGreeve from "../../assets/images/whatGreeve.png";

const WhatIsGreeveSection = () => {
  return (
    <section className="w-full h-auto md:py-[80px] px-[64px] flex flex-col md:flex-row justify-between items-center 2xl:justify-center gap-[60px]">
      <div className="w-auto md:w-[604px] h-auto mt-20">
        <h6 className="text-neutral-900 max-md:text-center text-[32px] md:text-[60px] mb-[17px] font-semibold">
          What Is Greeve?
        </h6>
        <p className="text-neutral-600 text-[16px] md:text-[25px] font-normal text-justify">
          Greeve adalah platform yang membantu anda menjalani gaya hidup ramah
          lingkungan. Melalui aplikasi kami, anda dapat membeli produk
          berkelanjutan, mengukur dampak aktivitas sehari-hari anda terhadap
          lingkungan, dan kami juga menyediakan Challenge menarik yang
          memungkinkan anda mendapatkan reward ketika anda berpartisipasi dan
          mencapai prestasi dalam menjaga lingkungan. Bergabunglah dengan kami
          untuk membuat perubahan positif bagi planet kita.
        </p>
      </div>
      <div>
        <img
          className="w-[644px] h-auto md:h-[650px]"
          src={heroWhatGreeve}
          alt="hero WIG"
        />
      </div>
    </section>
  );
};

export default WhatIsGreeveSection;
