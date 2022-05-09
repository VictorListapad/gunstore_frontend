const OpticsSpecTable = ({ opticsObj }) => {
  return (
    <>
      <h3>Specifications</h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th className="spec-name">Availability</th>
            <th className="odd-row">{opticsObj.availability}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="spec-name">Model</td>
            <td className="even-row">{opticsObj.model}</td>
          </tr>
          <tr>
            <td className="spec-name">Manufacturer</td>
            <td className="odd-row">{opticsObj.manufacturer}</td>
          </tr>
          <tr>
            <td className="spec-name">Color</td>
            <td className="even-row">{opticsObj.color}</td>
          </tr>
          <tr>
            <td className="spec-name">Material</td>
            <td className="odd-row">{opticsObj.material}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Length</td>
            <td className="even-row">{opticsObj.overallLength}</td>
          </tr>
          <tr>
            <td className="spec-name">Overall Width</td>
            <td className="odd-row">{opticsObj.overallWidth}</td>
          </tr>
          <tr>
            <td className="spec-name">Weight</td>
            <td className="even-row">{opticsObj.weight}</td>
          </tr>
          <tr>
            <td className="spec-name">Attachment Type</td>
            <td className="odd-row">{opticsObj.attachmentType}</td>
          </tr>
          <tr>
            <td className="spec-name">Battery</td>
            <td className="even-row">{opticsObj.battery}</td>
          </tr>
          <tr>
            <td className="spec-name">Price</td>
            <td className="odd-row">${opticsObj.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OpticsSpecTable;
