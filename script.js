Vue.component("page-null", {
    template: ""
});

Vue.component("page-about", {
    template: "<div>About</div>"
});

Vue.component("page-education", {
    template: "<div>Education</div>"
});
  
Vue.component("page-experience", {
    template: "<div>Experience</div>"
});

Vue.component("page-publications", {
    template: "<div>Publications</div>"
});

Vue.component("page-links", {
    template: "<div>Links</div>"
});

new Vue({
    el: "#home-page-buttons",
    data: {
        currentPage: "Null",
        pages: ["About", "Education", "Experience", "Publications", "Links"]
    },
    computed: {
        currentPageComponent: function() {
            return "page-" + this.currentPage.toLowerCase();
        }
    }
});