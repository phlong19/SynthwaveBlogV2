import { Category } from "@/model/model";
import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

const categoriesCollectionRef = collection(db, "categories");

export async function getCategories(): Promise<Category[]> {
  const querySnapshot = await getDocs(categoriesCollectionRef);

  const list = querySnapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Category, "id">), // nice
  }));

  return list;
}
