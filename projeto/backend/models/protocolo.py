from pydantic import BaseModel


class ProtocoloBase(BaseModel):
    id: int
    codigo: str
    denuncia_id: int
