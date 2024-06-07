<script lang="ts">
  import { onMount } from "svelte";
  import { lang, defaultLang, type Locale } from "./store";
  import { animate } from "./animation";

  const data = {} as Record<Locale, HTMLDivElement>;
  let language: Locale;
  let display: HTMLSpanElement;
  let mounted = false;

  const setLanguage = (lang: Locale, blur: boolean) => {
    language = lang;
    if (!mounted || !display) return;
    // language doesn't exist in slots
    if (!data[lang]) lang = defaultLang;
    // language wasn't provided for this template
    if (!$$slots[lang as keyof typeof $$slots]) {
      for (const [key, exists] of Object.entries($$slots)) {
        if (!exists) continue;
        // pick first language that was provided for template
        lang = key as Locale;
        break;
      }
    }

    if (!blur || display.offsetParent === null) {
      display.innerHTML = data[lang].innerHTML;
      return;
    }
    animate(display, "blur-in", undefined, "").then(() => {
      display.innerHTML = data[lang].innerHTML;
      animate(display, "blur-out", undefined, "");
    });
  };

  lang.subscribe((code) => setLanguage(code, true));
  onMount(() => {
    display.classList.remove("blur-in", "blur-out");
    mounted = true;
    setLanguage(language, false);
  });
</script>

<div hidden>
  <div bind:this={data.en}><slot name="en" /></div>
  <div bind:this={data.es}><slot name="es" /></div>
</div>

<span class="text blur-in blur-out" bind:this={display} />

<style lang="scss">
  $blur: 7px;
  @keyframes blur-in {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur($blur);
    }
  }
  @keyframes blur-out {
    0% {
      filter: blur($blur);
    }
    100% {
      filter: blur(0px);
    }
  }

  .text {
    $duration: 250ms;

    &.blur-in {
      animation: blur-in ease-in-out $duration;
    }
    &.blur-out {
      animation: blur-out ease-in-out $duration;
    }
  }
</style>
