import { useGoBack } from "@/hooks/useGoBack";
import { IconChevronsLeft } from "@tabler/icons-react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { slug } = useParams();
  const goback = useGoBack();

  return (
    <div className="inset-0 flex h-screen items-center justify-center gap-14">
      <button onClick={goback}>
        <IconChevronsLeft /> go back
      </button>
      <p>{slug}</p>
    </div>
  );
}

export default PostDetails;
