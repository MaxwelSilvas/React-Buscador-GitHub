import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState(0);

  useEffect(() => {
    console.log("O componente finalizou");
    return () => {
      console.log("O componente finalizou");
    };
  }, []);

  useEffect(() => {
    console.log("Hello");
  }, [nome]);

  useEffect(() => {
    console.log("A nota da Matéria A é :" + materiaA);
  }, [materiaA, materiaB, materiaC]);

  const alteraNome = (evento) => {
    // console.log(evento.target.value);
    // setNome(evento.target.value);
    setNome((estadoAnterior) => {
      // console.log(estadoAnterior);
      return evento.target.value;
    });
  };

  const rendereziaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, você não foi aprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota Matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota Matéria B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota Matéria C"
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
      />
      <p>O aluno foi aprovado</p>
      {rendereziaResultado()}
    </form>
  );
};

export default Formulario;
