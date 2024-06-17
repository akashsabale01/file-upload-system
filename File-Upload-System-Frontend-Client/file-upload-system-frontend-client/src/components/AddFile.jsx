import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileUploadService from '../services/FileUploadService';

const AddFile = () => {
  const [fileName, setFileName] = useState('');
  const [fileData, setfileData] = useState(null);

  const navigate = useNavigate();

  const onFileChange = (e) => {
    setfileData(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const file = { fileName, fileData };
    console.log("file -> ", file);

    try {
      await FileUploadService.createFile(file);
      console.log("added file");
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{width:"50vw"}}>
      <h2>Add Product</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>FileName</label>
          <input type="text" className="form-control" value={fileName} onChange={(e) => setFileName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>File</label>
          <input type="file" className="form-control" onChange={onFileChange} />
        </div>

        <button type="submit" className="btn btn-primary mt-2">Add</button>
      </form>
    </div>
  );
};

export default AddFile;
