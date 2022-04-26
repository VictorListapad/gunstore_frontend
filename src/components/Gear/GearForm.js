import HolsterForm from "./HolsterForm";
import KnifeForm from "./KnifeForm";

const GearForm = ({ gear, cbHandleChange }) => {
  return (
    <>
      {gear.preciseType === "Knife" ? (
        <KnifeForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : gear.preciseType === "Holster" ? (
        <HolsterForm gear={gear} cbHandleChange={cbHandleChange} />
      ) : null}
    </>
  );
};

export default GearForm;
