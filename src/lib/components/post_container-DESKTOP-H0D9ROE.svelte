<script lang="ts">
  import { fly } from 'svelte/transition'
  import { browser } from '$app/environment'
  import Card from '$lib/components/post_card.svelte'
  import Head from '$lib/components/head.svelte'
  import Toc from '$lib/components/post_toc.svelte'
  import Action from '$lib/components/post_action.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Category from '$lib/components/category.svelte'
  import MiniDash from '$lib/components/minidash.svelte'
  export let post: Urara.Post
</script>

<Head {post} />

<div class="flex justify-center">
  <div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
    <div
      in:fly={{ x: -25, duration: 300, delay: 500 }}
      out:fly={{ x: -25, duration: 300 }}
      class="flex-1 w-full max-w-screen-md xl:order-last ease-out transform mx-auto xl:mr-0">
      {#if browser && post.toc}
        <div class="h-full hidden xl:block">
          <Toc toc={post.toc} />
        </div>
      {/if}
    </div>
    <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0 pt-20">
      <Card {post}>
        <slot />
      </Card>
      <Footer sticky={true} />
    </div>
  </div>
</div>

<!--
<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap">
  <div class="w-5/6 pt-10 pb-10">
    <div class="flex flex-col rounded-3xl overflow-hidden mt-20">
      <div class="w-3/5">
        <Card {post}>
          <slot />
        </Card>
        <Footer sticky={true} />
      </div>
      <div class="hidden lg:block xl:block w-2/5 pl-5">
        {#if browser && post.toc}
          <div class="h-full">
            <Toc toc={post.toc} />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
-->
