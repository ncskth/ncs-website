<script context="module">
	export function preload() {
		return this.fetch(`science.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	ul li {
		font-size: 150%;
	}
</style>

<svelte:head>
	<title>Science</title>
</svelte:head>

<h1>Science</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="science/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
