import { type AppType } from "next/app";

import { Inter } from "next/font/google";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { api } from "~/utils/api";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
