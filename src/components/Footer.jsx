function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-3">Contactos</p>
        <div>
          <a
            href="https://github.com/N4cH0Dev"
            target="_blank"
            rel="noopener"
            className="text-white mx-3"
          >
            <i className="bi bi-github fs-4"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jose-ignacio-diaz-romero-219929339/"
            target="_blank"
            rel="noopener"
            className="text-white mx-3"
          >
            <i className="bi bi-linkedin fs-4"></i> LinkedIn
          </a>
        </div>
        <p className="mt-3 mb-0">© 2024 José Ignacio Diaz Romero</p>
      </div>
    </footer>
  );
}

export default Footer;
