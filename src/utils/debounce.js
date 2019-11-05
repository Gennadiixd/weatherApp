export default (cbf, delay) => {
    let timer;
    let controller;
    let signal;
    return (query) => {
        if (signal) {
            controller.abort();
            signal = null;
        }

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            controller = new AbortController();
            signal = controller.signal;
            cbf(query, signal);
        }, delay);
    }
}