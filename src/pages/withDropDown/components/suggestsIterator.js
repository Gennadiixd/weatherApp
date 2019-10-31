export default class SuggestsIterator {
    constructor(refs = {current: []}, current = -1, setCurrent = () => {}, isOpen = false) {
        this.isOpen = isOpen;
        this.refs = refs;
        this.current = current;
        this.setCurrent = setCurrent;
        this.hasNext = current < refs.current.length;
        this.hasPrev = current >= 0;
        this.length = refs.current.length;
    }
    next() {
        if (this.hasNext && this.length && this.isOpen) {
            this.refs.current[++this.current].focus();
            this.hasNext = this.current < this.refs.current.length - 1;
            this.hasPrev = this.current > 0;
        }
    }
    prev() {
        if (this.hasPrev && this.length && this.isOpen) {
            this.refs.current[--this.current].focus();
            this.hasNext = this.current < this.refs.current.length - 1;
            this.hasPrev = this.current > 0;
        }
    }
}