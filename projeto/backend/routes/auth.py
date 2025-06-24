
class User:
    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password

    @classmethod
    def auth_user(cls) -> bool:
        pass
