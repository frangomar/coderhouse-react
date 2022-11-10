let is_ok = true

export const customFetch = (time, task) => {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            if (is_ok) {
                res(task)
            } else {
                rej('ko')
            }
        }, time)
    })
}