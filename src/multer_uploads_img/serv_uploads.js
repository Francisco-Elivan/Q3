import multer from 'multer';

// Configurar o armazenamento de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'src/multer_uploads_img/uploads/'); // Pasta onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix+'-'+ file.originalname);
      // Gera um nome único para cada arquivo, usando a data atual e um número aleatório, e mantém a extensão original do arquivo.
    }
  });
  
 export const upload = multer({
    storage, limits: { fileSize: 10 * 1024 * 1024 }, // Limite de 5MB por arquivo
  
  });

