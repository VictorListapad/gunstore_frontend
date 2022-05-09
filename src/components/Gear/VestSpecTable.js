const VestSpecTable = ({ vestObj }) => {
  return (
    <>
      <h3>Specifications</h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{vestObj.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{vestObj.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{vestObj.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Color</td>
            <td className="even-row">{vestObj.color}</td>
          </tr>
          <tr>
            <td className="spec-name">Material</td>
            <td className="odd-row">{vestObj.material}</td>
          </tr>
          <tr>
            <td className="spec-name">Available Sizes</td>
            <td className="even-row">
              {vestObj.availableSizes
                .split(",")
                .map((size) => size)
                .join(`/`)}
            </td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="odd-row">${vestObj.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default VestSpecTable;
