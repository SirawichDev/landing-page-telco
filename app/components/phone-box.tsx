import Bed from "app/components/icons/bed";
import type { FC } from "react";
interface PhoneBoxProps {
    className?: string
}
const PhoneBox: FC<PhoneBoxProps> = ({ className }) => {
  return (
    <div className={className}>
      <Bed className="bg-accent-hover rounded-xl p-2 text-accent-300" width={50} />
      <div className="flex flex-col">
        <span className="text-md font-heading">Phone</span>
        <span className="text-sm">+66986719271</span>
      </div>
    </div>
  );
};

export default PhoneBox;
