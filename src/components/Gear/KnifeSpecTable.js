const KnifeSpecTable = ({ knifeObj }) => {
  return (
    <>
      <h3>Specifications</h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{knifeObj.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{knifeObj.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{knifeObj.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Length</td>
            <td className="even-row">{knifeObj.overallLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Width</td>
            <td className="odd-row">{knifeObj.overallWidth}</td>
          </tr>
          <tr>
            <td className="spec-name">Weight</td>
            <td className="even-row">{knifeObj.weight}</td>
          </tr>
          <tr>
            <td className="spec-name">Color</td>
            <td className="odd-row">{knifeObj.color}</td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="even-row">${knifeObj.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default KnifeSpecTable;
