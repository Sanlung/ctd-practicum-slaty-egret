const AddNewEntryForm = ({addFunc, children}) => (
  <div>
    <button type='button' onClick={addFunc}>
      {children}
    </button>
  </div>
);

export default AddNewEntryForm;
