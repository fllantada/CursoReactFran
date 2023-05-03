export const fromDbToApp = (doc) => {
  const id = doc.id;
  const data = doc.data();

  return {
    artistaId: id,
    artistaInfo: data,
  };
};

export const fromAppToDb = (data) => {
  console.log("desde fromAppToDb-->", data);

  return {
    id: data.artistaId,
    artista: data.artistaInfo.artista,
    tipo: data.artistaInfo.tipo,
  };
};
