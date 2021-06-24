import React from "react";
import Project from "./pages/Project";
import Homework from "./pages/Homework";

class Arrays extends React.Component {
    // 2 arrays: one for homework and one for grou projects

    render() {
        return (
            <div>
                <p>
                    Click on the photo to go to the working deployed website. Click on the title to go to the deployed Github Repo.
                </p>

                <h3>Group Projects</h3>
                {/* larger boxes */}
                <Project
                // PASS PROJECT NAME, DESCRIPTION, LINKS
                />

                <h3>Homework</h3>
                {/* smaller boxes */}
                <Homework
                // PASS PROJECT NAME, DESCRIPTION, LINKS
                />

            </div>
        )
    }


}
export default Arrays;