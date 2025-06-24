class Select:
    SELECT_STATUS = "SELECT id, status, descricao FROM status ORDER BY id"
    SELECT_STATUS_BY_ID = "SELECT id, status, descricao FROM status WHERE id = %(id)s"

    SELECT_OCORRENCIA = "SELECT id, nome, descricao FROM ocorrencia ORDER BY nome"
    SELECT_OCORRENCIA_BY_ID = "SELECT id, nome, descricao FROM ocorrencia WHERE id = %(id)s"

    SELECT_ORGAO = "SELECT id, nome, contato, horario_funcionamento FROM orgao ORDER BY nome"
    SELECT_ORGAO_BY_ID = "SELECT id, nome, contato, horario_funcionamento FROM orgao WHERE id = %(id)s"

    SELECT_ROLES = "SELECT id, role FROM roles ORDER BY role"
    SELECT_ROLES_BY_ID = "SELECT id, role FROM roles WHERE id = %(id)s"

    SELECT_AGENTE = """
        SELECT a.id, a.nome, a.contato, a.role_id, r.role 
        FROM agente a
        JOIN roles r ON a.role_id = r.id
        ORDER BY a.nome
    """
    SELECT_AGENTE_BY_ID = """
        SELECT a.id, a.nome, a.contato, a.role_id, r.role 
        FROM agente a
        JOIN roles r ON a.role_id = r.id
        WHERE a.id = %(id)s
    """

    SELECT_DENUNCIA = "SELECT id, data_hora, localizacao, descricao,  status_id, ocorrencia_id, orgao_id, agente_id FROM denuncia ORDER BY data_hora DESC"
    SELECT_DENUNCIA_BY_ID = "SELECT id, data_hora, localizacao, descricao, status_id, ocorrencia_id, orgao_id, agente_id FROM denuncia WHERE id = %(id)s"
    SELECT_DENUNCIA_BY_PROCOLO_COD = """
        SELECT 
            d.id,
            d.data_hora,
            d.localizacao,
            d.descricao,
            s.status AS status_nome,
            s.id as status_id,
            o.nome AS ocorrencia_nome,
            o.id AS ocorrencia_id,
            org.nome AS orgao_nome,
            org.id AS orgao_id,
            a.nome AS agente_nome,
            a.id AS agente_id,
            p.codigo AS protocolo_codigo,
            p.id AS protocolo_id
        FROM denuncia d
        JOIN status s ON d.status_id = s.id
        JOIN ocorrencia o ON d.ocorrencia_id = o.id
        JOIN orgao org ON d.orgao_id = org.id
        LEFT JOIN agente a ON d.agente_id = a.id
        LEFT JOIN protocolo p ON p.denuncia_id = d.id
        WHERE p.codigo = %(codigo)s
        ORDER BY d.data_hora DESC
    """
    SELECT_DENUNCIA_COMPLETA = """
        SELECT 
            d.id,
            d.data_hora,
            d.localizacao,
            d.descricao,
            s.status AS status_nome,
            s.id as status_id,
            o.nome AS ocorrencia_nome,
            o.id AS ocorrencia_id,
            org.nome AS orgao_nome,
            org.id AS orgao_id,
            a.nome AS agente_nome,
            a.id AS agente_id,
            p.codigo AS protocolo_codigo,
            p.id AS protocolo_id
        FROM denuncia d
        JOIN status s ON d.status_id = s.id
        JOIN ocorrencia o ON d.ocorrencia_id = o.id
        JOIN orgao org ON d.orgao_id = org.id
        LEFT JOIN agente a ON d.agente_id = a.id
        LEFT JOIN protocolo p ON p.denuncia_id = d.id
        ORDER BY d.data_hora DESC
    """

    SELECT_PROTOCOLO = "SELECT id, codigo, denuncia_id FROM protocolo"
    SELECT_PROTOCOLO_BY_ID = "SELECT id, codigo, denuncia_id FROM protocolo WHERE id = %(id)s"
    SELECT_PROTOCOLO_BY_CODIGO = "SELECT id, codigo, denuncia_id FROM protocolo WHERE codigo = %(codigo)s"


class Insert:
    INSERT_STATUS = "INSERT INTO status (status, descricao) VALUES (%(status)s, %(descricao)s) RETURNING id"
    INSERT_OCORRENCIA = "INSERT INTO ocorrencia (nome, descricao) VALUES (%(nome)s, %(descricao)s) RETURNING id"
    INSERT_ORGAO = "INSERT INTO orgao (nome, contato, horario_funcionamento) VALUES (%(nome)s, %(contato)s, %(horario_funcionamento)s) RETURNING id"
    INSERT_ROLES = "INSERT INTO roles (role) VALUES (%(role)s) RETURNING id"
    INSERT_AGENTE = "INSERT INTO agente (nome, contato, role_id) VALUES (%(nome)s, %(contato)s, %(role_id)s) RETURNING id"
    INSERT_DENUNCIA = """
        INSERT INTO denuncia (localizacao, descricao, status_id, ocorrencia_id, orgao_id, agente_id) 
        VALUES (%(localizacao)s, %(descricao)s, %(status_id)s, %(ocorrencia_id)s, %(orgao_id)s, %(agente_id)s) 
        RETURNING id
    """
    INSERT_PROTOCOLO = "INSERT INTO protocolo (codigo, denuncia_id) VALUES (%(codigo)s, %(denuncia_id)s) RETURNING id, codigo"


class Update:
    UPDATE_STATUS = "UPDATE status SET status = %(status)s, descricao = %(descricao)s WHERE id = %(id)s"
    UPDATE_OCORRENCIA = "UPDATE ocorrencia SET nome = %(nome)s, descricao = %(descricao)s WHERE id = %(id)s"
    UPDATE_ORGAO = "UPDATE orgao SET nome = %(nome)s, contato = %(contato)s, horario_funcionamento = %(horario_funcionamento)s WHERE id = %(id)s"
    UPDATE_ROLES = "UPDATE roles SET role = %(role)s WHERE id = %(id)s"
    UPDATE_AGENTE = "UPDATE agente SET nome = %(nome)s, contato = %(contato)s, role_id = %(role_id)s WHERE id = %(id)s"
    UPDATE_DENUNCIA = """
        UPDATE denuncia SET 
            descricao = %(descricao)s,
            localizacao = %(localizacao)s, 
            status_id = %(status_id)s, 
            ocorrencia_id = %(ocorrencia_id)s, 
            orgao_id = %(orgao_id)s, 
            agente_id = %(agente_id)s 
        WHERE id = %(id)s
    """
    UPDATE_PROTOCOLO = "UPDATE protocolo SET codigo = %(codigo)s, denuncia_id = %(denuncia_id)s WHERE id = %(id)s"


class Delete:
    DELETE_STATUS = "DELETE FROM status WHERE id = %(id)s"
    DELETE_OCORRENCIA = "DELETE FROM ocorrencia WHERE id = %(id)s"
    DELETE_ORGAO = "DELETE FROM orgao WHERE id = %(id)s"
    DELETE_ROLES = "DELETE FROM roles WHERE id = %(id)s"
    DELETE_AGENTE = "DELETE FROM agente WHERE id = %(id)s"
    DELETE_DENUNCIA = "DELETE FROM denuncia WHERE id = %(id)s"
    DELETE_PROTOCOLO = "DELETE FROM protocolo WHERE id = %(id)s"
