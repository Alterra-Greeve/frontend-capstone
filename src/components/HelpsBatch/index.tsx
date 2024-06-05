/* eslint-disable @typescript-eslint/no-explicit-any */
interface HelpsProps {
  image: string;
  name: string;
  className: string;
}
const Helps = ({ image, name, className }: HelpsProps) => {
  return (
    <div className={`bg-[#FFFFFF] rounded-md p-[10px] w-auto h-[56px] shadow-lg flex gap-2 justify-center items-center ${className}`}>
      <div className="bg-primary-500 rounded-md flex justify-center items-center w-[36px] h-[36px]">
        <img className="w-[28px] h-[28px]" src={image} alt={`${name} icon`} />
      </div>
      <div className="w-auto">
        <p className="text-neutral-600 text-[10px] font-normal">Challenge Impact</p>
        <h6 className="text-neutral-900 text-[14px] font-bold">{name}</h6>
      </div>
    </div>
  );
};

export default Helps;
