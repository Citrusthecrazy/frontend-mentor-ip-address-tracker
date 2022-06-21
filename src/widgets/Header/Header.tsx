import axios from "axios";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import Input from "../../components/Input/Input";
import { ICoords, SearchData } from "../../types";
import { validateIpAddress } from "../../util/functions";

interface IHeader {
  setCoords: Dispatch<SetStateAction<ICoords | null | undefined>>;
}

const Header: FC<IHeader> = ({ setCoords }) => {
  const [ipAddressValue, setIpAddresValue] = useState("");
  const [data, setData] = useState<SearchData | null>();
  const handleSearchIp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateIpAddress(ipAddressValue)) {
      alert("Wrong IP address");
      setIpAddresValue("");
      return;
    }
    const { data: result } = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddressValue}`
    );
    setCoords({ lat: result?.location.lat, lon: result?.location.lon });
    setData({
      ipAddress: result.ip,
      location: result.location.city,
      timezone: result.location.timezone,
      isp: result.isp,
    });
  };
  return (
    <div className=" z-10 relative h-[35%] bg-headerImage bg-no-repeat bg-cover bg-center pt-9 flex flex-col items-center">
      <h1 className="text-white text-[1.5rem] font-semibold mb-8">
        IP Address Tracker
      </h1>
      <Input
        value={ipAddressValue}
        onChange={(e) => setIpAddresValue(e.target.value)}
        onSubmitHandler={(e) => handleSearchIp(e)}
      />
      <AddressInfo
        ipAddress={data?.ipAddress}
        location={data?.location}
        timezone={data?.timezone}
        isp={data?.isp}
        className="absolute bottom-[-12rem] overflow-hidden max-h-72 w-[87%] xs:bottom-[-18%]  xs:w-[77%] xs:max-h-40"
      />
    </div>
  );
};

export default Header;
