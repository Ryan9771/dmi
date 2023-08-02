import { useEffect, useState } from "react";
import { storage } from "../../services/firebase.config";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";
import { FileEarmarkText } from "react-bootstrap-icons";
import getStyle from "../../Styles";

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
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "uploadCtn")}>
        <input
          type="file"
          id="fileUpload"
          accept=".csv, .xlsx"
          onChange={(event: any) => setFile(event.target.files[0])}
          className="hidden"
        />

        <div className={getStyle(styles, "uploadSubCtn")}>
          <label htmlFor="fileUpload">
            <FileEarmarkText className={getStyle(styles, "icon")} />
          </label>

          {!file && (
            <p className={getStyle(styles, "uploadText")}>
              Upload a .csv or .xlsx file
            </p>
          )}

          {file && (
            <p className={getStyle(styles, "uploadText")}>{file.name}</p>
          )}
        </div>

        {file && (
          <button className={getStyle(styles, "uploadBtn")}>Upload</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  ctn: ["w-full", "h-full", "flex", "justify-center", "items-center"],
  uploadCtn: [
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "rounded-lg",
    "gap-6",
    "bg-button-gray",
    "border-[4px]",
    "border-imperial-blue",
    "w-80",
    "sm:w-96",
    "h-60",
    "shadow-md",
    "trans",
  ],
  uploadBtn: [
    "bg-imperial-blue",
    "text-white",
    "rounded-md",
    "px-3",
    "py-1",
    "font-normal",
    "shadow-sm",
    "hover:scale-110",
  ],
  uploadSubCtn: ["flex", "flex-col", "items-center", "gap-4"],
  icon: [
    "fill-imperial-blue",
    "w-10",
    "h-10",
    "cursor-pointer",
    "hover:scale-110",
    "trans",
  ],
  uploadText: ["font-semibold", "text-md"],
};

export default FileUpload;

// <div className="flex flex-col items-center gap-5">

//   <div className="flex flex-col gap-3 items-center">
//     {fileRefs.map((fileReference) => {
//       return <div>Url: {fileReference}</div>;
//     })}
//   </div>
// </div>
