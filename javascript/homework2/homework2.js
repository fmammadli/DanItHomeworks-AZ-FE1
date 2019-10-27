let userInput = prompt('Insert the number: ');

for (i = 1; i < userInput; i++) {
    if (userInput < 5) {
        console.log('Sorry, no numbers');
    } else if (i % 5 === 0) {
        console.log(i)
    }
}

// Describe in your own words why cycles are needed in a programming.
//
//     The Software Development Lifecycle is a systematic process for building software that ensures the quality and correctness of the software built.
//     SDLC process aims to produce high-quality software which meets customer expectations.
//     The software development should be complete in the pre-defined time frame and cost.
//     SDLC consists of a detailed plan which explains how to plan, build, and maintain specific software.
//     Every phase of the SDLC lifecycle has its own process and deliverables that feed into the next phase.
//     Here, are prime reasons why SDLC is important for developing a software system:
//     It offers a basis for project planning, scheduling, and estimating
//     Provides a framework for a standard set of activities and deliverables
//     It is a mechanism for project tracking and control
//     Increases visibility of project planning to all involved stakeholders of the development process
//     Increased and enhance development speed
//     Improved client relations
//     Helps you to decrease project risk and project management plan overhead
