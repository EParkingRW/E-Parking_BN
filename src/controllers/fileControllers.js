import path from 'path';

export default class FileController {
  
  static async downloadImages(req, res) {
    const { name } = req.params;
    const file = path.join(__dirname, `../files/images/${name}`);
    return res.download(file);
  }

  static async downloadUploads(req, res) {
    const { name } = req.params;
    const file = path.join(__dirname, `../files/uploads/${name}`);
    return res.download(file);
  }

  static async getImagesLocation(req, res) {
    const { name } = req.params;
    const file = path.join(__dirname, `../files/images/${name}`);
    return res.sendFile(file);
  }
}
