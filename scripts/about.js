Vue.component('about-page', {
    template: `
    <table id="about">
        <tr>
            <td>
                <img src="{{ imageLink }}" />
            </td>
            </tr>
            <tr>
            <td>
                <div id="bio">
                <br />
                <p>i'm a junior software engineer based in brooklyn, ny. </p>
                <p>born and raised in jakarta, indonesia, i moved to the united states to earn my associate's degree in computer science from 
                green river college (auburn, washington) in 2018 and my bachelor's degree in computer science from columbia university 
                (new york, new york) in 2020. i currently work at <a href="http://www.jri-america.com/">jri america</a>; previously,
                i was a software engineer intern at <a href="https://www.gojek.com/">gojek</a> in 2019 and a graphic design intern at 
                <a href="https://korporasi.kompas.id/">kompas</a> in 2015.</p>
                <p>besides hacking, coding, and squashing bugs, i am also passionate in education and writing. in my college career, i was
                a writing consultant at both columbia and green river, and i continued my passion post-graduation by volunteering in 
                organizations such as <a href="https://www.btny.org/">breakthrough new york</a> and <a href="https://www.girlsclub.org/">
                the lower east side girls club</a>. i also publish my own pieces through various media publications; my works 
                have been published in websites such as <a href="https://www.whiteboardjournal.com/">whiteboard journal</a> and
                <a href="https://magdalene.co/">magdalene</a>.</p>
                <p>in my spare time, i like to listen to music, cook, and dismantle the bourgeoisie.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td>
            
            </td>
        </tr>
    </table>
    `,
    data: function() {
        return {
            imageLink: "scripts/resources/selfphoto.png"
        }
    }
});