# 📱 App TranSkrip

Se trata de un visor de anotaciones sobre imágenes con funcionalidades de edición y guardado de cambios. Este proyecto se centra en analizar regiones de texto y tablas dentro de un documento y proporciona una interfaz para interactuar con ellas.

▶️[App TranSkrip](https://takeaway-cristina-fores.netlify.app/)
</br>

## 🧩 Componentes

El proyecto contiene los siguientes componentes:

- DraggableVertex: Un vértice interactivo de un polígono.
- DraggablePolygon: Un polígono interactivo que representa una región en el documento.
- Regions: Un componente que contiene las regiones de texto y tablas.
- AllRegions: Muestra todas las regiones de texto y tablas en el documento.
- FormWithNotes: Un formulario que permite agregar notas a una región específica.
- Footer: El pie de página de la aplicación.
- Header: El encabezado de la aplicación.
  </br>

## 📚 Estructura del Estado

El estado de la tienda se compone de las siguientes propiedades y acciones:

- `totalRegions`: Un array de objetos `TextLine` que representa las regiones totales de texto y tablas en el documento.
- `setTotalRegions`: Una función para establecer el array de `totalRegions` en el estado.
- `noteModal`: Un objeto `ModalNote` que contiene información sobre el estado y los datos de la ventana modal de notas.
- `setNoteModal`: Una función para establecer el objeto `noteModal` en el estado.
- `setNote`: Una función para establecer la nota en el objeto `noteModal`.
- `setOpen`: Una función para establecer la propiedad `open` en el objeto `noteModal`.
- `setUpdateNote`: Una función para actualizar la nota de una región específica en `totalRegions`.
- `setUpdatePolygonPoints`: Una función para actualizar los puntos de un polígono en una región específica en `totalRegions`.

### Persistencia de Datos

Los datos se persisten utilizando el middleware `persist` de Zustand, que guarda y carga el estado en `localStorage`. La clave utilizada para almacenar los datos es "my-storage".

  </br>

## 📂 Estructura de Carpetas

```
.
├── README.md
├── package.json
├── public
│   └── ├── data
│   │   |── albatross.json
│   │   └── Albatross_vol009of055-050-0
├── src
│   ├── assets
│   │   ├── logo.png
│   │   ├── tranScriptorium_favicon.png
│   ├── components
│   │   ├── AllRegions.tsx
│   │   ├── DraggablePolygon.tsx
│   │   ├── DraggableVertex.tsx
│   │   ├── Footer.tsx
│   │   ├── FormWithNotes.tsx
│   │   ├── Header.tsx
│   │   └── Regions.tsx
│   ├── hooks
│   │   └── useLoadData.ts
│   ├── store
│   │   └── store.ts
│   ├── types
│   │   └── types.ts
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   └── ...
├──tsconfig.json
├── tailwind.config.cjs
├──index.html
└── ...
```

</br>

## 💫 Instalación

Para descargar el código fuente del proyecto y ejecutarlo localmente, sigue los siguientes pasos:

1. Clona el repositorio:

```

https://github.com/CristinaFores/prueba-tecnica-takeaway

```

2. Instala las dependencias:

```

npm install

```

3. Ejecuta el servidor de desarrollo:

```

npm run dev

```

</br>

## 📝 Descripción del proyecto

Este proyecto es un visor de anotaciones de imágenes que permite al usuario editar y guardar cambios en las anotaciones precargadas en formato JSON. La aplicación incluye un header y footer, y un área principal donde se muestra la imagen con las anotaciones interactivas. El usuario puede editar el texto de las anotaciones, ajustar los vértices mediante drag and drop y los cambios se guardan automáticamente, persistiendo incluso después de refrescar la página.

## 🚀 Mejoras futuras

Algunas de las mejoras que se podrían realizar en el futuro son:

1. Agregar, eliminar y administrar múltiples notas con fechas.

- Permitir a los usuarios agregar más de una nota con fechas específicas a cada polígono.
- Implementar la posibilidad de seleccionar y eliminar individualmente las notas que deseen.
- Facilitar la visualización y gestión de las notas agregadas mediante una interfaz de usuario intuitiva y fácil de usar.

2. Mejorar la accesibilidad.

- Asegurar que la aplicación cumpla con las pautas de accesibilidad WCAG 2.1 para facilitar su uso por parte de personas con discapacidades.
- Implementar características como navegación con teclado y etiquetas ARIA para mejorar la experiencia de los usuarios que utilizan tecnologías de asistencia.

## 🛠️ Herramientas y Configuraciones

### ESLint

Se utiliza ESLint para garantizar la calidad del código y mantener un estilo de codificación consistente en todo el proyecto. La configuración de ESLint se puede encontrar en el archivo `.eslintrc.cjs`.

### GitHub Actions (Workflows)

Se han configurado los workflows de GitHub Actions para automatizar procesos como la construcción, prueba y despliegue del proyecto. Puedes encontrar la configuración de los workflows en la carpeta `.github/workflows`.

### Husky Hooks

Husky se utiliza para configurar commits, push,etc... de Git (hooks) que garantizan que el código cumpla con las normas de calidad antes de realizar un commit o un push.

## 💻 Tecnologías Utilizadas

- [React.js](https://nextjs.org/)
- [TypeScript](typescriptlang.org)
- [Vite](https://vitejs.dev/)
- [react-konva](https://konvajs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [@radix-ui/react](https://radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [react-draggable](https://github.com/react-grid-layout/react-draggable)
