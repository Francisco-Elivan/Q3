`-------------------------------------------------------------------------------`
### CREATE TABLE `question`
CREATE TABLE IF NOT EXISTS question(
    id_question INTEGER PRIMARY KEY AUTOINCREMENT,
    indice TEXT NOT NULL,
    question TEXT NOT NULL,
    id_ques_category INTEGER NOT NULL,
    FOREIGN KEY (id_ques_category) REFERENCES question_category(id_category)
);

`-------------------------------------------------------------------------------`
### `INSERT INTO question`
INSERT INTO question (id_ques_category, indice, question) VALUES (1, '1.1', 'Existem fontes de contaminação ou desorganização na área do processo que coloquem em risco a qualidade do produto?');
INSERT INTO question (id_ques_category, indice, question) VALUES (1, '1.2', 'Existe peças de outro modelo misturadas na linha com modelo sendo produzido no momento?');
INSERT INTO question (id_ques_category, indice, question) VALUES (2, '2.1', 'As embalagens/componentes estão corretamente identificadas, com todos os campos dos cartões de identificação preenchidos?');
INSERT INTO question (id_ques_category, indice, question) VALUES (2, '2.2', '"É possível a consulta de dados a partir do nº de rastreabilidade do produto? Consultar a rastreabilidade do produto sendo produzido no sistema MFG ou ACC.(Tela MFG 34.3.22.21.6)"');
INSERT INTO question (id_ques_category, indice, question) VALUES (3, '3.1', 'O operador está treinado para realizar a operação e está registrado no quadro de qualificação? (Atenção para os processos especiais)');
INSERT INTO question (id_ques_category, indice, question) VALUES (4, '4.1', 'Todo material suspeito e não conforme está identificado ?');
INSERT INTO question (id_ques_category, indice, question) VALUES (4, '4.2', 'Todo material suspeito e não conforme está segregado em local apropriado (área de material não conforme e/ou caixa de refugo)?');
INSERT INTO question (id_ques_category, indice, question) VALUES (4, '4.3', 'Todos os campos do cartão de interditado e/ou refugo estão preenchidos corretamente?');
INSERT INTO question (id_ques_category, indice, question) VALUES (4, '4.4', 'Os produtos da área de material não conforme devem ficar por no máximo 48 horas nesta área. Este é o prazo estipulado para definir o plano para solucionar o problema.');
INSERT INTO question (id_ques_category, indice, question) VALUES (5, '5.1', 'Todos os poka yokes estão funcionando corretamente e identificados?');
INSERT INTO question (id_ques_category, indice, question) VALUES (5, '5.2', 'Todas as Peças Padrão (boundary samples)  estão conforme 11 colors: Pintadas na cor laranja? Identificadas como aprovada (verde) / reprovada (vermelho)?Cadastradas no sistema de calibração e com selo de aferição não vencido?');
INSERT INTO question (id_ques_category, indice, question) VALUES (5, '5.3', 'Os meios de controle (dispositivos, aparelhos de medição, calibradores) estão aferidos e com selo de aferição não vencido?');
INSERT INTO question (id_ques_category, indice, question) VALUES (6, '6.1', 'As máquinas utilizadas para produção de caracteristicas especiais possuem identificação quanto a simbologia - "C" (crítica) e "S" significante?');
INSERT INTO question (id_ques_category, indice, question) VALUES (7, '7.1', 'Os controles / registros estão sendo preenchidos na frequência estabelecida, sem rasuras e com diário de bordo (quando necessário):  Ficha de Registro de Controle (FRC)/ Carta CEP/ Checklist de manutenção autônoma/ Ficha de Primeira e Ultima Peça (PUP)');
INSERT INTO question (id_ques_category, indice, question) VALUES (7, '7.2', '"Para todas as características significantes (S) há um controle especial na fabricação (CEP, 100% automático ou poka yoke), conforme Procedimento C45? Se não, o plano de ação está definido e acompanhado pela Gerência?" ');
INSERT INTO question (id_ques_category, indice, question) VALUES (8, '8.1', 'As Instruções temporárias estão dentro do prazo de validade (formulário EQ F005)?');
INSERT INTO question (id_ques_category, indice, question) VALUES (9, '9.1', 'Há alguma reclamação aberta para esta célula (incluindo reclamação intercompany - Limeira/ECO)? Qualidade em Alerta está na célula?');
INSERT INTO question (id_ques_category, indice, question) VALUES (9, '9.2', 'Operadores conhecem o problema e como inspecionar?');
INSERT INTO question (id_ques_category, indice, question) VALUES (10, '10.1', 'Relatório dimensional apresenta cotas de desenho e/ou processo fora dos limites de controle superior ou inferior, colocando em risco o cliente?');
INSERT INTO question (id_ques_category, indice, question) VALUES (10, '10.2', '"Peças do pedestal PUP, foram calibradas conforme plano de controle? Realize a calibração das peças como amostragem."');
INSERT INTO question (id_ques_category, indice, question) VALUES (11, '11.1', 'A composição quimica está sendo controlada nos pontos chave do processo? Realize análise de amostras como cross check.');
INSERT INTO question (id_ques_category, indice, question) VALUES (12, '12.1', 'Inoculação no molde está ocorrendo? Realize análise de amostras como cross check.');
INSERT INTO question (id_ques_category, indice, question) VALUES (12, '12.2', 'Temperatura de vazamento está sondo controloda e monitorada dentro de tolerâncias.');
INSERT INTO question (id_ques_category, indice, question) VALUES (12, '12.3', 'A composição quimica está sendo controlada nos pontos chave do processo? Realize análise de amostras como cross check.');
INSERT INTO question (id_ques_category, indice, question) VALUES (12, '12.4', 'Porcentagem de nodularização dos corpos de prova estão dentro do especificado? Realize amostragem no ultrassom NDT (Disa II)');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.1', 'Temperatura da areia');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.2', 'Umidade');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.3', 'Permeabilidade');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.4', 'R.T.U');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.5', 'R.C.V');
INSERT INTO question (id_ques_category, indice, question) VALUES (13, '13.6', 'Campactabilidade');
INSERT INTO question (id_ques_category, indice, question) VALUES (14, '14.1', 'Quantidade de Resina 1');
INSERT INTO question (id_ques_category, indice, question) VALUES (14, '14.2', 'Quantidade de Resina 2');
INSERT INTO question (id_ques_category, indice, question) VALUES (14, '14.3', 'Resitência Tração');
INSERT INTO question (id_ques_category, indice, question) VALUES (14, '14.4', 'Medição da espessura do macho conforme especificação');

