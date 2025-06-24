from pydantic import BaseModel
from typing import Optional


class AgenteBase(BaseModel):
    id: int
    nome: str
    contato: Optional[str] = None
    role_id: int
