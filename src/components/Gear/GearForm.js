import BagForm from "./BagForm";
import EyeEarProtectionForm from "./EyeEarProtectionForm";
import HolsterForm from "./HolsterForm";
import KnifeForm from "./KnifeForm";
import OpticsForm from "./OpticsForm";
import VestForm from "./VestForm";

const GearForm = ({ gear, cbHandleChange }) => {
  return (
    <>
      {gear.preciseType === "Knife" ? (
        <KnifeForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "Optics" ? (
        <OpticsForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "Holster" ? (
        <HolsterForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "Bag" ? (
        <BagForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "EarAndEyeProtection" ? (
        <EyeEarProtectionForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "Vest" || gear.preciseType === "PlateCarrier" ? (
        <VestForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : null}
    </>
  );
};

export default GearForm;
