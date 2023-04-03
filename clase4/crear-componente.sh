#!/bin/bash

# Comprueba si se proporcionó un nombre de componente
if [ -z "$1" ]
then
  echo "Por favor, proporciona el nombre del componente como argumento."
  exit 1
fi

# Convierte el argumento a minúsculas
ARGUMENT_LOWER=$(echo "$1" | tr '[:upper:]' '[:lower:]')

# Convierte la primera letra a mayúsculas
FIRST_LETTER=$(echo "${ARGUMENT_LOWER:0:1}" | tr '[:lower:]' '[:upper:]')
REST_OF_NAME="${ARGUMENT_LOWER:1}"
COMPONENT_NAME="$FIRST_LETTER$REST_OF_NAME"

# Convierte el nombre del componente a minúsculas para la carpeta
FOLDER_NAME="$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')"
JS_FILE="${COMPONENT_NAME}.js"
CSS_FILE="${FOLDER_NAME}.module.css"

# Crea la carpeta y los archivos necesarios
mkdir $FOLDER_NAME
touch $FOLDER_NAME/$JS_FILE
touch $FOLDER_NAME/$CSS_FILE

# Escribe el contenido del archivo del componente React
cat > $FOLDER_NAME/$JS_FILE <<EOL
import React from 'react';
import styles from './${CSS_FILE}';

const ${COMPONENT_NAME} = () => {
  return (
    <div className={styles.container}>
      <h1>${COMPONENT_NAME}</h1>
    </div>
  );
}

export default ${COMPONENT_NAME};
EOL

# Escribe el contenido del archivo CSS Module
cat > $FOLDER_NAME/$CSS_FILE <<EOL
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
EOL

echo "Componente ${COMPONENT_NAME} creado exitosamente."
