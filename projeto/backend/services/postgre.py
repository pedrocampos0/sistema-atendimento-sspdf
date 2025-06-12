import psycopg_pool
import creds as c
from dotenv import load_dotenv
from typing import List, Tuple, Dict, Any, Optional, Union


class PostgreService:
    _pool: Optional[psycopg_pool.ConnectionPool] = None

    def __init__(self):
        if PostgreService._pool is None:
            print("Inicializando o pool de conexões do PostgreSQL...")
            load_dotenv()
            conninfo = (
                f"host={c.DB_HOST} "
                f"dbname={c.DB_NAME} "
                f"user={c.DB_USER} "
                f"password={c.DB_PASSWORD} "
                f"port={c.DB_PORT} "
                f"sslmode=require"
            )

            try:
                PostgreService._pool = psycopg_pool.ConnectionPool(conninfo, min_size=2, max_size=10)
                self._pool.check()
                print("Pool de conexões criado com sucesso.")
            except Exception as e:
                print(f"Erro ao criar o pool de conexões: {e}")
                PostgreService._pool = None
                raise

    def execute_query(self, query: str, params: Optional[Tuple] = None, fecth: Optional[bool] = False) -> Union[int, List[Dict[str, Any]]]:
        if not self._pool:
            raise ConnectionError("Pool de conexões não inicializado.")

        try:
            with self._pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(query, params)
                    conn.commit()
                    if fecth:
                        results = []
                        columns = [desc[0] for desc in cur.description]
                        for row in cur.fetchall():
                            results.append(dict(zip(columns, row)))
                        return results
                    else:
                        return cur.rowcount
        except Exception as e:
            print(f"Erro ao executar a query: {e}")
            return 0

    def fetch_all(self, query: str, params: Optional[Tuple] = None) -> List[Dict[str, Any]]:
        if not self._pool:
            raise ConnectionError("Pool de conexões não inicializado.")

        results: List[Dict[str, Any]] = []
        try:
            with self._pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(query, params)
                    columns = [desc[0] for desc in cur.description]
                    for row in cur.fetchall():
                        results.append(dict(zip(columns, row)))
        except Exception as e:
            print(f"Erro ao buscar dados: {e}")

        return results

    def fetch_one(self, query: str, params: Optional[Tuple] = None) -> Optional[Dict[str, Any]]:
        if not self._pool:
            raise ConnectionError("Pool de conexões não inicializado.")

        result: Optional[Dict[str, Any]] = None
        try:
            with self._pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(query, params)
                    row = cur.fetchone()
                    if row:
                        columns = [desc[0] for desc in cur.description]
                        result = dict(zip(columns, row))
        except Exception as e:
            print(f"Erro ao buscar dado: {e}")

        return result

    def close_pool(self):
        if self._pool:
            print("Fechando o pool de conexões.")
            self._pool.close()
            PostgreService._pool = None


if __name__ == '__main__':
    p = PostgreService()
    r = p.execute_query('SELECT id, role FROM public.roles;', fecth=True)
    print(r)
