import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader color="#1C6758" size={50} />
    </div>
  );
};

export default Loading;