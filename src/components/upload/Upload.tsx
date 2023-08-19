import getStyle from "../../Styles";
import { useEffect, useState } from "react";
import { storage } from "../../services/firebase.config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  StorageReference,
} from "firebase/storage";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [activeFileRef, setActiveFileRef] = useState<string>("");

  /* References */
  const activeFileLocation = ref(storage, "active/");
  const archiveFileLocation = ref(storage, "archive/");
  const otherFileLocation = ref(storage, "others/");

  useEffect(() => {
    listAll(activeFileLocation).then((response) => {
      response.items.forEach((item: StorageReference) =>
        setActiveFileRef(item.name)
      );
    });
  }, [file]);
  /* 
    
    1. Get everything in the active directory on firebase
    2. On upload, check if file matches type and name
        2a. If it doesnt, then upload to others
        2b. If it does, then check if the file exists in the active directory
            2b1. If it does, then move that file to archive
            2b2. Upload the new file to active
        
    
    */
  const uploadFile = () => {
    if (!file) return;

    if (file.type !== "text/csv") {
      return;
    }
  };

  return <p>This is the upload component</p>;
}

export default Upload;
