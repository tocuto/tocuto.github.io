<script>
  // import routes from "../.routify/routes.default.js";
  // import { Router, createRouter } from "@roxi/routify";
  import "./app.scss";
  import Hero from "./Hero.svelte";
  import Content from "./Content.svelte";

  // export const router = createRouter({
  //   routes,
  // });
</script>

<main>
  <div class="columns m-0 page">
    <div
      class={`
          column
          is-row-start-1
          is-row-end-1
          is-5
          has-background-black-ter
          intro
      `}
    >
      <Hero />
    </div>
    <div class="column is-7 is-offset-5">
      <Content />
    </div>
  </div>
</main>

<style lang="scss">
  @use "bulma/sass/utilities/initial-variables" as iv;
  @use "bulma/sass/utilities/mixins";

  $break: iv.$tablet;

  .page > div {
    padding: iv.$size-4;

    @include mixins.from($break) {
      padding: iv.$size-1;
    }
  }

  .intro {
    @include mixins.from($break) {
      position: fixed;
      height: 100vh;

      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
