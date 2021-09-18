import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )}

export default MyApp
