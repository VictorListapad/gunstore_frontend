export const RifleSpecTable = ({ rifle }) => {
  return (
    <>
      <h1>Specifications</h1>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{rifle.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{rifle.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{rifle.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Sku</td>
            <td className="even-row">{rifle.sku}</td>
          </tr>
          <tr>
            <td className="spec-name">Caliber</td>
            <td className="odd-row">{rifle.caliber}</td>
          </tr>
          <tr>
            <td className="spec-name">Mags Included</td>
            <td className="even-row">{rifle.magsIncluded}</td>
          </tr>
          <tr>
            <td className="spec-name">Mag Type</td>
            <td className="odd-row">{rifle.magType}</td>
          </tr>
          <tr>
            <td className="spec-name">State Compliant</td>
            <td className="even-row">{rifle.statesCompliant}</td>
          </tr>
          <tr>
            <td className="spec-name">Action Type</td>
            <td className="odd-row">{rifle.actionType}</td>
          </tr>
          <tr>
            <td className="spec-name">Stock Type</td>
            <td className="even-row">{rifle.stockType}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Length</td>
            <td className="odd-row">{rifle.overallLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Width</td>
            <td className="even-row">{rifle.overallWidth}</td>
          </tr>
          <tr>
            <td className="spec-name">Height</td>
            <td className="odd-row">{rifle.height}</td>
          </tr>
          <tr>
            <td className="spec-name">Barrel Length</td>
            <td className="even-row">{rifle.barrelLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Weight</td>
            <td className="odd-row">{rifle.weight}</td>
          </tr>
          <tr>
            <td className="spec-name">Barrel Material</td>
            <td className="even-row">{rifle.barrelMaterial}</td>
          </tr>
          <tr>
            <td className="spec-name">Trigger Type</td>
            <td className="odd-row">{rifle.triggerType}</td>
          </tr>
          <tr>
            <td className="spec-name">Twist Rate</td>
            <td className="even-row">{rifle.twistRate}</td>
          </tr>
          <tr>
            <td className="spec-name">Foreend Type</td>
            <td className="odd-row">{rifle.foreendType}</td>
          </tr>
          <tr>
            <td className="spec-name">Grip Type</td>
            <td className="even-row">{rifle.gripType}</td>
          </tr>
          <tr>
            <td className="spec-name">Receiver Finish</td>
            <td className="odd-row">{rifle.receiverFinish}</td>
          </tr>
          <tr>
            <td className="spec-name">Threads</td>
            <td className="even-row">{rifle.threads}</td>
          </tr>
          <tr>
            <td className="spec-name">Accessory Rail</td>
            <td className="odd-row">{rifle.accessoryRail}</td>
          </tr>
          <tr>
            <td className="spec-name">Operating System</td>
            <td className="even-row">{rifle.operatingSystem}</td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="odd-row">{`$${rifle.price}`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RifleSpecTable;
