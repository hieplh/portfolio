import About from "./contents/about";
import Certificates from "./contents/certificates";
import Contact from "./contents/contact";
import Projects from "./contents/projects";

export default function Content() {
    return (
        <div className="flex flex-col my-2">
            <About />
            <Projects />
            <Certificates />
            <Contact />
        </div>
    )
}