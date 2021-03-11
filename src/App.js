import { useEffect, useState } from "react";

const numerosApi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {

  const [llamando, setLlamando] = useState(false);
  const [numero, setNumero] = useState("");


  const llamarOColgar = (e) => {
    e.preventDefault();
    if (e.target.className.includes("llamar") && e.target.className.includes("activo")) {
      setLlamando(true);
      setTimeout(() => setLlamando(false), 5000);
    } else {
      setLlamando(false);
    }
  };

  const anyadirNumero = (valor) => {
    if (numero.length < 9) {
      setNumero(numero + valor);
    }
  };

  const borrarNumero = () => {
    setNumero(numero.slice(0, -1));
  };

  const activoSiTiene9 = numero => numero.length === 9 ? " activo" : "";

  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span className={`mensaje${llamando ? "" : " off"}`}>Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              numerosApi.map(numero =>
                <li key={numero}>
                  <button disabled={llamando} onClick={() => anyadirNumero(numero)}>{numero}</button></li>)
            }
            <li><button onClick={borrarNumero} disabled={llamando} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          {/*   <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          {llamando ?
            <a href="colgar" className="colgar activo" onClick={llamarOColgar}>Colgar</a> :
            <a href="llamar" className={`llamar${activoSiTiene9(numero)}`} onClick={llamarOColgar}>Llamar</a>
          }
          {/*  <!-- Sólo se tiene que ver un botón u otro --> */}
        </div>
      </main>
    </div >
  );
}

export default App;
