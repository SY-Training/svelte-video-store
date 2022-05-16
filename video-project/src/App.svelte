<script lang="ts">
  import GenerateVideos from "./Generate-videos.svelte";
</script>

<main>
  <header>
    <!-- header info -->
  </header>
  <mid>
    <p>This will be videos.</p>
    <GenerateVideos />
    <!-- vid list -->
  </mid>
  <footer>
    <!-- disclaimer -->
  </footer>
</main>

<style>
  main {
    display: flex;
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
