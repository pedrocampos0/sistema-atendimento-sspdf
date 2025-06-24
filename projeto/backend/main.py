from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.denuncias import denuncias_router
from routes.ocorrencia import ocorrencia_router

app = FastAPI(
    title="Sistema de atendimento para denúncias anônimas",
    description="Backend em FastAPI",
    version="0.1.0",
)
origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(denuncias_router)
app.include_router(ocorrencia_router)
