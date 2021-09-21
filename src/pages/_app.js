import { store } from '../app/store';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from "next-auth/client";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )}

export default MyApp
