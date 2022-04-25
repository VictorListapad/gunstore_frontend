const AmmunitionSpecTable = ({ ammo }) => {
  return (
    <>
      <h3>Specifications</h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{ammo.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="even-row">{ammo.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Caliber</td>
            <td className="odd-row">{ammo.caliber}</td>
          </tr>
          <tr>
            <td className="spec-name">Ammo Type</td>
            <td className="even-row">{ammo.ammoType}</td>
          </tr>
          <tr>
            <td className="spec-name">Grain Weight</td>
            <td className="odd-row">{ammo.grainWeight} gr</td>
          </tr>
          <tr>
            <td className="spec-name">Qty Per Package</td>
            <td className="even-row">{ammo.qtyPerPackage}</td>
          </tr>
          <tr>
            <td className="spec-name">Muzzle Velocity</td>
            <td className="odd-row">{ammo.muzzleVelocity} fps</td>
          </tr>
          <tr>
            <td className="spec-name">Muzzle Energy</td>
            <td className="even-row">{ammo.muzzleEnergy} ft-lb</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AmmunitionSpecTable;
