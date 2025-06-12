from fastapi import FastAPI
from routes.ativos import ativos_router

app = FastAPI(
    title="Sistema de atendimento para denúncias anônimas",
    description="Backend em FastAPI",
    version="0.1.0",
)
app.include_router(ativos_router)
