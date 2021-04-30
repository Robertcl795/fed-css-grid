<script>
    export let pageTitle = '';
    export let pageDescription = '';
    
</script>

<style type="text/scss">
    .router-page--content {
        display: grid;
        grid-template-areas: "page-header" "page-content";
        grid-template-rows: max-content 1fr;
        > .router-page--header {
            display: grid;
            grid-template-rows: [title] max-content [description] max-content;
            justify-items: center;
            > .router-page--header__title {
                --font-size: 3rem;
                --font-family: "Death Star", "Space Grotesk", sans-serif;
                --margins: 2rem 0 0.5rem 0;
            }
            > .router-page--header__descr {
                --font-size: 1.25rem;
            }
        }
    }
</style> 

<section class="router-page--content">
    <header class="router-page--header">
        <h1 class="router-page--header__title">{pageTitle}</h1>
        <p class="router-page--header__descr">{pageDescription}</p>
    </header>
    <slot></slot>
</section>
		