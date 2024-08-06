const express = require('express');
const multer = require('multer');
const cors = require('cors');
const docxToPdf = require('docx-pdf');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

// Ensure the uploads and files directories exist
const uploadsDir = path.join(__dirname, 'uploads');
const filesDir = path.join(__dirname, 'files');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/convertFile', upload.single('file'), (req, res, next) => {
    console.log('Request received');
    if (!req.file) {
        console.log('No file uploaded');
        return res.status(400).json({
            message: "No file Uploaded",
        });
    }
    let outputpath = path.join(__dirname, "files", `${req.file.originalname}.pdf`);
    docxToPdf(req.file.path, outputpath, (err, result) => {
        if (err) {
            console.log('Conversion error:', err);
            return res.status(500).json({
                message: "Error converting docx to pdf",
            });
        }
        res.download(outputpath, () => {
            console.log('File downloaded:', outputpath);
        });
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
