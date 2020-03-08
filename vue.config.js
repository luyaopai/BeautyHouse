const express = require('express');

const app = express();
const appData = require('./data.json');

module.exports = {
  devServer: {
    overlay: false,
    before: (app) => {
      app.get('/api/cosmetic', (req, res) => {
        res.json({
          errno: 0,
          data: appData.cosmetic,
        });
      });

      app.get('/api/brand', (req, res) => {
        res.json({
          errno: 0,
          data: appData.brand,
        });
      });

      app.get('/api/ecommerce', (req, res) => {
        res.json({
          errno: 0,
          data: appData.ecommerce,
        });
      });

      app.get('/api/favorite', (req, res) => {
        res.json({
          errno: 0,
          data: appData.favorite,
        });
      });

      app.get('/api/blogger', (req, res) => {
        res.json({
          errno: 0,
          data: appData.blogger,
        });
      });

      app.get('/api/tips', (req, res) => {
        res.json({
          errno: 0,
          data: appData.tips,
        });
      });
    },
  },
};