`--------------------------------------------------------------------------------`
### CREATE TABLE `question_category`
CREATE TABLE IF NOT EXISTS question_category (
    id_category INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
);

`--------------------------------------------------------------------------------`
### CREATE TABLE `auditor`
CREATE TABLE auditor (
    id_auditor  INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL,
    pass        TEXT    NOT NULL,
    date_create TEXT    DEFAULT CURRENT_TIMESTAMP
);
`--------------------------------------------------------------------------------`
### CREATE TABLE `response_question`
CREATE TABLE response_question (
    id_response     INTEGER PRIMARY KEY AUTOINCREMENT,
    auditor         TEXT    NOT NULL,
    celula          TEXT    NOT NULL,
    produto         TEXT    NOT NULL,
    turno           TEXT    NOT NULL,
    ok              TEXT    NOT NULL,
    nok             TEXT    NOT NULL,
    na              TEXT,
    observation     TEXT,
    img             TEXT,
    date            DATE    NOT NULL,
    section         TEXT    NOT NULL,
    indice_question TEXT    NOT NULL,
    question        TEXT    NOT NULL
);

`-------------------------------------------------------------------------------`
### `INSERT INTO question category`
INSERT INTO question_category (categoria) VALUES ('Segurança / Limpeza e Organização');
INSERT INTO question_category (categoria) VALUES ('Identificação / Rastreabilidade');
INSERT INTO question_category (categoria) VALUES ('Treinamento');
INSERT INTO question_category (categoria) VALUES ('Controle de Material Não Conforme');
INSERT INTO question_category (categoria) VALUES ('Poka Yoke / Dispositivos de Medição');
INSERT INTO question_category (categoria) VALUES ('Máquinas e Equipamentos / Vida Útil de Ferramentas');
INSERT INTO question_category (categoria) VALUES ('Controles e Registros');
INSERT INTO question_category (categoria) VALUES ('Controle de Processo');
INSERT INTO question_category (categoria) VALUES ('Qualidade Alerta e Contenção');
INSERT INTO question_category (categoria) VALUES ('Auditoria de produto');
INSERT INTO question_category (categoria) VALUES ('Fusão');
INSERT INTO question_category (categoria) VALUES ('Moldagem');
INSERT INTO question_category (categoria) VALUES ('Central de Areia');
INSERT INTO question_category (categoria) VALUES ('Central de Areia');

`-------------------------------------------------------------------------------`
### CREATE TABLE `celula`
CREATE TABLE celula (
    id_celula  INTEGER                   PRIMARY KEY AUTOINCREMENT,
   celula         TEXT                      NOT NULL
);
`-------------------------------------------------------------------------------`
### LISTAR CATEGORY COM AS SUA QUESTION 
        SELECT 
            ct.category AS section,ct.id_category,
            JSON_GROUP_ARRAY(--agrupa tudo em uma array nomeando como questions
                JSON_OBJECT(--para cada indice e question agrupa como um array de objeto
                    'id', qt.indice,
                    'question', qt.question
                )
            ) AS questions
        FROM 
            question qt
            INNER JOIN question_category ct ON qt.id_ques_category = ct.id_category
        GROUP BY 
            ct.id_category ;








`SELECT * FROM respose_question WHERE date >= date('now', '-7 days');`