import service_response from "../2_services/service_response.js"
import { upload } from "../multer_uploads_img/serv_uploads.js";




async function set(req, res) {

    upload.array('files[]', 36)
        (req, res, async function (err) {
            if (err) {
                return res.status(500).json({ error: 'Erro ao fazer upload dos arquivos ' + err });
            }

            try {
                var files = req.files; // Array de arquivos enviados
                var auditoriaData = JSON.parse(req.body.auditoriaData); // Dados JSON


                // Mapeando as respostas e associando as imagens enviadas
                var response = auditoriaData.map((item) => {
                    const {
                        auditor,
                        celula,
                        produto,
                        turno,
                        ok,
                        nok,
                        na,
                        observation,
                        data,
                        section,
                        questionId,
                        question
                    } = item;

                    // Associar imagens ao questionId
                    const associatedImages = files
                        .filter((file) => file.originalname.startsWith(questionId)) // Filtra arquivos relacionados ao questionId
                        .map((file) => file.path); // Pega os nomes dos arquivos

                    return {
                        auditor,
                        celula,
                        produto,
                        turno,
                        ok,
                        nok,
                        na,
                        observation,
                        img: associatedImages, // Adiciona as imagens relacionadas
                        data,
                        section,
                        questionId,
                        question
                    };
                });



                // Salvando cada resposta no banco de dados
                const results = [];
                for (const item of response) {
                    const id_response = await service_response.set(
                        item.auditor,
                        item.celula,
                        item.produto,
                        item.turno,
                        item.ok ? 'OK' : '',
                        item.nok ? 'NOK' : '',
                        item.na ? 'N/A' : '',
                        item.observation,
                        item.img.length > 0 ? item.img.join(',') : '', // Junta os nomes das imagens em uma string separada por vírgulas
                        item.data,
                        item.section,
                        item.questionId,
                        item.question
                    );
                    results.push(id_response);
                }
                res.status(201).send('Auditoria concluida com sucesso!');

            } catch (error) {

                res.status(400).send('Erro ao processar upload');
            }

            //falta enviar pra service os dados
        })
};

async function listResponse(req, res) {


    const list = await service_response.listResponse()

     res.status(200).json(list)
 

}

export default { set, listResponse }