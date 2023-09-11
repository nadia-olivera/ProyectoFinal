const URL = "VerApi";


const login = async (user, pass) => {
    try {
      // Devuelvo la promesa del fetch
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          usuario: user,
          password: pass,
        }),
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
 

////////////////////////////////////////////////////////////////////////////////////////////////
const registro = async (userName, password,departamento,ciudad,direccion,telefono) => {
  
    try {

      const response = await fetch(`${URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          usuario: userName,
          password: password,
          idDepartamento: departamento,
          idCiudad: ciudad,
          direccion: direccion,
          telefono: telefono
        }),
      });
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

////////////////////////////////////////////////////////////////////////////////////////////////  
  
const getCategorias = async() => {
  try {
   
    const response = await fetch(`${URL}/categorias`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      console.log(response)
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
const getProductos = async() => {
  try {
    // Devuelvo la promesa del fetch
    const response = await fetch(`${URL}/productos`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
const getProductosPorCategoria = async(idCategoria) => {
  try {
    // Devuelvo la promesa del fetch
    const response = await fetch(`${URL}/productos?idCategoria=${idCategoria}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};


////////////////////////////////////////////////////////////////////////////////////////////////
const getProductosDetalle = async(idProducto) => {
    try {

      const response = await fetch(`${URL}/productos?idProducto=${idProducto}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };




export { login, registro , getCategorias, getProductos, getProductosPorCategoria, getProductosDetalle};
  