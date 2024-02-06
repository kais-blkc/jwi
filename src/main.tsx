import { RouterProvider } from 'react-router-dom';
import { router } from './1_app/provider/router.tsx';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './6_shared/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
