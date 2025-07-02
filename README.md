# Knowledge Library

Una biblioteca de conocimiento para poner en práctica conceptos aprendidos durante la capacitación y mostrar ejemplos prácticos de soluciones específicas a problemas.

## 🎯 Propósito

Este proyecto sirve como un espacio de práctica y demostración donde podemos:

- Implementar y experimentar con nuevas tecnologías
- Mostrar soluciones específicas a problemas comunes
- Documentar patrones y mejores prácticas
- Crear ejemplos reutilizables para futuras referencias

## 🛠️ Configuración Inicial

### Editor Setup

Para que el proyecto funcione correctamente, es necesario configurar el archivo `.vscode/settings.json` con la siguiente configuración:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

Esta configuración permite:

- Formateo automático al guardar
- Organización automática de imports
- Soporte para clases de Tailwind CSS dentro de funciones CVA (class-variance-authority)

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── routing/
│   ├── layout/
│   │   └── DefaultLayout.tsx
│   ├── pages/
│   │   └── Home.tsx
│   └── Router.tsx
├── shared/
│   └── components/
│       ├── atoms/          # Componentes atómicos (ej: Card, Button)
│       └── molecules/      # Componentes que usan átomos
└── [módulos]/              # Carpetas específicas por feature/tecnología
    ├── components/
    ├── hooks/
    ├── context/
    └── ...
```

### Principios de Arquitectura

**Screaming Architecture**: Cada módulo/feature tiene su propia carpeta en `src/` con una estructura completa que permite trabajar de forma independiente.

## 📝 Guías de Desarrollo

### Agregando Nuevas Páginas

1. **Crear la página** en `src/routing/pages/`
2. **Vincular el path** en `src/routing/Router.tsx`
3. **Agregar la card correspondiente** en `src/routing/pages/Home.tsx`

### Componentes Compartidos

- **Átomos** (`src/shared/components/atoms/`): Componentes básicos y reutilizables
- **Moléculas** (`src/shared/components/molecules/`): Componentes que combinan átomos pero siguen siendo genéricos

### Trabajando en Nuevas Features

Para cada nueva feature/solución/ejemplo:

1. **Crear el módulo** en `src/[nombre-del-modulo]/`
2. **Seguir estructura típica**:
   ```
   src/[modulo]/
   ├── components/
   ├── hooks/
   ├── context/
   ├── utils/
   └── types/
   ```
3. **Agregar la página** en `src/routing/pages/`
4. **Vincular en Router.tsx**
5. **Crear card en Home.tsx**

**Ejemplo**: Para probar react-query:

```
src/react-query/
├── components/
├── hooks/
├── context/
└── types/
```

## 🎨 Componentes UI

### Shadcn/ui

Recomendamos usar [Shadcn](https://ui.shadcn.com/) por:

- Facilidad de implementación
- Flexibilidad para modificaciones
- Componentes accesibles y bien diseñados
- Código abierto y personalizable

### Alternativas

- Puedes usar cualquier librería de componentes
- Crear componentes custom en `src/shared/components/`
- Implementar componentes específicos en la carpeta `components/` del módulo que estés trabajando

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Corregir errores de prettier
npm run format:fix

# Corregir errores de eslint
npm run lint:fix
```

## 📚 Tecnologías

- **React** + **TypeScript**
- **Vite** como bundler
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **class-variance-authority** para variantes de componentes
- **Shadcn** para componentes base

---

_Este proyecto está diseñado para crecer orgánicamente mientras exploramos y documentamos diferentes soluciones y patrones._
