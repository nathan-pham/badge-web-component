import define, { jsh as h, props } from "https://unpkg.com/stateful-components@2.1.1/dist/index.js"

const images = {
    github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    replit: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png"
}

define("w-badge-container", {
    style: `
        div {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            display: flex;
            flex-direction: column;
        }
    `,

    render(_, target) {
        return h.div({}, ...target.childNodes)
    }
})

define("w-badge", {
    state: {props: {}},

    style: `
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
    `,
    
    render(state, target) {
        const {type="github", tag="nathan-pham", src} = props(target)

        const href = `https://${type}.com/${tag}`
        const text = target.textContent || type
        
        return (
            h.a({ href, target: "_blank", rel: "noreferrer" },
                h.img({ src: src || images[type], alt: `${type} logo` }),
                text
            )
        )
    }
})