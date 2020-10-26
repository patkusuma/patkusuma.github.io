Vue.component('tagline', {
    template: `
    <div id="tagline">
        <h1>patricia kusumaningtyas</h1>
        <p>software engineer, educator, writer</p>
        <br />
    </div>
    `
})

Vue.component('menu-buttons', {
    template: `
    <button v-for="tab in tabs" @click="selectedTab = tab"> {{ tab }} </button>
    <br /><br /> <br />
    <div v-show="selectedTab === 'about'">
        <about-page></about-page>
    </div>
    <div v-show="selectedTab === 'experience'">
        <experience-page></experience-page>
    </div>
    <div v-show="selectedTab === 'portfolio'">
        <portfolio-page></portfolio-page>
    </div>
    <div v-show="selectedTab === 'publications & features'">
        <pubs-page></pubs-page>
    </div>
    <div v-show="selectedTab === 'blog'">
        <blog-page></blog-page>
    </div>
    <div v-show="selectedTab === 'contact'">
        <contact-page></contact-page>
    </div>
    `,
    data: function () {
        return {
            tabs: ['about', 'experience', 'portfolio', 'publications & features', 'blog', 'contact'],
            selectedTab: 'about'
    }}
});

Vue.component('links-footer', {
    template: `
    <p id="links">
        <span v-for="item in links">
            <a href="{{ item.link }}">{{ item.name }}</a>
            <span v-if="item.name !== 'linkedin'"> | </span>
        </span>
    </p>
    `,
    data: function() {
        return {
            links: [
                {
                    name: "spotify",
                    link: "https://open.spotify.com/user/kusumaningtyas?si=mcNpFuR8T6y83gPRTQcnDQ"
                },
                {
                    name: "instagram",
                    link: "https://www.instagram.com/pat.kusuma/"
                },
                {
                    name: "github",
                    link: "https://github.com/patkusuma"
                },
                {
                    name: "muckrack",
                    link: "https://muckrack.com/patricia-kusumaningtyas"
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/patricia-kusumaningtyas/"
                }
            ]
        }
    }
});

new Vue({
    el: "#app",
});