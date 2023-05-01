function select(selector: any): any {
    return document.querySelector(selector)
}

export const selector = {
    select: select
}
