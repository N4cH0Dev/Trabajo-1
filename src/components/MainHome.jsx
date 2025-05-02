function MainHome({ datos }) {
  return (
    <main className="container py-5">
      <div className="card shadow-lg rounded-4 overflow-hidden">
        <div className="row g-0">
          {/* Columna de la imagen */}
          <div className="col-md-4 bg-light d-flex align-items-center justify-content-center p-4">
            <img
              src={datos.imagen}
              alt="Foto de perfil"
              className="img-fluid rounded-circle border border-3 border-primary"
              style={{ maxWidth: "200px" }}
            />
          </div>
          {/* Columna del texto */}
          <div className="col-md-8 p-4">
            <h2 className="fw-bold mb-3">{datos.nombre}</h2>
            <p className="text-muted mb-4">{datos.descripcion}</p>

            <div className="mb-3">
              <h5 className="fw-bold"> Tecnologías</h5>
              <p>{datos.tecnologias.join(", ")}</p>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold"> Certificaciones</h5>
              <ul>
                {datos.certificaciones.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold"> Habilidades</h5>
              <ul>
                {datos.habilidadesDestacadas.map((hab, i) => (
                  <li key={i}>{hab}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold"> Proyecto Destacado</h5>
              <p>{datos.proyecto}</p>
            </div>

            <p className="fst-italic text-primary">{datos.objetivo}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHome;
