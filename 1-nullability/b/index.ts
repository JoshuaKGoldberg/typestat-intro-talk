class StringBuilder {
    text: string = "";

    append(extra: string) {
        this.text += extra;
    }

    dispose() {
        this.text = null;
    }
}