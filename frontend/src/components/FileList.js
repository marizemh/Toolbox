// frontend/src/components/FileList.js
import React, { useEffect, useState } from 'react';
import { getFilesData } from '../api';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFilesData();
      setFiles(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {files.map((file) => (
        <div key={file.file} className="card mb-3">
          <div className="card-header">{file.file}</div>
          <ul className="list-group list-group-flush">
            {file.lines.map((line, index) => (
              <li key={index} className="list-group-item">
                Text: {line.text}, Number: {line.number}, Hex: {line.hex}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FileList;
