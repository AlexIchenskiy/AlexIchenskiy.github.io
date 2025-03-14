import { Fade } from "react-reveal";

function Resume(props) {
    return (
        <section className="resume" id="resume">
            <Fade duration={1000} when={props.loaded} bottom>
                <div className="education">
                    <div className="title">
                        <span>{props.text.EDUCATION_TEXT.toUpperCase()}</span>
                    </div>
                    <div className="educationList">
                        <div>
                            <h1>{props.text.UNIVERSITY_NAME_TEXT}</h1>
                            <h2>{props.text.UNIVERSITY_DATE_MSC_TEXT}</h2>
                        </div>
                        <div>
                            <h1>{props.text.UNIVERSITY_NAME_TEXT}</h1>
                            <h2>{props.text.UNIVERSITY_DATE_TEXT}</h2>
                        </div>
                        <div>
                            <h1>{props.text.SCHOOL_NAME_TEXT}</h1>
                            <h2>{props.text.SCHOOL_DATE_TEXT}</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="title">
                        <span>{props.text.PASSION_TEXT.toUpperCase()}</span>
                    </div>
                    <div>
                        <a
                            className="roundButton"
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.HTML_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.CSS_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.JS_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://reactjs.org/docs/getting-started.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.REACT_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.w3schools.com/java/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.JAVA_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://spring.io/projects/spring-boot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.SPRING_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.postgresql.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.SQL_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://ubuntu.com/tutorials/command-line-for-beginners#1-overview"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.LINUX_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.docker.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.DOCKER_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.w3schools.com/git/git_getstarted.asp?remote=github"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.GIT_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.fer.unizg.hr/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.SCIENCE_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://restfulapi.net/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.REST_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://roadmap.sh/frontend/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.FRONTEND_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://roadmap.sh/backend"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.BACKEND_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://memgraph.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.MEMGRAPH_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://memgraph.com/blog/what-is-a-graph-database"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.GRAPH_DATABASE_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://spock.fer.hr/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.STARTUPS_TEXT}</span>
                        </a>
                        <a
                            className="roundButton"
                            href="https://www.awwwards.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{props.text.ART_TEXT}</span>
                        </a>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Resume;
