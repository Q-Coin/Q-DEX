const rateLimit = require('express-rate-limit');

// Limiteur de 4 requêtes par seconde
const secondLimiter = rateLimit({
  windowMs: 1000, // 1 seconde
  max: 4, // Limite chaque IP à 4 requêtes par seconde
  message: 'Too many requests from this IP, please try again after a second',
  standardHeaders: true, // Renvoie les informations de limitation de taux dans les en-têtes `RateLimit-*`
  legacyHeaders: false, // Désactive les en-têtes `X-RateLimit-*`
});

// Limiteur de 40 requêtes par minute
const minuteLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 40, // Limite chaque IP à 40 requêtes par minute
  message: 'Too many requests from this IP, please try again after a minute',
  standardHeaders: true, // Renvoie les informations de limitation de taux dans les en-têtes `RateLimit-*`
  legacyHeaders: false, // Désactive les en-têtes `X-RateLimit-*`
});

// Limiteur de 400 requêtes par heure
const hourLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 400, // Limite chaque IP à 400 requêtes par heure
  message: 'Too many requests from this IP, please try again after an hour',
  standardHeaders: true, // Renvoie les informations de limitation de taux dans les en-têtes `RateLimit-*`
  legacyHeaders: false, // Désactive les en-têtes `X-RateLimit-*`
});

// Middleware combiné
const limiter = (req, res, next) => {
  secondLimiter(req, res, (err) => {
    if (err) return next(err);
    minuteLimiter(req, res, (err) => {
      if (err) return next(err);
      hourLimiter(req, res, next);
    });
  });
};

module.exports = limiter;
