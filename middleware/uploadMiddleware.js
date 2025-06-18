import multer from 'multer';
import path from 'path';

// Upload qovluğuna yazılacaq yerin ayarlanması
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // uploads/ qovluğuna yazacaq
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Fayl tipi yoxlanışı (yalnız şəkillər üçün)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Yalnız şəkil yükləyə bilərsiniz!'));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
