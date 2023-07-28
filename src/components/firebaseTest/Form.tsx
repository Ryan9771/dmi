import getStyle from "../../Styles";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase.config";
import { useState } from "react";

function Form() {
  const collectionRef = collection(db, "userInfo");

  async function submitHandler(e: any) {
    e.preventDefault();

    try {
      const target = e.target;
      await addDoc(collectionRef, {
        firstName: target.fname.value,
        lastName: target.lname.value,
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={submitHandler}>
        <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
