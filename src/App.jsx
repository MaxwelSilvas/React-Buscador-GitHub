import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return (
    <>
      <Perfil
        nome="Maxwel Silva"
        endereco="https://github.com/MaxwelSilvas.png"
      />
      <ReposList />

      {/* {formularioEstaVisivel && <Formulario />} */}

      {/* <button */}
        {/* onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} */}
        {/* type="button" */}
      {/* > */}
        {/* {" "} */}
        {/* toggle form */}
      {/* </button> */}
    </>
  );
}

export default App;
