const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
import videoList from './videos.json';

let videos = [
    { id:1, name: "train", location: './videos/video.mp4' },
    { id: 2, name: "mountain", location: './vidoes/video(1).mp4' }
]

app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});