import { useAuth } from "../../context/global";
import { useEffect } from "react";

const Home = function () {
  const { setTitlePage } = useAuth();

  useEffect(() => {
    setTitlePage("Início");
  }, [setTitlePage]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1>BEM VINDO!</h1>
    </div>
  );
};

export default Home;
