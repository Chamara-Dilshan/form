
import React, { useState } from 'react';

const AdminForm = () => {
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedInput, setSelectedInput] = useState('');

  const handleSelectChange = (event, index) => {
    const updatedInputs = [...selectedInputs];
    updatedInputs[index] = event.target.value;
    setSelectedInputs(updatedInputs);
  };

  const handleCreateBox = () => {
    setSelectedInputs([...selectedInputs, '']);
    setQuestions([...questions, '']);
    setOptions([...options, '']);
  };

  const handleRemoveBox = (index) => {
    const updatedInputs = [...selectedInputs];
    updatedInputs.splice(index, 1);
    setSelectedInputs(updatedInputs);

    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);

    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleSaveData = () => {
   
    console.log('Questions:', questions);
    console.log('Selected Inputs:', selectedInputs);
    console.log('Options:', options);
   
  };

  return (
    <div>
      <button onClick={handleCreateBox}>Create</button>

      {selectedInputs.map((input, index) => (
        <div key={index}>
          <label htmlFor={`question${index}`}>Question:</label>
          <input
            type="text"
            id={`question${index}`}
            value={questions[index]}
            onChange={(e) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index] = e.target.value;
              setQuestions(updatedQuestions);
            }}
          />

          <label htmlFor={`inputType${index}`}>Select an input type:</label>
          <select
            id={`inputType${index}`}
            onChange={(e) => handleSelectChange(e, index)}
            value={input}
          >
            <option value="">Select an option</option>
            <option value="text">Text Field</option>
            <option value="select">Select Box</option>
          </select>

          {input === 'select' && (
            <div>
              <label htmlFor={`options${index}`}>Options for Select Box:</label>
              <input
                type="text"
                id={`options${index}`}
                value={options[index]}
                onChange={(e) => {
                  const updatedOptions = [...options];
                  updatedOptions[index] = e.target.value;
                  setOptions(updatedOptions);
                }}
              />
            </div>
          )}

          <button onClick={() => handleRemoveBox(index)}>Close</button>
        </div>
      ))}

      <button onClick={handleSaveData}>Save Data</button>
    </div>
  );
};
export default AdminForm;
