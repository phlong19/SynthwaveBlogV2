import { db } from "@/services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Categories() {
  const [list, setList] = useState([]);

  const ref = collection(db, "categories");

  useEffect(() => {
    async function getList() {
      try {
        const querySnapshot = await getDocs(ref);
        console.log(querySnapshot.docs);
        const list = querySnapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setList(list as any);
      } catch (error) {
        console.log(error);
      }
    }

    getList();
  }, []);

  if (list.length < 1) {
    return <p>loading...</p>;
  }
  console.log(list);
  return (
    <div>
      {list.map((i: any) => (
        <div key={i.id}>
          <p>
            {i.displayName} - {i.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
