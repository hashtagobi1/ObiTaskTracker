import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h3> Version 1.0.6</h3>

            <br />
            <h4>How does it work??</h4>
            <br />
            <p>First of all, hi lol! Thanks for interacting with me! Cool. So. The functionality is as follows.
            <br />
            <br />
                <ul className="list">
                    <li>Create a task with a completion date</li>
                    <li>Choose to add a reminder</li>
                    <li>Click 'X' to delete the task once you've done itr</li>
                    <li>Double click (or tap) to add a reminder! </li>
                </ul>
            </p>
            <br/>

            <h5>Created by Obinna</h5>
            <h5> <a href="https://uk.linkedin.com/in/obinna-anokwuru-647231149">LinkedIn</a></h5>

            <Link to="/">Go Back</Link>

        </div>
    )
}

export default About
