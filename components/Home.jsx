import React from "react"

const Home = () => {
    return (
        <>
        <div className="home__container">
            <div className="home__content">
                <h1>Whats the weather like today?</h1>
                <form>
            <label>
                <input type="text" value="" onChange="" placeholder="select your city" />
                </label>
                <input type="submit" value="Submit" />
            </form>

            </div>

        </div>
        </>
    )
}

export default Home