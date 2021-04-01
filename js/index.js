import define, { jsh } from "https://unpkg.com/stateful-components@2.0.7/dist/index.js"
const { a, img, div } = jsh

define("w-badge-container", {
    style() {
        return `
            div {
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                display: flex;
                flex-direction: column;
            }
        `
    },
    render(state, props) {
        return div({}, ...props.childNodes)
    }
})

define("w-badge", {
    style() {
        return `
            a {
                padding: 0.75rem 1rem;
                background: #000;
                margin: 1rem 0 0 0;
                color: #fff;
                text-decoration: none;
                display: flex;
                align-items: center;
                transition: box-shadow 0.2s ease;
            }

            a:hover {
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
            }

            a img {
                background: #fff;
                border-radius: 50%;
                max-height: 1.5rem;
                margin: 0 0.75rem 0 0;
                object-fit: cover;
            }
        `
    },
    render(state, props) {
        const images = {
            github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            replit: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png"
        }

        const type = (props.getAttribute("type") || "github").toLowerCase()
        const tag = props.getAttribute("tag") || "nathan-pham"
        const href = `https://${type}.com/${tag}`
        const text = props.textContent || type
        const src = props.getAttribute("src") || images[type]

        return (
            a({ href, target: "_blank", rel: "noreferrer" },
                img({ src, alt: `${type} logo` }),
                text
            )
        )
    }
})