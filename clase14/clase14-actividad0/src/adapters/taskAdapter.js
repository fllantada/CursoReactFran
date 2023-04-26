export const createTaskAdaptedFromFirestore = (doc) => {
  console.log(
    "4) Ingrese a createTaskAdaptedFromFirestore con la data sin cocinar",
    doc
  );

  const fields = doc.data();
  console.log(
    "5) La data ya cocinada, lista para ser adaptada a mi modelo",
    fields
  );

  const taskAdapted = {
    id: doc.id,
    category: fields.category || "ESte es un texto por default",
    pictureUrl: fields.pictureUrl,
    priority: fields.priority,
  };

  return fields;
};
