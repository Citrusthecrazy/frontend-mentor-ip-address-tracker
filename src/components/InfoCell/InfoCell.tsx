import { FC } from "react";

interface ICell {
  title: string;
  data: string;
}

const InfoCell: FC<ICell> = ({ title, data }) => {
  const shortenName = (name: string): string => {
    let shortenedName = name;
    if (name.length >= 30) {
      shortenedName = name.substring(0, 25) + "...";
    }
    return shortenedName;
  };
  return (
    <div className="flex flex-col py-3 xs:px-8 xs:py-10 text-center xs:text-left">
      <p className="uppercase text-darkGray text-sm xs:text-sm">{title}</p>
      <h1 className="text-veryDarkGray font-bold text-lg xs:text-2xl">
        {shortenName(data)}
      </h1>
    </div>
  );
};

export default InfoCell;
