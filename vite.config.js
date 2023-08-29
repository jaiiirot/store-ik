import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      // EJEMPLO_>>_>__>_>>_>
      // "process.env.API_KEY": JSON.stringify(
      //   env.VITE_API_KEY
      // ),
      "process.env": env,
    },
  };
});

// ('process.env': env)
//  --> para importar lo que esta en .env
