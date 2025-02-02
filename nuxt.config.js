const colors = require("vuetify/es5/util/colors").default;

module.exports = {
    mode: "spa",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "%s - " + process.env.npm_package_name,
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "bootstrap-css-only/css/bootstrap.min.css",
        "mdbvue/lib/css/mdb.min.css",
        "~/assets/css/main.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/localStorage.js", ssr: false },
        { src: "~/plugins/socket.js", ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/vuetify"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            "nuxt-fontawesome",
            {
                imports: [{
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"]
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: ["fab"]
                    }
                ]
            }
        ],
        "@nuxtjs/axios"
    ],
    axios: {
        baseURL: "http://localhost:3335/",
        redirectError: {
            401: "/login",
            404: "/"
        }
    },
    fontawesome: {
        imports: [{
                set: "@fortawesome/free-solid-svg-icons", // Solid icons
                icons: [
                    "faCookieBite",
                    "faCommentDots",
                    "faEnvelope",
                    "faGrinWink",
                    "faHeart"
                ]
            },
            {
                set: "@fortawesome/free-brands-svg-icons", // Brand icons
                icons: [
                    "faDev",
                    "faFacebook",
                    "faTwitter",
                    "faInstagram",
                    "faYoutube",
                    "faGithub"
                ]
            }
        ]
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            violet: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                violet: {
                    primary: "#5F479F"
                }
            }
        },
        icons: {
            iconfont: "faSvg"
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        transpile: ["mdbvue/lib/components"],
        vendor: ["socket.io-client"]
    }
    // serverMiddleware: [
    //     // body-parser middleware
    //      bodyParser.json(),
    //     // session middleware
    //     session({
    //         secret: "super-secret-key",
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: { maxAge: 60000 }
    //     })
    // ]
};