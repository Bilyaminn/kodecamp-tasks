const fetchGithubUserDetails = async username => {
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)

        if(!response.ok){
            throw new Error(`Github user ${username} not found`)
        }

        const user = await response.json()
        console.log(user)

    } catch(err) {
        console.error(err.message)
    }
    
}

// fetchGithubUserDetails('bilyaminn')
fetchGithubUserDetails('hbghnkg')
