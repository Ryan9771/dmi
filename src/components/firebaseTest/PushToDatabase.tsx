import { useState } from "react";
import { db } from "../../services/firebase.config";
import { collection, addDoc } from "firebase/firestore";

function PushToDatabase() {
  const [newName, setNewName] = useState<string>("");
  const [newAge, setNewAge] = useState<number>(0);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: newAge,
    });
  };

  return (
    <div>
      <input
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        placeholder="Enter your name"
        type="text"
      />
      <input
        onChange={(event) => setNewAge(parseInt(event.target.value))}
        type="number"
        placeholder="Enter your age"
      />

      <button onClick={createUser}>Submit</button>
    </div>
  );
}

export default PushToDatabase;
