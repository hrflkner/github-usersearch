function About() {
    return (
        <section className="m-auto w-5/12">
            <h1 className="text-6xl mb-10">GitHub User Search</h1>
            <p className="mb-10 text-2xl font-light">
                This React app connects to GitHub's Rest API to search for
                User's and their account info. Dynamically created user account
                pages are rendered when a user is selected.
            </p>
            <p className="text-lg text-gray-400">
                Version{' '}
                <span className="text-white">2.0.0 - By Hunter Faulkner</span>
            </p>
        </section>
    );
}

export default About;
