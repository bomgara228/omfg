
export const allGames = fetch('https://6634f8309bb0df2359a36312.mockapi.io/api/apps/apps', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(tasks => {
        return (tasks)
    }).catch(error => {
        // handle error
    })