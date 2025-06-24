from services.postgre import PostgreService
from models.queries import Select


class OcorrenciaControl:
    @classmethod
    def selecionar_ocorrencias(cls):
        """
        Método para selecionar categorias das ocorrencias.
        :return: Retorna uma lista de denúncias.
        """
        try:
            psql = PostgreService()
            return psql.execute_query(Select.SELECT_OCORRENCIA)
        except Exception as e:
            raise Exception(f"Erro ao processar ocorrencias: {e}")