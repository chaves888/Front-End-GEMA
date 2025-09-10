# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

src/
  api/
    axiosConfig.js
    UsuarioService.js
    EscolaService.js
    CidadeService.js
    BairroService.js
    CardapioService.js
  components/
    layout/
      Header.jsx
      Sidebar.jsx
      Footer.jsx
    common/
      DataTable.jsx
      ModalConfirm.jsx
      FormField.jsx
  pages/
    usuarios/
      UsuarioList.jsx
      UsuarioForm.jsx
    escolas/
      EscolaList.jsx
      EscolaForm.jsx
    cidades/
      CidadeList.jsx
      CidadeForm.jsx
    bairros/
      BairroList.jsx
      BairroForm.jsx
    cardapios/
      CardapioList.jsx
      CardapioForm.jsx
  routes/
    AppRoutes.jsx
  App.jsx
  main.jsx
  utils/
    useFetch.js
    notifications.js
  styles/
    global.css
