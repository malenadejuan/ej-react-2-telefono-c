const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span className="mensaje">Llamando...</span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {numeros.map(numero => <li><button>{numero}</button></li>)}
            <li><button className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">667359961</span>
          {/*   <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          <a href="llamar" className="llamar">Llamar</a>
          {/*  <!-- Sólo se tiene que ver un botón u otro --> */}
          <a href="colgar" className="colgar activo">Colgar</a>
        </div>
      </main>
    </div>
  );
}

export default App;
