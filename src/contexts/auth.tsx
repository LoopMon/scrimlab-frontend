import { createContext, useState, ReactNode, FC } from "react"
import api from "../services/api"
import useLanguage from "../hooks/useLanguage"

// Definição do tipo User
interface User {
  nome: string
  email: string
  senha: string
}

// Tipo do valor do contexto
interface AuthContextType {
  user: User | null
  signin: (email: string, senha: string) => Promise<string | void>
  signup: (nome: string, email: string, senha: string) => Promise<string | void>
  signout: () => Promise<void>
}

// Define o contexto com tipos
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { i18n, lang }: any = useLanguage()
  const [user, setUser] = useState<User | null>(null) // O estado do usuário pode ser User ou null

  const signin = async (
    email: string,
    senha: string
  ): Promise<string | void> => {
    try {
      const usuarios: User[] = await api.get("/usuario")

      const usuario = usuarios.find((usuario) => usuario.email === email)

      if (usuario) {
        if (usuario.senha === senha) {
          setUser({ nome: usuario.nome, email, senha })
          return
        } else {
          return i18n(lang, "signinError_invalidFields")
        }
      } else {
        return i18n(lang, "signinError_invalidUser")
      }
    } catch (error) {
      console.error("Erro ao fazer login", error)
      return i18n(lang, "signinError_anotherError")
    }
  }

  const signup = async (
    nome: string,
    email: string,
    senha: string
  ): Promise<string | void> => {
    try {
      const usuarios: User[] = await api.get("usuario")
      console.log(usuarios)
      const usuarioNome = usuarios.find((usuario) => usuario.nome === nome)

      if (usuarioNome) {
        return i18n(lang, "signupError_invalidUser")
      }

      const usuarioEmail = usuarios.find((usuario) => usuario.email === email)

      if (usuarioEmail) {
        return i18n(lang, "signupError_invalidEmail")
      }

      await api.post("usuario/signup", {
        nome,
        email,
        senha,
      })

      return
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error)
      return i18n(lang, "signupError_anotherError")
    }
  }

  const signout = async (): Promise<void> => {
    const dashboard: any = await api.get("/dashboard")
    await api.put("/dashboard/1", {
      onlineUsers: Number(dashboard[0].onlineUsers) - 1,
    })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
