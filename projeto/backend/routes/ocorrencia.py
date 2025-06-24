from fastapi import APIRouter, Request, Depends
from controllers.ocorrencia import OcorrenciaControl
from routes.auth import User
from fastapi import HTTPException

ocorrencia_router = APIRouter(prefix="/ocorrencia", tags=["Ocorrencias"])


@ocorrencia_router.get("", description="Rota para listar todas as categorias de ocorrencias")
async def listar_ocorrencias(request: Request, current_user: User = Depends(User.auth_user)):
    """
    Endpoint para listar todas as ocorrencias.
    """
    try:
        ocorrencias = OcorrenciaControl.selecionar_ocorrencias()
        return ocorrencias
    except Exception as e:
        print(f"Erro ao processar /ocorrencias: {e}")
        raise HTTPException(status_code=500, detail={"message": "Falha ao listar ocorrencias", "error": str(e)})
