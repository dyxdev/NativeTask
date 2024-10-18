const es = {
    common: {
      ok: "¡Si!",
      cancel: "Cancelar",
      back: "Atras",
      refresh: "Recargar",
      loading: "Buscando datos..."
    },
    homeScreen:{
      title: "Inicio",
      task: 'Ir a tareas',
      list:  'Ir a la lista de usuarios'
    },
    taskScreen:{
      title: "Tareas",
      empty: 'Sin tareas',
      new: "Nueva tarea",
      create: "Crear nueva tarea",
      placeholder: "Inserte una descripcion"
    },
    userScreen:{
      title: "Usuarios",
      empty: 'Sin usuarios',
    },
    errorApi:{
      timeout: "Sin respuesta del servidor", 
      cannotConnect: "Imposible establecer la conexión", 
      server: "¡¡¡ Uppsss :( !!!",
      unauthorized: "No esta autorizado para realizar esta operación", 
      forbidden: "No existe", 
      notFound: "¡¡¡ Uppsss :( !!! No encontramos nada", 
      rejected: "Su petición ha sido rechazada", 
      unknown: "Error desconocido",
      badData: "Formato incorrecto",
      "400": "¡¡¡ Uppsss :( !!! No encontramos nada"
    },
    error:{
      title:"No existe",
      description: "Volver a inicio"
    }
  }
  
  export default es
  export type Translations = typeof es
  