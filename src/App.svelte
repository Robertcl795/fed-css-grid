<script>
	import { Route, Router } from 'svelte-routing';
	import Navbar from 'layout/Navbar.svelte';
	import Footer from 'layout/Footer.svelte';
	import Characters from 'routes/Characters.svelte';
	import LightsaberLab from 'routes/LightsaberLab.svelte';
	import Movies from 'routes/Movies.svelte';
	import Ships from 'routes/Ships.svelte';
	import Home from 'routes/Home.svelte';
	export let url = "";
</script>

<div class="background--container">
	<div id="stars1"></div>
	<div id="stars2"></div>
	<div id="stars3"></div>
	<Router url="{url}">
		<main>
			<Navbar/>
			<Route exact path="movies-timeline" component={Movies}/>
			<Route exact path="characters" component={Characters}/>
			<Route exact path="lightsaber-lab" component={LightsaberLab}/>
			<Route exact path="ships-silo" component={Ships}/>
			<Route exact path="/"><Home/></Route>
			<Route path="*"><Home/></Route>
			<Footer/>
		</main>
	</Router>
</div>

<style type="text/scss">
	@import './styles/main.scss';
	main {
		--container-height: calc(100vh - 2rem);
		height: var(--container-height);
		margin: 1rem 2rem;

		display: grid;
		grid-template-areas: "navbar" "page-content" "footer";
		grid-template-rows: max-content 1fr max-content;

		:global(main > .main--navbar) {
			grid-area: navbar;
		}
		:global(main > .router-page--content) {
			grid-area: page--content;
		}
		:global(main > .main--footer) {
			grid-area: footer;
		}

	}
</style>