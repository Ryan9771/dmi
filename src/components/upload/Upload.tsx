import getStyle from "../../Styles";
import { useEffect, useState } from "react";
import { storage } from "../../services/firebase.config";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [activeFileRefs, setActiveFileRefs] = useState<string[]>([]);
  const activeFileListRef = ref(storage, "active/");

  useEffect(() => {}, [file]);
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
  };
}

export default Upload;
