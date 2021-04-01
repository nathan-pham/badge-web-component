import define, { jsh } from "https://unpkg.com/stateful-components@2.0.7/dist/index.js"
const { a, img, div } = jsh

define("w-badge-container", {
    style() {
        return `
            div {
                position: fixed;
                bottom: 1.5rem;
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
                padding: 0.5rem 0.75rem;
                background: #000;
                margin: 1rem 0 0 0;
                color: #fff;
                text-decoration: none;
                transition: box-shadow 0.2s ease;
            }

            a:hover {
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
            }
        `
    },
    render(state, props) {
        const type = (props.getAttribute("type") || "github").toLowerCase()
        const tag = props.getAttribute("tag") || "nathan-pham"
        const href = `https://${type}.com/${tag}`
        const text = props.textContent || type

        const images = {
            github: ""
        }

        return (
            a({ href, target: "_blank", rel: "noreferrer" },
                text
            )
        )
    }
})