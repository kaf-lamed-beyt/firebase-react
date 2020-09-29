import React from 'react'

const Loader = () => {
    const ready = document.readyState

    document.onreadystatechange = () => {
        if (ready !== "complete") {
            console.log(ready)
            document.querySelector("body").style.visibility = "hidden"
            document.querySelector("#loader").style.visibility = "visible"
        } else {
            document.querySelector("#loader").style.display = "none"
            document.querySelector("body").style.visibility = "visible"
        }
    }

    return (
        <div id="loader" className="center">

        </div>
    )
}

export default Loader