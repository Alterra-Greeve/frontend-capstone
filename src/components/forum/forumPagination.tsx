import { useAppSelector } from "@/lib/redux";
import ArrowRight from "@/assets/icons/Arrow - Right Circle.svg";

const ForumPagination = ({
  className,
  setPage,
}: {
  className: string;
  setPage: (e: number) => void;
}) => {
  const { metadata, discussions } = useAppSelector((state) => state.forum);
  return (
    <section className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        <p className="text-[10px] font-medium text-neutral-500">
          Menampilkan 1 hingga {discussions.length} dari {discussions.length} entri
        </p>
        <div
          className={`min-w-[158px] flex items-center gap-4 ${
            metadata.current_page <= 1
              ? "justify-end"
              : metadata.current_page >= metadata.total_page
              ? "justify-start"
              : ""
          }`}
        >
          <button
            className={`min-w-6`}
            onClick={() => setPage(metadata.current_page - 1)}
            disabled={metadata.current_page <= 1 ? true : false}
          >
            <div
              className={`-rotate-180 ${
                metadata.current_page <= 1 ? "hidden" : ""
              }`}
            >
              <ArrowRight />
            </div>
          </button>
          <div className="w-[78px] rounded-[8px] border-[0.5px] border-neutral-400 px-3 py-2 flex gap-1 justify-center text-base leading-5 font-extrabold">
            <p className="text-primary-500">{String(metadata.current_page).padStart(2, '0')}</p>
            <p className="text-primary-200">/</p>
            <p className="text-primary-200">{String(metadata.total_page).padStart(2, '0')}</p>
          </div>
          <button
            className={`min-w-6 ${
              metadata.current_page == metadata.total_page ? "hidden" : ""
            }`}
            onClick={() => setPage(metadata.current_page + 1)}
            disabled={
              metadata.current_page >= metadata.total_page ? true : false
            }
          >
            <div
              className={
                metadata.current_page >= metadata.total_page ? "hidden" : ""
              }
            >
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForumPagination;
