<script lang="ts">
  import "./app.scss";
  import Hero from "./Hero.svelte";
  import Content from "./Content.svelte";
  import I18n from "./assets/i18n.svelte";
  import { lang, locales, type Locale } from "./store";
  import { animate } from "./animation";
  import { onMount } from "svelte";

  let selector: HTMLDivElement;

  const langSetter = (key: string) => {
    return () => {
      lang.set(key as Locale);
    };
  };

  const toggleSelector = () => {
    if (selector.hidden) {
      selector.hidden = false;
      animate(selector, "fadeIn", "150ms");
      return;
    }
    animate(selector, "fadeOut", "150ms").then(() => {
      selector.hidden = true;
    });
  };

  onMount(() => {
    selector.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
    window.addEventListener("click", () => {
      if (selector.hidden) return;
      toggleSelector();
    });
  });
</script>

<main>
  <div class="lang-selector">
    <button
      type="button"
      class="i18n has-text-primary"
      on:click={(evt) => {
        toggleSelector();
        evt.stopPropagation();
      }}
    >
      <I18n />
    </button>
    <div class="locales" hidden bind:this={selector}>
      <ul>
        {#each Object.entries(locales) as [key, name]}
          <li>
            <a href={null} on:click={langSetter(key)}>
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

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

  .lang-selector {
    $size: 1.5rem;

    display: flex;
    position: absolute;
    margin: 2.25rem;
    top: 0;
    z-index: 100;
    column-gap: 0.5rem;

    .i18n {
      font-size: $size;
      width: 1em;
      height: 1em;

      &:hover {
        cursor: pointer;
      }
    }

    .locales {
      margin-top: -1em;
      background-color: iv.$black-bis;
      border-radius: 0.5rem;
      padding: 0.75rem;
    }

    @include mixins.until($break) {
      right: 0;
      flex-direction: row-reverse;
    }
    @include mixins.from($break) {
      position: fixed;
      left: 0;
      margin: 3rem;
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
