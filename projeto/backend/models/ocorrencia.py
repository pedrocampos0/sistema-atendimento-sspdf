from enum import Enum

from pydantic import BaseModel
from typing import Optional

class Ocorrencia(Enum):
    TRAFICO_DE_DROGAS = 'Tráfico de Drogas'
    ROUBO = 'Roubo'
    FURTO = 'Furto'
    HOMICIDIO = 'Homicídio'
    VIOLENCIA_DOMESTICA = 'Violência Doméstica'
    PERTURBACAO_DO_SOSSEGO = 'Perturbação do Sossego'
    VANDALISMO = 'Vandalismo'
    MAUS_TRATOS_A_ANIMAIS = 'Maus-tratos a Animais'
    CORRUPCAO = 'Corrupção'
    DESAPARECIMENTO_DE_PESSOA = 'Desaparecimento de Pessoa'
    PORTE_ILEGAL_DE_ARMA = 'Porte Ilegal de Arma'
    EXTORSAO = 'Extorsão'
    ESTELIONATO = 'Estelionato'
    OUTROS = 'Outros'

class OcorrenciaBase(BaseModel):
    id: int
    nome: Optional[str] = None
    descricao: Optional[str] = None

