import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase.config";
import { useEffect, useState } from "react";

function GetFromDatabase() {
  const [users, setUsers] = useState<{ id: string }[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const usersCollectionRef = collection(db, "users");

  const updateUser = async (id: string, age: number) => {
    const userDoc = doc(db, "users", id);
    const newValues = { age: age + 1 };
    await updateDoc(userDoc, newValues);
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [reload]);

  return (
    <div>
      {users.map((user: any) => {
        return (
          <div className="flex items-center justify-center gap-3 my-5 ml-3">
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
                setReload(!reload);
              }}
            >
              Increment Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

// function Form() {
//   const collectionRef = collection(db, "userInfo");

//   async function submitHandler(e: any) {
//     e.preventDefault();

//     try {
//       const target = e.target;
//       await addDoc(collectionRef, {
//         firstName: target.fname.value,
//         lastName: target.lname.value,
//       });
//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <div>
//       <form className="flex flex-col items-center" onSubmit={submitHandler}>
//         <label htmlFor="fname">First name: </label>
//         <input type="text" id="fname" />
//         <label htmlFor="lname">Last name:</label>
//         <input type="text" id="lname" />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

export default GetFromDatabase;
