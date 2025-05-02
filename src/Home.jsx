import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";
import FotoPerfil from "./data/FotoPerfil.jpg";

function Home() {
  const datos = {
    nombre: "José Ignacio Diaz Romero",
    descripcion:
      "Estudiante de la Tecnicatura en Programación (UTN). Apasionado por el desarrollo de software y la resolución de problemas tecnológicos.",
    tecnologias: [
      "GeneXus 18",
      "Work With Plus",
      "JavaScript",
      "HTML5",
      "CSS",
      "MySQL",
      "SQL Server",
    ],
    certificaciones: ["GeneXus Core – Certificado"],
    habilidadesDestacadas: [
      "Desarrollo de Software",
      "Resolución de Problemas",
      "Metodologías Ágiles",
      "Gestión de Sistemas",
    ],
    proyecto: "Sistema de gestión para el gimnasio F9 usando GeneXus 18.",
    objetivo:
      "Aprender nuevas tecnologías y aportar a equipos colaborativos e innovadores.",
    imagen: FotoPerfil,
  };

  return (
    <>
      <Header />
      <MainHome datos={datos} />
      <Footer />
    </>
  );
}

export default Home;
