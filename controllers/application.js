const applicationController = {
  index: (req, res) => {
    res.render('index')
  },
  secret: (req, res) => {
    if (req.isAuthenticated()) { 
      res.render('secret') 
    }
    else {
      res.redirect('/')
    }
  }
}

module.exports = applicationController
