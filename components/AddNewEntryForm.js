const AddNewEntryForm = ({entryType, addFunc}) => (
  <div>
    <button type='button' onClick={addFunc}>
      {/* <FontAwesomeIcon icon={faPlus} /> */}Add {entryType}
    </button>
  </div>
);

export default AddNewEntryForm;
