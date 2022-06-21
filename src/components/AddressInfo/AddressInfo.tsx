import { FC } from "react";
import Divider from "../Divider/Divider";
import InfoCell from "../InfoCell/InfoCell";

interface IInfo {
  className?: string;
  ipAddress?: string;
  location?: string;
  timezone?: string;
  isp?: string;
}

const AddressInfo: FC<IInfo> = ({
  className,
  ipAddress,
  location,
  timezone,
  isp,
}) => {
  return (
    <div
      className={`${className} bg-white flex rounded-2xl shadow-md flex-col xs:flex-row xs:items-center`}>
      <InfoCell title="Ip address" data={ipAddress ? ipAddress : "None"} />
      <Divider />
      <InfoCell title="Location" data={location ? location : "None"} />
      <Divider />
      <InfoCell title="Timezone" data={timezone ? timezone : "None"} />
      <Divider />
      <InfoCell title="ISP" data={isp ? isp : "None"} />
    </div>
  );
};

export default AddressInfo;
