import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase.config";
import { useEffect, useState } from "react";

function GetFromDatabase() {
  const [users, setUsers] = useState<{ id: string }[]>([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      {users.map((user: any) => {
        return (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
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
