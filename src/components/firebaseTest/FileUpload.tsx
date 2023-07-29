import { useState } from "react";
import { storage } from "../../services/firebase.config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const uploadFile = () => {
    if (!file) return;

    const fileRef = ref(storage, `files/${file.name + v4()}`);
    uploadBytes(fileRef, file).then(() => {
      alert("File uploaded successfully!");
    });
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <input
        type="file"
        onChange={(event: any) => setFile(event.target.files[0])}
      />
      <button className="p-3 rounded-lg" onClick={uploadFile}>
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
