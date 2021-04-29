<script>
    import { Link } from 'svelte-routing'; 
</script>

<style type="text/scss">
    .navbar--main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > .navbar--links {
            display: flex;
            gap: 1rem;
        }
        img {
            height: 3rem;
            width: 4rem;
        }
    }
</style>

<nav class="navbar--main" >
    <Link class="navbar--link" to="/"><img src="assets/logo.png" alt="FED@IBM Logo"/></Link>
    <ul class="navbar--links">
        <li><Link class="navbar--link" to="/movies-timeline">Movies</Link></li>
        <li><Link class="navbar--link" to="/characters">Characters</Link></li>
        <li><Link class="navbar--link" to="/lightsaber-lab">Lightsaber Lab</Link></li>
        <li><Link class="navbar--link" to="/ships-silo">Ships Gallery</Link></li>
    </ul>
</nav>