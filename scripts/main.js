Vue.component('tagline', {
    template: `
        <h1>Patricia Kusumaningtyas</h1>
        <h3>Software Engineer, Educator, Writer</h3>
    `
})

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
    <table id="about">
        <tr>
            <td>
                <img src="scripts/resources/selfphoto.png" />
            </td>
            <td>
                <div id="bio">
                <p>I'm a junior software engineer based in Brooklyn, NY. </p>
                <p>Born and raised in Jakarta, Indonesia, I moved to the United States to earn my associate's degree in computer science from 
                Green River College (Auburn, Washington) in 2018 and my bachelor's degree in computer science from Columbia University 
                (New York, New York) in 2020. I currently work at <a href="http://www.jri-america.com/">JRI America</a>; previously,
                I was a software engineer intern at <a href="https://www.gojek.com/">Gojek</a> in 2019 and a graphic design intern at 
                <a href="https://korporasi.kompas.id/">Kompas</a> in 2015.</p>
                <p>Besides hacking, coding, and squashing bugs, I am also passionate in education and writing. In my college career, I was
                a writing consultant at both Columbia and Green River, and I continued my passion post-graduation by volunteering in 
                organizations such as <a href="https://www.btny.org/">Breakthrough New York</a> and <a href="https://www.girlsclub.org/">
                the Lower East Side Girls Club</a>. I also publish my own pieces through various media publications; my works 
                have been published in websites such as <a href="https://www.whiteboardjournal.com/">Whiteboard Journal</a> and
                <a href="https://magdalene.co/">Magdalene</a>.</p>
                <p>In my spare time, I like to listen to music, cook, and dismantle the bourgeoisie.</p>
                </div>
            </td>
        </tr>
    </table>
    `
});

Vue.component('experience-page', {
    template: `
    <h3>Education</h3>
    <ul>
        <li v-for="education in educationHistory">
        </li>
    </ul>
    `,
    data: experienceData()
});

Vue.component('portfolio-page', {
    template: `
    <p>Coming soon!</p>
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