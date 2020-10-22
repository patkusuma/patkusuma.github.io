Vue.component('menu-buttons', {
    template: `
    <button v-for="tab in tabs" @click="selectedTab = tab"> {{ tab }} </button>
    <div v-show="selectedTab === 'About'">
        <about-page></about-page>
    </div>
    <div v-show="selectedTab === 'Experience'">
        <experience-page></experience-page>
    </div>
    <div v-show="selectedTab === 'Portfolio'">
        <portfolio-page></portfolio-page>
    </div>
    <div v-show="selectedTab === 'Publications & Features'">
        <pubs-page></pubs-page>
    </div>
    <div v-show="selectedTab === 'Blog'">
        <blog-page></blog-page>
    </div>
    <div v-show="selectedTab === 'Contact'">
        <contact-page></contact-page>
    </div>`,
    data: function () {
        return {
            tabs: ['About', 'Experience', 'Portfolio', 'Publications & Features', 'Blog', 'Contact'],
            selectedTab: 'About'
    }}
});

Vue.component('about-page', {
    template: `
    <p>About page</p>
    `
});

Vue.component('experience-page', {
    template: `
    <p>Experience page</p>
    `
});

Vue.component('portfolio-page', {
    template: `
    <p>Portfolio page</p>
    `
});

Vue.component('pubs-page', {
    template: `
    <p>Publications page</p>
    `
});

Vue.component('blog-page', {
    template: `
    <p>Blog page</p>
    `
});

Vue.component('contact-page', {
    template: `
    <p>Contact page</p>
    `
});

new Vue({
    el: "#app",
});