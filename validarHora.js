module.exports = (req, res, next) => {
    const currentHour = new Date().getHours();
  
    if (currentHour >= 12 && currentHour < 24) {
      next();
    } else {
      res.status(403).send('Aún no son las 12 de la mañana');
    }
  };