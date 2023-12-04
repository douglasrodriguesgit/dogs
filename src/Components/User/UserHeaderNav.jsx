import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatiscas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import UseMedia from "../Login/Hooks/UseMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const mobile = UseMedia("(max-width: 40rem)");
  console.log(mobile);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {" "}
        </button>
      )}

      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          {" "}
          <Estatiscas />
          {mobile && "Estatísticas"}{" "}
        </NavLink>

        <NavLink to="/conta/postar">
          {" "}
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}{" "}
        </NavLink>

        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
