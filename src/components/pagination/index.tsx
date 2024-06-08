import ArrowRight from "@/assets/icons/Arrow - Right Circle.svg";
import { useEffect, useState } from "react";

const Paging = ({
  dataLength,
  amouthDataDisplayed,
  setDataShow,
  className,
}: {
  dataLength: number;
  setDataShow?: (event: { start: number; end: number }) => void;
  amouthDataDisplayed: number;
  className?: string;
}) => {
  const [pagingIndex, setPangingIndex] = useState<number>(1);
  const [pagingLength, setPagingLength] = useState(0);
  const [showedData, setShowedData] = useState<{ start: number; end: number }>({
    start: 1,
    end: amouthDataDisplayed,
  });

  function handlePagingLength() {
    if (dataLength % amouthDataDisplayed == 0) {
      return dataLength / amouthDataDisplayed;
    } else {
      return Math.floor(dataLength / amouthDataDisplayed) + 1;
    }
  }
  function handleShowedData() {
    const end = amouthDataDisplayed * pagingIndex;
    const start = end - amouthDataDisplayed + 1;

    setShowedData({
      start,
      end,
    });
  }
  useEffect(() => {
    handleShowedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagingIndex]);
  useEffect(() => {
    // @ts-expect-error cannot invoke an object which is possibly 'undefined'
    setDataShow(showedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showedData]);

  useEffect(() => {
    setPagingLength(handlePagingLength());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        <p className="text-[10px] font-medium text-neutral-500">
          Menampilkan {showedData.start} hingga{" "}
          {showedData.end >= dataLength ? dataLength : showedData.end} dari{" "}
          {dataLength} entri
        </p>
        <div
          className={`min-w-[158px] flex items-center gap-4 ${pagingIndex <= 1
            ? "justify-end"
            : pagingIndex >= pagingLength
              ? "justify-start"
              : ""
            }`}
        >
          <button
            className={`min-w-6`}
            onClick={() => setPangingIndex(pagingIndex - 1)}
            disabled={pagingIndex <= 1 ? true : false}
          >
            <div className={`-rotate-180 ${pagingIndex <= 1 ? "hidden" : ""}`}>
              <ArrowRight />
            </div>
          </button>
          <div className="w-[78px] rounded-[8px] border-[0.5px] border-neutral-400 px-3 py-2 flex gap-1 justify-center text-base leading-5 font-extrabold">
            <p className="text-primary-500">{pagingIndex}</p>
            <p className="text-primary-200">/</p>
            <p className="text-primary-200">{pagingLength}</p>
          </div>
          <button
            className={`min-w-6 ${showedData.start == pagingLength ? "hidden" : ""}`}
            onClick={() => setPangingIndex(pagingIndex + 1)}
            disabled={pagingIndex >= pagingLength ? true : false}
          >
            <div className={pagingIndex >= pagingLength ? "hidden" : ""}>
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Paging;
