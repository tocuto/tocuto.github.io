<script>
  import routes from "../.routify/routes.default.js";
  import { Router, createRouter } from "@roxi/routify";
  import "./app.scss";
  import Counter from "./lib/Counter.svelte";

  export const router = createRouter({
    routes,
  });
</script>

<Router {router}></Router>

<main>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style lang="scss">
</style>
