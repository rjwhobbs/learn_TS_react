const thing = {
    x: 22,
    fn: function() {
        console.log(this);
    },
    meth: {
        whatWhat() {
            console.log(this.x);
        }
    }
}

thing.fn();
thing.meth.whatWhat();

