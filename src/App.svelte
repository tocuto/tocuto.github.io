<script lang="ts">
  import "./app.scss";
  import Hero from "./Hero.svelte";
  import Content from "./Content.svelte";
  import I18n from "./assets/i18n.svelte";
  import { lang, locales, type Locale } from "./store";
  import { animate } from "./animation";
  import { onMount } from "svelte";

  let mounted = false;
  const langs = {} as Record<string, HTMLAnchorElement>;
  let selector: HTMLDivElement;
  let menu: HTMLDivElement;
  let selected: Locale | undefined = undefined;

  lang.subscribe((key) => {
    if (!mounted) {
      selected = key;
      return;
    }

    if (!!selected) langs[selected].classList.remove("is-active");
    selected = key;
    langs[selected].classList.add("is-active");
  });

  const langSetter = (key: string) => {
    return () => {
      lang.set(key as Locale);
    };
  };

  const toggleSelector = () => {
    if (selector.classList.contains("is-active")) {
      return animate(menu, "fadeOut", "150ms").then(() => {
        selector.classList.remove("is-active");
      });
    }

    selector.classList.add("is-active");
    animate(menu, "fadeIn", "150ms");
  };

  onMount(() => {
    mounted = true;
    if (!!selected) langs[selected].classList.add("is-active");

    selector.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });

    window.addEventListener("click", () => {
      if (selector.classList.contains("is-active")) {
        toggleSelector();
      }
    });
  });
</script>

<main>
  <div class="dropdown" bind:this={selector}>
    <button
      type="button"
      class="is-size-4 has-text-primary"
      on:click={(evt) => {
        toggleSelector();
        evt.stopPropagation();
      }}
    >
      <I18n />
    </button>
    <div class="dropdown-menu" bind:this={menu}>
      <div class="dropdown-content">
        {#each Object.entries(locales) as [key, name]}
          <a
            class="dropdown-item"
            href={null}
            bind:this={langs[key]}
            on:click={langSetter(key)}
          >
            {name}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div class="columns m-0 page">
    <div
      class="column is-row-start-1 is-row-end-1 is-5 has-background-black-ter intro"
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

  .dropdown {
    position: absolute;
    top: 0;

    .dropdown-menu {
      min-width: auto;
    }

    @include mixins.until($break) {
      margin: 2.25rem;
      right: 0;

      .dropdown-menu {
        left: auto;
        right: 0;
      }
    }

    @include mixins.from($break) {
      position: fixed;
      margin: 3rem;
      z-index: 1;
    }
  }

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
