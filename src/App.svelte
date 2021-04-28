<script>
	import { Router } from 'svelte-routing';
	import Navbar from './layout/Navbar.svelte';
	import Footer from './layout/Footer.svelte';

	export let url = "";
</script>

<main>
	<Router url="{url}">
		<div id="stars1"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<Navbar class="main--navbar"/>
		<section class="main--content">

		</section>
		<Footer class="main--footer"/>
	</Router>
</main>

<style type="text/scss">
	@import './styles/main.scss';
	main {
		max-height: calc(100vh - 2rem);
		margin: 1rem;

		display: grid;
		grid-template-areas: "navbar" "page-content" "footer";
		grid-template-columns: 1fr;
		:global(main > .main--navbar) {
			grid-area: navbar;
		}
		:global(main > .page--content) {
			grid-area: page--content;
		}
		:global(main > .main--footer) {
			grid-area: footer;
		}
	}
</style>