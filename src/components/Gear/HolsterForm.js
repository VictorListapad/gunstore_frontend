const HolsterForm = ({ gear, cbHandleChange }) => {
  return (
    <>
      <label htmlFor="model">
        Model<span>*</span>
      </label>
      <input
        id="model"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="model"
        placeholder="model"
        value={gear.model}
        required
      />
      <label htmlFor="newProduct">
        New Product<span>*</span>
      </label>
      <select
        id="newProduct"
        className="form-control"
        name="newProduct"
        onChange={cbHandleChange}
        defaultValue={gear.newProduct}
        required
      >
        <option value="" disabled>
          Is it a new product
        </option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <label htmlFor="availability">
        Availability<span>*</span>
      </label>
      <select
        id="availability"
        className="form-control"
        name="availability"
        onChange={cbHandleChange}
        defaultValue={gear.availability}
        required
      >
        <option value="">Choose availability</option>
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>
      <label htmlFor="manufacturer">
        Manufacturer<span>*</span>
      </label>
      <input
        id="manufacturer"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="manufacturer"
        placeholder="manufacturer"
        value={gear.manufacturer}
        required
      />
      <label htmlFor="shortDescription">
        Short Description<span>*</span>
      </label>
      <textarea
        rows={5}
        id="shortDescription"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name={"shortDescription"}
        placeholder="shortDescription"
        value={gear.shortDescription}
        required
      />
      <label htmlFor="fullDescription">
        Full Description<span>*</span>
      </label>
      <textarea
        rows={5}
        id="fullDescription"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="fullDescription"
        placeholder="fullDescription"
        value={gear.fullDescription}
        required
      />
      <label htmlFor="features">Features (Separate with Comma)</label>
      <textarea
        rows={5}
        id="features"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name={"features"}
        placeholder="features"
        value={gear.features}
      />
      <label htmlFor="material">
        Material<span>*</span>
      </label>
      <input
        id="material"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="material"
        placeholder="material"
        value={gear.material}
      />
      <label htmlFor="color">
        Color<span>*</span>
      </label>
      <input
        id="color"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="color"
        placeholder="color"
        value={gear.color}
      />
      <label htmlFor="price">
        Price<span>*</span>
      </label>
      <input
        id="price"
        className="form-control"
        type="number"
        onChange={cbHandleChange}
        name="price"
        placeholder="price"
        value={gear.price}
        required
      />
      <label htmlFor="titleImg">
        TitleImg<span>*</span>
      </label>
      <input
        id="titleImg"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="titleImg"
        placeholder="titleImg"
        value={gear.titleImg}
        required
      />
      <label htmlFor="extraImg1">ExtraImg1</label>
      <input
        id="extraImg1"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="extraImg1"
        placeholder="extraImg1"
        value={gear.extraImg1}
      />
      <label htmlFor="extraImg2">ExtraImg2</label>
      <input
        id="extraImg2"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="extraImg2"
        placeholder="extraImg2"
        value={gear.extraImg2}
      />
      <label htmlFor="extraImg3">ExtraImg3</label>
      <input
        id="extraImg3"
        className="form-control"
        type="text"
        onChange={cbHandleChange}
        name="extraImg3"
        placeholder="extraImg3"
        value={gear.extraImg3}
      />
    </>
  );
};

export default HolsterForm;
