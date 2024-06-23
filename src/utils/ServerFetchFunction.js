export async function fetchEnvVars(keys) {
    const props = {}
    keys.forEach(key => {
        props[key] = process.env[key]
    })
    return { props }
}