import { useEffect, useState } from "react";
import { storage } from "../../services/firebase.config";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileRefs, setFileRefs] = useState<string[]>([]);

  const filesListRef = ref(storage, "files/");

  const uploadFile = () => {
    if (!file) return;

    const fileRef = ref(storage, `files/${file.name + v4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      // Entering here means file uploaded successfully
      getDownloadURL(snapshot.ref).then((url) => {
        setFileRefs((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(filesListRef).then((response) => {
      response.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setFileRefs((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center justify-center gap-4">
        <input
          type="file"
          onChange={(event: any) => setFile(event.target.files[0])}
        />
        <button className="p-3 rounded-lg" onClick={uploadFile}>
          Upload
        </button>
      </div>

      <div className="flex flex-col gap-3 items-center">
        {fileRefs.map((fileReference) => {
          return <div>Url: {fileReference}</div>;
        })}
      </div>
    </div>
  );
}

export default FileUpload;
