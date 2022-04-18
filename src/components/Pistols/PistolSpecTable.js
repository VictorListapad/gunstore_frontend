const PistolSpecTable = ({ pistol }) => {
  return (
    <>
      <h1>Specifications</h1>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{pistol.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{pistol.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{pistol.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Sku</td>
            <td className="even-row">{pistol.sku}</td>
          </tr>
          <tr>
            <td className="spec-name">Caliber</td>
            <td className="odd-row">{pistol.caliber}</td>
          </tr>
          <tr>
            <td className="spec-name">Mags Included</td>
            <td className="even-row">{pistol.magsIncluded}</td>
          </tr>
          <tr>
            <td className="spec-name">Sights</td>
            <td className="odd-row">{pistol.sights}</td>
          </tr>
          <tr>
            <td className="spec-name">State Compliant</td>
            <td className="even-row">{pistol.statesCompliant}</td>
          </tr>
          <tr>
            <td className="spec-name">Threaded Barrel</td>
            <td className="odd-row">{pistol.threadedBarrel}</td>
          </tr>
          <tr>
            <td className="spec-name">Pistol Size</td>
            <td className="even-row">{pistol.size}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Length</td>
            <td className="odd-row">{pistol.overallLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Width</td>
            <td className="even-row">{pistol.overallWidth}</td>
          </tr>
          <tr>
            <td className="spec-name">Height</td>
            <td className="odd-row">{pistol.height}</td>
          </tr>
          <tr>
            <td className="spec-name">Barrel Length</td>
            <td className="even-row">{pistol.barrelLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Weight</td>
            <td className="odd-row">{pistol.weight}</td>
          </tr>
          <tr>
            <td className="spec-name">Sight Radius</td>
            <td className="even-row">{pistol.sightRadius}</td>
          </tr>
          <tr>
            <td className="spec-name">Accessory Rail</td>
            <td className="odd-row">{pistol.accessoryRail}</td>
          </tr>
          <tr>
            <td className="spec-name">Trigger Action</td>
            <td className="even-row">{pistol.triggerAction}</td>
          </tr>
          <tr>
            <td className="spec-name">Trigger Type</td>
            <td className="odd-row">{pistol.triggerType}</td>
          </tr>
          <tr>
            <td className="spec-name">Grip Module</td>
            <td className="even-row">{pistol.gripModule}</td>
          </tr>
          <tr>
            <td className="spec-name">Grip Type</td>
            <td className="odd-row">{pistol.gripType}</td>
          </tr>
          <tr>
            <td className="spec-name">Grip Color</td>
            <td className="even-row">{pistol.gripColor}</td>
          </tr>
          <tr>
            <td className="spec-name">Barrel Material</td>
            <td className="odd-row">{pistol.barrelMaterial}</td>
          </tr>
          <tr>
            <td className="spec-name">Frame Finish</td>
            <td className="even-row">{pistol.frameFinish}</td>
          </tr>
          <tr>
            <td className="spec-name">Frame Material</td>
            <td className="odd-row">{pistol.frameMaterial}</td>
          </tr>
          <tr>
            <td className="spec-name">Fcu Finish</td>
            <td className="even-row">{pistol.fcuFinish}</td>
          </tr>
          <tr>
            <td className="spec-name">Fcu Material</td>
            <td className="odd-row">{pistol.fcuMaterial}</td>
          </tr>
          <tr>
            <td className="spec-name">Slide Finish</td>
            <td className="even-row">{pistol.slideFinish}</td>
          </tr>
          <tr>
            <td className="spec-name">Slide Material</td>
            <td className="odd-row">{pistol.slideMaterial}</td>
          </tr>
          <tr>
            <td className="spec-name">Manual Safety</td>
            <td className="even-row">{pistol.manualSafety}</td>
          </tr>
          <tr>
            <td className="spec-name">Optic Ready</td>
            <td className="odd-row">{pistol.opticReady}</td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="even-row">{`$${pistol.price}`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PistolSpecTable;
