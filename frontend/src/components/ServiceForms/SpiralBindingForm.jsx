import React, { useState } from 'react';

const SpiralBindingForm = ({ formData, handleInputChange }) => {
  const [noteExceedsLimit, setNoteExceedsLimit] = useState(false);

  // Enhanced input change handler to enforce 200-char limit on note
  const handleNoteChange = (e) => {
    const { name, value } = e.target;

    if (name === 'note' && value.length > 100) {
      setNoteExceedsLimit(true);
    } else {
      setNoteExceedsLimit(false);
      handleInputChange(e);
    }
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Total Pages</label>
        <input
          type="number"
          id="noOfPages"
          name="noOfPages"
          value={formData.noOfPages}
          // onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter number of pages"
          readOnly
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Number of Copies</label>
        <input
          type="number"
          id="noOfCopies"
          name="noOfCopies"
          value={formData.noOfCopies}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter number of copies"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Printing Color</label>
        <select
          id="printColor"
          name="printColor"
          value={formData.printColor}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 bg-white"
          required
        >
          <option value="BW">Black and White</option>
          <option value="AllColor">All Colors</option>
          <option value="BWandColorMix">B/W and Color Mix</option>
        </select>
      </div>

      {formData.printColor === 'BWandColorMix' && (
        <div id="colorPagesNosDiv" className="mb-4">
          <label className="block text-sm font-medium mb-1">Color Pages Number</label>
          <input
            type="text"
            id="colorPagesNos"
            name="colorPagesNos"
            value={formData.colorPagesNos}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter the page numbers of color pages"
          />
          <p className="text-sm font-semibold text-blue-600">
            Enter page numbers separated by commas.<br /> Ex: 1, 5, 7, 15, 45 etc.
          </p>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Printing Sides</label>
        <select
          id="printSides"
          name="printSides"
          value={formData.printSides}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 bg-white"
          required
        >
          <option value="SingleSide">Single Side</option>
          <option value="BothSides">Both Sides</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Outer Cover Color</label>
        <select
          id="outerCoverColor"
          name="outerCoverColor"
          value={formData.outerCoverColor}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2 bg-white"
          required
        >
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
        </select>
        <p className="text-sm font-semibold text-blue-600">
            select only, if you want a specific color else the available color will be used
          </p>
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Additional Note</label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleNoteChange}
          className="w-full border rounded px-3 py-2"
          rows={5}
          placeholder="Write any instruction you want to give (max 100 characters)"
        />
        {noteExceedsLimit && (
          <p className="text-red-600 font-semibold text-sm mt-1">Note cannot exceed 100 characters.</p>
        )}
      </div>
    </>
  );
};

export default SpiralBindingForm;
