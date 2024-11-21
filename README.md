# React + TypeScript + Vite

### Url 
```
https://chucky-xi.vercel.app/

```

git clone <repository-url>
cd <project-directory>

```bash
npm install
```

## Usage

1. Start the Development Server:

```bash
npm run dev
```


## Demo Preview
![alt text](/public/preview/image.png)


CRUD Preview for Customer List
![alt text](/public/preview/customer.png)


CRUD Preview for  Menu List
![alt text](/public/preview/menu.png)

## Store Management Setup
2. Redux Store: The store is configured with slices for modular state management.
3. React-Persist: Ensures the Redux state persists across sessions using local storage.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```tsx
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

