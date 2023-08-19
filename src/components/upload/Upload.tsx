import getStyle from "../../Styles";
import { useEffect, useState } from "react";
import { storage } from "../../services/firebase.config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  StorageReference,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { FileEarmarkText } from "react-bootstrap-icons";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [activeFileRef, setActiveFileRef] = useState<string>("");
  const activeFileLocation = ref(storage, "active/");

  useEffect(() => {
    listAll(activeFileLocation).then((response) => {
      response.items.forEach((item: StorageReference) =>
        setActiveFileRef(item.name)
      );
    });
  }, [file]);

  const uploadFile = () => {
    if (!file || file.type !== "text/csv") return;
    const fileRef = ref(storage, `active/${file.name}`);

    /* If there is an active file, move it to archive */
    if (activeFileRef) {
      const srcFileRef = ref(storage, `active/${activeFileRef}`);
      const destFileRef = ref(storage, `archive/${activeFileRef + v4()}`);
      getDownloadURL(srcFileRef)
        .then((url) => fetch(url))
        .then((response) => response.blob())
        .then((blob) => uploadBytes(destFileRef, blob))
        .then(() => deleteObject(srcFileRef))
        .then(() => console.log("File moved and deleted"))
        .catch((error) => console.log("Error moving file: ", error));
    }
    // Upload file to active directory
    uploadBytes(fileRef, file).then(() => {
      setActiveFileRef(file.name);
    });
  };

  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "uploadCtn")}>
        <input
          type="file"
          id="fileUpload"
          accept=".csv"
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
          <button
            onClick={uploadFile}
            className={getStyle(styles, "uploadBtn")}
          >
            Upload
          </button>
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
    "text-sm",
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

export default Upload;
