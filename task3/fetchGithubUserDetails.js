const fetchGithubUserDetails = async username => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

fetchGithubUserDetails('bilyaminn')
fetchGithubUserDetails('hbghnkg')