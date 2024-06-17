import React, { useEffect, useState } from "react";
import FileUploadService from "../services/FileUploadService";
import { Link, useNavigate } from "react-router-dom";

const ShowFiles = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    const result = await FileUploadService.getAllFiles();
    setFiles(result.data);
  };

  return (
    <div>
      <h2>File List</h2>
      <Link to="/add-file" className="btn btn-primary mb-2">
        Add File
      </Link>
      <table className="table" style={{width:"50vw"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>FileData</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.fileName}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${file.fileData}`}
                  alt={file.fileName}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowFiles;
