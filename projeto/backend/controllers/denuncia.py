import uuid

from models.denuncia import DenunciaBase
from services.postgre import PostgreService
from models.queries import Select, Insert, Update, Delete


class DenunciaControl:
    @classmethod
    def selecionar_denuncias(cls):
        """
        Método para selecionar todas as denúncias.
        :return: Retorna uma lista de denúncias.
        """
        try:
            psql = PostgreService()
            return psql.execute_query(Select.SELECT_DENUNCIA_COMPLETA)
        except Exception as e:
            raise Exception(f"Erro ao processar denúncias: {e}")

    @classmethod
    def selecionar_denuncia_by_cod(cls, cod: str):
        """
        Método para selecionar uma denúncia pelo código do protocolo.
        :return: Retorna uma denúncias.
        """
        try:
            psql = PostgreService()
            return psql.execute_query(Select.SELECT_DENUNCIA_BY_PROCOLO_COD, {'codigo': cod})
        except Exception as e:
            raise Exception(f"Erro ao processar denúncias: {e}")

    @classmethod
    def insert_denuncia(cls, denuncia: DenunciaBase):
        """
        Método para inserir uma denúncia.
        :param denuncia: Objeto DenunciaBase contendo os dados da denúncia.
        :return: Retorna a denúncia inserida.
        """
        try:
            psql = PostgreService()
            denuncia_id = psql.execute_query(Insert.INSERT_DENUNCIA, {
                'descricao': denuncia.descricao,
                'localizacao': denuncia.localizacao,
                'status_id': denuncia.status_id,
                'ocorrencia_id': denuncia.ocorrencia_id,
                'orgao_id': denuncia.orgao_id,
                'agente_id': denuncia.agente_id
            })
            dict_denuncia = denuncia.dict()
            dict_denuncia['id'] = denuncia_id[0]['id']
            protocolo = psql.execute_query(Insert.INSERT_PROTOCOLO, {
                'codigo': f"DEN-{dict_denuncia['id']}-{uuid.uuid4().hex[:6].upper()}",
                'denuncia_id': dict_denuncia['id']
            })
            dict_denuncia['protocolo_id'] = protocolo[0]['id']
            dict_denuncia['protocolo_codigo'] = protocolo[0]['codigo']
            return dict_denuncia
        except Exception as e:
            raise Exception(f"Erro ao processar denúncia: {e}")

    @classmethod
    def selecionar_orgaos(self):
        psql = PostgreService()
        return psql.execute_query(Select.SELECT_ORGAO)