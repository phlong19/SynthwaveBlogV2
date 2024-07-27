import { getCategories } from "@/services/firebase/categories";
import { useQuery } from "@tanstack/react-query";

function Categories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data || error) {
    return <p>error: {error?.message} </p>;
  }

  return (
    <div>
      {data.map((i) => (
        <div key={i.id}>
          <p>
            {i.displayName} - {i.name}
          </p>
          <label htmlFor="data">Data:</label>
          <textarea id="data">{JSON.stringify(data, undefined, 2)}</textarea>
        </div>
      ))}
    </div>
  );
}

export default Categories;
