const isAuthGuard = async (to, from, next) => {
    return new Promise(() => {
        const random = Math.random() * 100

        if(random > 50) {
            console.log('Is Authenticated')
            next()
        } else {
            console.log('Blocked by isAuthGuard', random)
            next({ name: 'pokemon-home' })
        }
    })
}

export default isAuthGuard
