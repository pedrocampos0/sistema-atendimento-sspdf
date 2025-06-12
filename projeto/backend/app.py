import uvicorn
import os

PORT = int(os.getenv("PORT", 8000))

if __name__ == "__main__":
    print(f"Iniciando o backend FastAPI na porta {PORT}...")
    uvicorn.run("main:app", host="0.0.0.0", port=PORT, reload=True)
