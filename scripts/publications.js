Vue.component('pubs-page', {
    template: `
    <p>Publications page</p>
    `,
    data: function() {
        return {
            works: [
                {
                    type: "op-ed",
                    pub: "The Paradigma",
                    title: "Between Two Worlds: From Community College to Columbia",
                    date: new Date(2019, 9, 4),
                    link: "https://theparadigma.com/2019/10/04/between-two-worlds-from-community-college-to-columbia/"
                },
                {
                    type: "op-ed",
                    pub: "Whiteboard Journal",
                    title: "Menemukan Kembali Bahasa Ibu",
                    date: new Date(2018, 11, 27),
                    link: "https://www.whiteboardjournal.com/column/menemukan-kembali-bahasa-ibu/"
                },
                {
                    type: "op-ed",
                    pub: "Indonesia Mengglobal",
                    title: "Do I Deserve that Acceptance Letter?: Tackling Impostor Syndrome While Studying at Columbia",
                    date: new Date(2018, 10, 13),
                    link: "http://indonesiamengglobal.com/2018/11/tackling-impostor-syndrome/"
                }
            ],
            elsewhere: [
                {
                    type: "interview",
                    pub: "Breakthrough New York",
                    title: "Blum Award Winner: Patricia Kusumaningtyas",
                    date: new Date(2020, 7, 20),
                    link: "http://www.btny.org/blog/blum-award-winner-patricia-kusumaningtyas"
                },
                {
                    type: "speech",
                    pub: "Columbia University Multicultural Affairs",
                    title: "Class of 2020 Multicultural Graduation inaugural International Senior Speech",
                    date: new Date(2020, 4, 20),
                    link: "https://www.cc-seas.columbia.edu/MulticulturalGrads"
                },
                {
                    type: "interview",
                    pub: "Green River College International Programs",
                    title: "Student of the Month: Patricia Kusumaningtyas, Indonesia",
                    date: new Date(2018, 5, 1),
                    link: "https://www.greenriver.edu/international/news/articles/student-of-the-month-patricia-kusumaningtyas-indonesia"
                }
            ]
        }
    }
});