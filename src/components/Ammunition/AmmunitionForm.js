const EditAmmunitionForm = ({ ammo, cbHandleChange, cbHandleSubmit }) => {
  return (
    <form onSubmit={cbHandleSubmit} className="form-control firearm-form">
      <h1>
        {window.location.href.includes(`/add`)
          ? `Add Ammunition`
          : `Edit Ammunition`}
      </h1>
      {Object.entries(ammo).map((paramName, index) =>
        paramName[0] === "shortDescription" ||
        paramName[0] === "fullDescription" ? (
          <div key={index}>
            <label htmlFor={paramName[0]}>
              {paramName[0]}
              <span>*</span>
            </label>
            <textarea
              className="form-control"
              rows={5}
              type={typeof paramName[1]}
              placeholder={paramName[0]}
              name={paramName[0]}
              value={ammo[paramName[0]]}
              onChange={cbHandleChange}
              id={paramName[0]}
              required
            />
          </div>
        ) : (
          <div key={index}>
            {paramName[0] === "type" ||
            paramName[0] === "_id" ||
            paramName[0] === "__v" ? null : (
              <label htmlFor={paramName[0]}>
                {paramName[0]}
                {paramName[0] !== "extraImg1" &&
                paramName[0] !== "extraImg2" &&
                paramName[0] !== "extraImg3" ? (
                  <span>*</span>
                ) : null}
              </label>
            )}
            {paramName[0] === "availability" ? (
              <select
                className="form-control"
                name={paramName[0]}
                id={paramName[0]}
                onChange={cbHandleChange}
                defaultValue={ammo[paramName[0]]}
                required
              >
                <option value="" disabled>
                  Choose availability
                </option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            ) : paramName[0] === "type" ||
              paramName[0] === "_id" ||
              paramName[0] === "__v" ? null : paramName[0] !== "extraImg1" &&
              paramName[0] !== "extraImg2" &&
              paramName[0] !== "extraImg3" ? (
              <input
                className="form-control"
                type={typeof paramName[1]}
                placeholder={paramName[0]}
                name={paramName[0]}
                value={ammo[paramName[0]]}
                onChange={cbHandleChange}
                id={paramName[0]}
                required
              />
            ) : (
              <input
                className="form-control"
                type={typeof paramName[1]}
                placeholder={paramName[0]}
                name={paramName[0]}
                value={ammo[paramName[0]]}
                onChange={cbHandleChange}
                id={paramName[0]}
              />
            )}
          </div>
        )
      )}
      <button className="btn edit-btn">Submit</button>
    </form>
  );
};

export default EditAmmunitionForm;
