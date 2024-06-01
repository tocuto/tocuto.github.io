<script lang="ts">
  import { onMount } from "svelte";
  import GithubLogo from "./assets/github.svelte";
  import LinkedinLogo from "./assets/linkedin.svelte";
  import DiscordLogo from "./assets/discord.svelte";

  const username = "@tocu.";
  let tooltip: HTMLDivElement;
  let timer: number | undefined;

  const copyDiscord = async () => {
    tooltip.classList.add("copied");
    tooltip.innerText = "Copied!";
    await navigator.clipboard.writeText(username);

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      tooltip.classList.remove("copied");
      tooltip.innerText = username;
      timer = undefined;
    }, 1000);
  };

  onMount(() => {
    tooltip.classList.remove("copied");
    tooltip.innerText = username;
  });
</script>

<h1 class="title is-1">Iván Battistón</h1>
<h4 class="subtitle is-4">Backend Engineer</h4>
<p class="description">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum, eos
  tempore quaerat saepe distinctio architecto officiis cupiditate perspiciatis.
  Ipsam neque aut voluptatum incidunt delectus perspiciatis, debitis voluptate
  magnam porro.
</p>
<ul class="is-flex is-align-items-center is-size-4 social">
  <li class="mr-2">
    <a target="_blank" href="https://github.com/tocuto">
      <GithubLogo />
    </a>
  </li>
  <li class="mr-2">
    <a target="_blank" href="https://www.linkedin.com/in/ivan-battiston/">
      <LinkedinLogo />
    </a>
  </li>
  <li class="mr-2">
    <a href={null} class="discord" on:click={copyDiscord}>
      <div class="tooltip copied is-size-6" bind:this={tooltip}></div>
      <DiscordLogo />
    </a>
  </li>
</ul>

<style lang="scss">
  @use "bulma/sass/utilities/initial-variables" as iv;

  .description {
    margin-bottom: iv.$block-spacing;
  }

  .social > li > a {
    color: iv.$white;
  }

  .discord {
    position: relative;

    @mixin tooltip($color) {
      visibility: hidden;
      position: absolute;
      background-color: $color;
      padding: 0.25rem 0.5rem;
      border-radius: 0.4rem;

      top: -0.3rem;
      left: 50%;
      transform: translate(-50%, -100%);

      &:after {
        $size: 5px;

        content: " ";
        margin-left: -$size;
        border-width: $size;
        border-style: solid;
        border-color: $color transparent transparent transparent;
        position: absolute;
        top: 100%;
        left: 50%;
      }
    }

    .tooltip {
      @include tooltip(iv.$black);
    }
    .tooltip.copied {
      @include tooltip(iv.$green);
      visibility: visible !important;
    }

    &:hover .tooltip {
      visibility: visible;
    }
  }
</style>
