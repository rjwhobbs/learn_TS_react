const thing = {
    x: 22,
    fn: function() {
        console.log(this);
    },
    meth: {
        whatWhat() {
            console.log(this);
        }
    }
}

thing.fn();
thing.meth.whatWhat();