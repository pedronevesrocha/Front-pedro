import axios from "axios";

const BASE_URL = "https://lojabrinquedo-production.up.railway.app";


//ENDPOINT BRINQUEDOS
export const todosBrinquedos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brinquedo`);

    console.log("todos brinquedos dados", response);

    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const brinquedoId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/brinquedo/${id}`);

    console.log(`Brinquedo por id ${id}`, response.data);

    return response.data
  } catch (error) {
    alert('ao adicionar o brinquedo');
  }
};

export const addBrinquedo = async (brinquedo) => {
  try {
    await axios.post(`${BASE_URL}/brinquedo`, brinquedo );
  } catch (error) {
    alert("Erro ao adicionar o brinquedo");
  }
};

export const editBrinquedo = async (
  id, brinquedo
) => {
  try {
    await axios.put(`${BASE_URL}/brinquedo/${id}`, brinquedo );
  } catch (error) {
    alert(error.message);
  }
};

export const deleteBrinquedo = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/brinquedo/${id}`);
  } catch (error) {
    alert(error.message);
  }
};


//ENDPOINT USUARIO

export const todosUsuario = async () => {
    try {
       const response =  await axios.get(`${BASE_URL}/usuario`)
       console.log(response.data)
       return response.data
    }catch(error) {
        alert(error.message);
    }

}

export const usuarioId = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/usuario/${id}`);
        return response.data
    } catch(error) {

    }

}

export const addUsuario = async (usuario) => {
    try{
       
        await axios.post(`${BASE_URL}/usuario`, usuario );
        
    }catch(error) {
        alert('Erro ao adicionar o usuario')
    }
}

export const editUsuario = async(id, usuario) => {
    try {
        await axios.put(`${BASE_URL}/usuario/${id}`, usuario)
    }catch(error) {

    }
}

export const deleteUsuario = async(id) => {
    try {
        await axios.delete(`${BASE_URL}/usuario/${id}`)

    }catch(error) {

    }
}