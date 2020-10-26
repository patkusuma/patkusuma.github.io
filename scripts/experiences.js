Vue.component('experience-page', {
    template: `
    <h3>Education</h3>
    <ul>
        <li v-for="education in educationHistory">
        
        </li>
    </ul>
    `,
    data: function() {
        return {
            educationHistory: [{
                name: "Columbia University",
                degree: "Bachelor of Arts",
                major: "computer science",
                year: "2018 - 2020",
                favoriteCourses: ["How Writers Think", "Advanced Programming", "Contemporary Civilization"],
                activities: [{
                    name: "Global Ambassador Program", 
                    role: "Facilitator",
                    description: "Facilitated small group and large group discussions in a year-long program fostering intercultural understanding between both international and American students."
                }, 
                {
                    name: "International Student Orientation Program", 
                    role: "Orientation leader",
                    description: "Guided new international students in their first step towards being a Columbia student."
                },
                {
                    name: "Columbia Daily Spectator",
                    role: "Associate copy editor",
                    description: "Proofread, edited, and fact-checked Columbia Spectator articles."
                },
                {
                    name: "Columbia Indonesian Society", 
                    role: "Co-president",
                    description: "Oversaw and managed programs held to foster solidarity and a home to Indonesian students on campus"
                },
                {
                    name: "Athena Film Festival",
                    role: "Volunteer",
                    description: "Volunteered in the office crew and screening team during Barnard College's Athena Film Festival 2019 & 2020."
                }]
            },
            {
                name: "Green River College",
                degree: "Associate of Arts",
                major: "computer science",
                year: "2016 - 2018",
                favoriteCourses: ["Discrete Mathematics", "Introduction to Novels", "Java II - Data Structures"],
                activities: [{
                     name: "Sisterhood",
                     role: "Co-chair",
                     description: "Co-chaired the only feminist club on campus and facilitated discussions on women's rights"
                },
                {
                    name: "Sustained Dialogue",
                    role: "Co-founder and co-chair",
                    description: "Co-chaired an international-American student conversation group and facilitated discussions on intercultural topics"
                },
                {
                    name: "Indonesian Student Organization",
                    role: "Creative Director",
                    description: "Designed ISO's core design identity and publication materials related to events and programs."
                },
                {
                    name: "Foundation For Success",
                    role: "Peer mentor & recruitment coordinator",
                    description: "Mentored new international students in a quarter-long program & recruited new mentors for the following term."
                },
                {
                    name: "Phi Theta Kappa Honor Society",
                    role: "Member & researcher",
                    description: "Participated in the Alpha Chi Beta chapter volunteer programs & co-wrote a research paper on international student academic success, leading to the chapter's five-star certification."
                }]
            }],
            workHistory: [{
                role: "Junior Software Engineer",
                company: "JRI America",
                year: "August 2020 - now",
                city: "New York, NY, USA",
                description: ["Undergo a two-month web development training, culminating in a final project of an ATM web client, API, and database.",
                "Maintain and develop Know Your Customer (KYC), an internal application aggregating client data and evaluating client risk ratings in an effort to combat money laundering, with a tech stack of Metastorm, C#, Vue.js, and Oracle SQL."
                ]
            },
            {
                role: "Computer Science Teaching Assistant",
                company: "Breakthrough New York",
                year: "June 2020 - August 2020",
                city: "New York, NY, USA",
                description: ["Co-taught a computer science curriculum to low-income and underserved middle school students in a completely virtual setting. Syllabus included technology literacy, variables, input/output, loops, conditionals, and a culminating final project on Scratch.",
                "Advised a group of rising ninth-grade students in their professional and personal development throughout the summer.",
                "Co-taught a theater elective, culminating in a 10-minute livestream virtual theater project.",
                "Recipient of the 2020 Susan M. Blum Teaching Excellence Award."
                ]
            },
            {
                role: "Undergraduate Peer Writing Fellow",
                company: "Columbia University Writing Center",
                year: "January 2020 - May 2020",
                city: "New York, NY, USA",
                description: [
                    "Assist students coming into the Writing Center throughout the writing process.",
                    "Act as an informed reader in consulting student work.",
                    "Read and analyze scholarship in composition studies with respect to problem solving in the Writing Center."
                ]
            },
            {
                role: "Full Stack Engineer Intern",
                company: "Gojek",
                year: "June 2019 - August 2019",
                city: "Jakarta, DKI Jakarta, Indonesia",
                description: [
                    "Kickstarted production of a web-based onboarding platform, helping new hires navigate the employee onboarding process in Gojek to join a family of 3,000 employees. Tasks include:",
                    "Designing web wireframes;",
                    "Creating and designing a database of employee data using PostgreSQL;",
                    "Implementing a platform backend using Golang and JWT authentication;",
                    "Managing the production process using agile project management."
                ]
            },
            {
                role: "Writing Consultant",
                company: "Green River College Writing Center",
                year: "September 2017 - June 2018",
                city: "Auburn, WA, USA",
                description: [
                    "Helped students work through multiple stages of writing, from brainstorming to revising.",
                    "Worked with both MLA and APA formats of academic writing.",
                    "Discussed student papers with a diverse group of student writers, including non-traditional students and international students."
                ]
            },
            {
                role: "Graphic Design Intern",
                company: "Harian Kompas",
                year: "June 2015",
                city: "Jakarta, DKI Jakarta, Indonesia",
                description: [
                    "Designed the layout for an edition of the Kompas Muda division of the newspaper on coffee culture in Greater Jakarta using Adobe InDesign.",
                    "Collaborated with a senior reporter and a senior graphic designer with a team of reporter and photographer interns."
                ]
            }]
        }
    }
});