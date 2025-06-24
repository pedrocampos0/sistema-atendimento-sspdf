from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class DenunciaBase(BaseModel):
    descricao: Optional[str] = None
    localizacao: Optional[str] = None
    status_id: Optional[int] = 1  # Pendente
    ocorrencia_id: int
    orgao_id: Optional[int] = 1  # PMDF
    agente_id: Optional[int] = None


class DenunciaUpdate(BaseModel):
    descricao: Optional[str] = None
    localizacao: Optional[str] = None
    status_id: Optional[int] = None
    ocorrencia_id: Optional[int] = None
    orgao_id: Optional[int] = None
    agente_id: Optional[int] = None

