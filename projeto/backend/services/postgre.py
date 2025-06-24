from psycopg_pool import ConnectionPool
from services import creds as c
from typing import List, Tuple, Dict, Any, Optional, Union


class PostgreService(ConnectionPool):

    def __init__(self):
        print("Conectando ao PostgreSQL...")
        conninfo = (
            f"host={c.DB_HOST} "
            f"dbname={c.DB_NAME} "
            f"user={c.DB_USER} "
            f"password={c.DB_PASSWORD} "
            f"port={c.DB_PORT} "
            f"sslmode=require"
        )
        self.conninfo = conninfo
        super().__init__(conninfo, min_size=2, max_size=10)

    def __refresh(self, conninfo: str):
        try:
            super().__init__(conninfo, min_size=2, max_size=10)
            print("Pool de conexões criado com sucesso.")
        except Exception as e:
            print(f"Erro ao criar o pool de conexões: {e}")
            raise

    def execute_query(self, query: str, params: Optional[Union[Tuple, Dict]] = None, fecth: Optional[bool] = True) -> Union[int, List[Dict[str, Any]]]:
        if self.closed:
            self.__refresh(self.conninfo)
        try:
            with self.connection() as conn:
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
            raise ConnectionError(f"Erro ao executar a query: {e}")

    def close_pool(self):
        if self.check():
            print("Fechando o pool de conexões.")
            self.close()


if __name__ == '__main__':
    p = PostgreService()
    r = p.execute_query('SELECT id, role FROM public.roles;')
    print(r)
