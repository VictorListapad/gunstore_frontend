const HolsterSpecTable = ({ holsterObj }) => {
  return (
    <>
      <h3>Specifications</h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{holsterObj.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{holsterObj.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{holsterObj.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Color</td>
            <td className="even-row">{holsterObj.color}</td>
          </tr>
          <tr>
            <td className="spec-name">Material</td>
            <td className="odd-row">{holsterObj.material}</td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="even-row">${holsterObj.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HolsterSpecTable;
