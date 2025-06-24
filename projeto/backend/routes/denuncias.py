from fastapi import APIRouter, Request, Depends
from fastapi.openapi.models import Response
from fastapi.params import Query

from controllers.denuncia import DenunciaControl
from models.denuncia import DenunciaBase
from routes.auth import User
from fastapi import HTTPException

denuncias_router = APIRouter(prefix="/denuncia", tags=["Denuncias"])

@denuncias_router.get("", description="Rota para listar todas as denúncias")
async def listar_denuncias(request: Request, current_user: User = Depends(User.auth_user)):
    """
    Endpoint para listar todas as denúncias.
    """
    try:
        denuncias = DenunciaControl.selecionar_denuncias()
        return denuncias
    except Exception as e:
        print(f"Erro ao processar /denuncia: {e}")
        raise HTTPException(status_code=500, detail={"message": "Falha ao listar denúncias", "error": str(e)})

@denuncias_router.get("/procolo", description="Rota para listar uma denúncia pelo código do protocolo")
async def lista_denuncia(request: Request, protocolo: str = Query(..., description="Codigo Protocolo"), current_user: User = Depends(User.auth_user)):
    """
    Endpoint para listar uma denuncia por codigo do protocolo.
    """
    try:
        denuncia = DenunciaControl.selecionar_denuncia_by_cod(protocolo)
        return denuncia
    except Exception as e:
        print(f"Erro ao processar /denuncia: {e}")
        raise HTTPException(status_code=500, detail={"message": "Falha ao listar denúncias", "error": str(e)})

@denuncias_router.post("", description="Rota para inserir uma denúncia")
async def inserir_denuncia(request: Request, denuncia: DenunciaBase, current_user: User = Depends(User.auth_user)):
    """
    Endpoint para inserir denuncias.
    """
    try:
        d = DenunciaControl.insert_denuncia(denuncia)
        return d
    except Exception as e:
        print(f"Erro ao processar /ativos/altas: {e}")
        raise HTTPException(status_code=500, detail={"message": "Falha ao inserir denúncia", "error": str(e)})


@denuncias_router.get("/orgaos", description="Rota para listar órgãos das denúncias")
async def listar_orgaos(request: Request, current_user: User = Depends(User.auth_user)):
    """
    Endpoint para listar órgãos das denúncias.
    """
    try:
        orgaos = DenunciaControl.selecionar_orgaos()
        return orgaos
    except Exception as e:
        print(f"Erro ao processar /denuncia/orgaos: {e}")
        raise HTTPException(status_code=500, detail={"message": "Falha ao listar órgãos", "error": str(e)})
