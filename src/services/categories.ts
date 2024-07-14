import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

const categoriesCollectionRef = collection(db, "categories");

export async function getCategories() {
  const list = await getDocs(categoriesCollectionRef);
  // try catch block
  return list;
}
