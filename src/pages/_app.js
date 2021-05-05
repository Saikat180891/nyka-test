import "../../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
