import React from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import usefetch from "../Login/Hooks/usefetch";
import { COMMENT_POST } from "../../api";

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = usefetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    await request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(target) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
