<script lang="ts">
  import { onMount } from "svelte";
  import GithubLogo from "./assets/github.svelte";
  import { animate } from "./animation";

  export let logo = "https://bulma.io/assets/images/placeholders/96x96.png";
  export let github = "https://github.com/tocuto";
  let modal: HTMLDivElement;

  function open() {
    modal.classList.add("is-active");
    animate(modal, "fadeIn", "150ms");
  }

  function close() {
    animate(modal, "fadeOut", "150ms").then(() => {
      modal.classList.remove("is-active");
    });
  }

  onMount(() => {
    const query = modal.querySelectorAll(".modal-background, .modal-close");
    for (const el of query) {
      el.addEventListener("click", close);
    }

    document.addEventListener("keydown", (evt) => {
      if (evt.key == "Escape") {
        close();
      }
    });
  });
</script>

<div bind:this={modal} class="modal">
  <div class="modal-background" />
  <div class="modal-card">
    <section class="modal-card-body">
      <slot name="modal" />
    </section>
  </div>
  <button class="modal-close is-large" aria-label="Close" />
</div>

<div class="project">
  <div class="image">
    <img alt="Project logo" src={logo} />
  </div>
  <div class="content">
    <h5 class="title is-size-5">
      <slot name="title">Project</slot>
      <a target="_blank" href={github}>
        <GithubLogo />
      </a>
    </h5>
    <p class="is-size-6">
      <slot name="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </slot>
      <a href={null} on:click={open}>Learn more</a>
    </p>
  </div>
</div>

<style lang="scss">
  @use "bulma/sass/utilities/initial-variables" as iv;
  @use "bulma/sass/utilities/css-variables" as cv;

  .project {
    display: flex;
    margin-bottom: 2rem;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    $icon: 96px;
    $dot-x: -1rem;
    $dot-y: 50%;

    .image {
      position: relative;
      width: $icon;
      min-height: $icon;
      margin-right: 1rem;

      img {
        position: absolute;
        border: 2px solid #fff;
        border-radius: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .content {
      flex: 1 1;
      .title {
        margin-bottom: 0.5rem;

        a {
          margin-left: 1rem;
          position: absolute;
        }
      }
    }

    @mixin dot($radius) {
      content: " ";
      position: absolute;
      left: calc(#{$dot-x} - #{$radius});
      top: calc(#{$dot-y} - #{$radius});
      width: $radius * 2;
      height: $radius * 2;
      border-radius: $radius * 2;
    }

    &:before {
      background-color: cv.getVar("scheme-main");
      @include dot(8px);
    }
    &:after {
      background-color: iv.$white;
      @include dot(5px);
    }
  }
</style>
