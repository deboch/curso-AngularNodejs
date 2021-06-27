'use strict'

var express = require('express');
var ArtistController = require('../controllers/artist');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/artists'});

api.get('/artist/:id', ArtistController.getArtist);
api.post('/artist', ArtistController.saveArtist);
api.get('/artists/:page?', ArtistController.getArtists);
api.put('/artist/:id', ArtistController.updateArtist);
api.delete('/artist/:id',ArtistController.deleteArtist);
api.post('/upload-image-artist/:id', [md_upload], ArtistController.uploadImage);
api.get('/get-image-artist/:imageFile', ArtistController.getImageFile);

module.exports = api;

