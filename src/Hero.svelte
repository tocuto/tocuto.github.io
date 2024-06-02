<script lang="ts">
  import { onMount } from "svelte";
  import GithubLogo from "./assets/github.svelte";
  import LinkedinLogo from "./assets/linkedin.svelte";
  import DiscordLogo from "./assets/discord.svelte";
  import { animate } from "./animation";

  let username: HTMLSpanElement;
  let tooltip: HTMLDivElement;

  const copyDiscord = async () => {
    if (tooltip.classList.contains("copied")) return;

    await navigator.clipboard.writeText(username.innerText);
    tooltip.classList.add("copied");
    animate(tooltip, "headShake", "500ms");

    setTimeout(() => {
      tooltip.classList.remove("copied");
    }, 1500);
  };

  onMount(() => {
    tooltip.classList.remove("copied");
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
      <div class="tooltip">
        <div class="inner copied is-size-6" bind:this={tooltip}>
          <span class="username" bind:this={username}>@tocu.</span>
          <span class="copy">Copied!</span>
        </div>
      </div>
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

    &:hover .tooltip .inner:not(.copied) {
      visibility: visible !important;
      animation: fadeIn 150ms;
    }

    .tooltip {
      position: absolute;
      top: -0.3rem;
      left: 50%;
      transform: translate(-50%, -100%);

      @mixin tooltip($color) {
        background-color: $color;
        padding: 0.25rem 0.5rem;
        border-radius: 0.4rem;

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

      .inner {
        @include tooltip(iv.$black);
        visibility: hidden;

        .username {
          display: initial;
        }
        .copy {
          display: none;
        }
      }
      .inner.copied {
        @include tooltip(iv.$green);
        visibility: visible !important;

        .username {
          display: none !important;
        }
        .copy {
          display: initial !important;
        }
      }
    }
  }
</style>
