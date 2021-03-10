import { useEffect, useState } from "react";

const numerosApi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {
  const [numeros, setNumeros] = useState(numerosApi);
  const [llamando, setLlamando] = useState(false);

  const llamarOColgar = (e) => {
    e.preventDefault();
    e.target.className.includes("llamar") ? setLlamando(true) : setLlamando(false);
  };


  const marcarNumero = () => {
    console.log("hola");
  };
  const activoSiTiene9 = cifra => cifra.length === 9 ? " activo" : "";

  const colgarAuto = useEffect(() => {
    if (llamando === true) {
      setTimeout(() => setLlamando(false), 5000);

    }
  }, [llamando]);

  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span className={`mensaje${llamando ? "" : " off"}`}>Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              numeros.map(numero =>
                <li key={numero} className="numeros">
                  <button disabled={llamando} onClick={() => marcarNumero()}>{numero}</button></li>)
            }
            <li><button disabled={llamando} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">667359961</span>
          {/*   <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          {llamando ?
            <a href="colgar" className="colgar activo" onClick={llamarOColgar}>Colgar</a> :
            <a href="llamar" className={`llamar${activoSiTiene9("234234234")}`} onClick={llamarOColgar}>Llamar</a>
          }
          {/*  <!-- Sólo se tiene que ver un botón u otro --> */}
        </div>
      </main>
    </div >
  );
}

export default App;
