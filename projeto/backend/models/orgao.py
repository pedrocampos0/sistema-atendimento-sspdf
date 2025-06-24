from enum import Enum

from pydantic import BaseModel
from typing import Optional


class Orgao(Enum):
    PMDF = 'Polícia Militar do Distrito Federal (PMDF)'
    PCDF = 'Polícia Civil do Distrito Federal (PCDF)'
    CBMDF = 'Corpo de Bombeiros Militar do Distrito Federal (CBMDF)'
    PF_DF = 'Polícia Federal (Superintendência Regional no DF)'
    PRF_DF = 'Polícia Rodoviária Federal (PRF no DF)'


class OrgaoBase(BaseModel):
    id: int
    nome: str
    contato: Optional[str] = None
    horario_funcionamento: Optional[str] = None

