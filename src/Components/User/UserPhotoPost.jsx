import React from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from "../Login/Hooks/useForm";
import useFetch from "../Login/Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChangeImg({target}) {
    setImg({
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onSubmit={handleChangeImg} />
        <Button>Enviar </Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
