from pydantic import BaseModel
from typing import Optional


class RoleBase(BaseModel):
    role: str


class RoleUpdate(BaseModel):
    role: Optional[str] = None
