// Utils
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#01b0c8"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#a5fd91"
      strokeWidth={2}
      strokeWidthSecondary={1}
    />
  );
};
