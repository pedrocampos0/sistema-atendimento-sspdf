from enum import Enum
from pydantic import BaseModel
from typing import Optional


class Status(Enum):
    PENDENTE = "Pendente"
    EM_ANDAMENTO = "Em Andamento"
    CONCLUIDA = "Concluída"
    CANCELADA = "Cancelada"


class StatusBase(BaseModel):
    id: int
    status: Status
    descricao: Optional[str] = None
