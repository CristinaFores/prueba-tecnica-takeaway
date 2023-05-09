# 📱 App TranSkrip

Se trata de un visor de anotaciones sobre imágenes con funcionalidades de edición y guardado de cambios. Este proyecto se centra en analizar regiones de texto y tablas dentro de un documento y proporciona una interfaz para interactuar con ellas.

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

## 📚 Estructura del proyecto

La aplicación se divide en los siguientes componentes:

- App: el componente principal que engloba a toda la aplicación.
- ImageCanvas: el componente que se encarga de mostrar la imagen y las anotaciones sobre ella.
- AnnotationDialog: el componente que muestra el diálogo flotante con el texto de la anotación seleccionada.
- Annotation: el componente que dibuja una anotación sobre la imagen.

Además, se incluyen las siguientes funciones de utilidad:

- parseAnnotationData: la función que parsea los datos de las anotaciones en formato JSON.
- saveAnnotationData: la función que guarda los cambios realizados en las anotacione
  </br>

## 📂 Estructura de Carpetas

```
.
├── README.md
├── package.json
├── public
│   └── ...
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
│   ├── data
│   │   |── albatross.json
│   │   └── Albatross_vol009of055-050-0
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

Este proyecto consiste en un visor de anotaciones sobre una imagen en particular, con los datos de las anotaciones en formato JSON precargados. El objetivo es permitir al usuario editar las anotaciones existentes y guardar los cambios.

La aplicación se compone de un header y footer, sin funcionalidad, y un área principal donde se muestra la imagen con las anotaciones dibujadas encima. Al pasar el ratón sobre cada anotación, se resalta para indicar que se puede seleccionar.

El usuario puede editar el texto y guardar los cambios. Mientras el diálogo está abierto, se pueden mover los vértices de la anotación mediante drag and drop.

Los cambios realizados en las anotaciones y en el texto se guardan automáticamente y permanecen aunque se refresque la página.

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

Se utiliza ESLint para garantizar la calidad del código y mantener un estilo de codificación consistente en todo el proyecto. La configuración de ESLint se puede encontrar en el archivo `.eslintrc.json`.

### GitHub Actions (Workflows)

Se han configurado los workflows de GitHub Actions para automatizar procesos como la construcción, prueba y despliegue del proyecto. Puedes encontrar la configuración de los workflows en la carpeta `.github/workflows`.

### Husky Hooks

Husky se utiliza para configurar ganchos de Git (hooks) que garantizan que el código cumpla con las normas de calidad antes de realizar un commit o un push. La configuración de Husky se puede encontrar en el archivo `package.json` en la sección "husky".

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
