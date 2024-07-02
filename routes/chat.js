const express = require('express');
const router = express.Router();
const JitsiMeetExternalAPI = require('@jitsi/web-sdk');
router.get('/video-call', (req, res) => {
    res.render('video-call');
  });

module.exports = router;