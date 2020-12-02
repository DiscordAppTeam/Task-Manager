const pages = {

    index (req, res) {
       return res.render('index')
    },
    main (req, res) {
        return res.render('main')
    }

}

module.exports = pages