type UnknownRecord = Record<string, unknown>;

const isObject = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

const searchKeysObject = (
  objeto: UnknownRecord,
  nombrePropiedad: string
): Array<unknown> => {
  const resultados: Array<unknown> = [];

  Object.entries(objeto).forEach(([propiedad, valor]) => {
    if (propiedad === nombrePropiedad) {
      resultados.push(valor);
    } else if (isObject(valor)) {
      resultados.push(...searchKeysObject(valor, nombrePropiedad));
    }
  });

  return resultados;
};

export default searchKeysObject;
