const obtenerDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const rawData = await fetch(url);
    const result = await rawData.json();
    result.splice(20, result.length - 20);
    result.forEach((album) => {
      console.log(album.title);
    });
  } catch (error) {
    console.log(error);
  }
};

const obtenerMensaje = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Información enviada");
  }, 3000);
});

const generarMensaje = async () => {
  const mensaje = await obtenerMensaje();
  console.log(mensaje);
};

obtenerDatos();
generarMensaje();
