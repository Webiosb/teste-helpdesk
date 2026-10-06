import { useState } from 'react'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('dashboard')
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  // A lista começa vazia
  const [chamados, setChamados] = useState([])

  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [prioridade, setPrioridade] = useState('')
  const [descricao, setDescricao] = useState('')

  function cadastrarChamado(event) {
    event.preventDefault()

    if (!titulo || !categoria || !prioridade || !descricao) {
      alert('Preencha todos os campos.')
      return
    }

    const novoChamado = {
      id: Date.now(),
      titulo,
      categoria,
      prioridade,
      descricao,
      status: 'Aberto',
    }

    setChamados([...chamados, novoChamado])

    setTitulo('')
    setCategoria('')
    setPrioridade('')
    setDescricao('')
    setMostrarFormulario(false)
  }

  return (
    <div className="app">

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">H</div>

          <div>
            <strong>HelpDesk</strong>
            <span>Central de Suporte</span>
          </div>
        </div>

        <nav>

          <p className="menu-title">MENU</p>

          <button
            className={
              pagina === 'dashboard'
                ? 'menu-item active'
                : 'menu-item'
            }
            onClick={() => setPagina('dashboard')}
          >
            <span>🏠</span>
            Dashboard
          </button>

          <button
            className={
              pagina === 'chamados'
                ? 'menu-item active'
                : 'menu-item'
            }
            onClick={() => setPagina('chamados')}
          >
            <span>🎫</span>
            Chamados
          </button>

          <button
            className={
              pagina === 'usuarios'
                ? 'menu-item active'
                : 'menu-item'
            }
            onClick={() => setPagina('usuarios')}
          >
            <span>👥</span>
            Usuários
          </button>

          <p className="menu-title">SISTEMA</p>

          <button
            className={
              pagina === 'config'
                ? 'menu-item active'
                : 'menu-item'
            }
            onClick={() => setPagina('config')}
          >
            <span>⚙️</span>
            Configurações
          </button>

        </nav>

        <div className="sidebar-footer">

          <div className="user-avatar">
            WB
          </div>

          <div>
            <strong>Usuário</strong>
            <span>Administrador</span>
          </div>

        </div>

      </aside>


      <main className="main">

        <header className="topbar">

          <div>

            <h1>
              {pagina === 'dashboard' && 'Dashboard'}
              {pagina === 'chamados' && 'Chamados'}
              {pagina === 'usuarios' && 'Usuários'}
              {pagina === 'config' && 'Configurações'}
            </h1>

            <p>Bem-vindo ao sistema de Help Desk.</p>

          </div>

          <div className="topbar-right">

            <button className="notification">
              🔔
            </button>

            <div className="profile">

              <div className="user-avatar">
                WB
              </div>

              <div>
                <strong>Usuário</strong>
                <span>Administrador</span>
              </div>

            </div>

          </div>

        </header>


        {/* DASHBOARD */}

        {pagina === 'dashboard' && (

          <section className="content">

            <div className="welcome">

              <div className="welcome-icon">
                👋
              </div>

              <div>

                <h2>Bem-vindo ao Help Desk!</h2>

                <p>
                  Acompanhe as informações do sistema
                  através do seu painel.
                </p>

              </div>

            </div>

            <div className="dashboard-cards">

              <div className="dashboard-card">
                <span>Total de chamados</span>
                <strong>{chamados.length}</strong>
              </div>

              <div className="dashboard-card">
                <span>Chamados abertos</span>
                <strong>
                  {
                    chamados.filter(
                      (chamado) => chamado.status === 'Aberto'
                    ).length
                  }
                </strong>
              </div>

            </div>

          </section>

        )}


        {/* CHAMADOS */}

        {pagina === 'chamados' && (

          <section className="content">

            <div className="section-header">

              <div>
                <h2>Chamados</h2>

                <p>
                  Cadastre e acompanhe os chamados do sistema.
                </p>
              </div>

              <button
                className="primary-button"
                onClick={() => setMostrarFormulario(true)}
              >
                + Novo chamado
              </button>

            </div>


            {/* FORMULÁRIO */}

            {mostrarFormulario && (

              <div className="form-container">

                <h2>Novo chamado</h2>

                <p>
                  Preencha as informações abaixo.
                </p>

                <form onSubmit={cadastrarChamado}>

                  <div className="form-group">

                    <label>Título</label>

                    <input
                      type="text"
                      placeholder="Digite o título do chamado"
                      value={titulo}
                      onChange={(event) =>
                        setTitulo(event.target.value)
                      }
                    />

                  </div>


                  <div className="form-group">

                    <label>Categoria</label>

                    <select
                      value={categoria}
                      onChange={(event) =>
                        setCategoria(event.target.value)
                      }
                    >

                      <option value="">
                        Selecione uma categoria
                      </option>

                      <option value="Hardware">
                        Hardware
                      </option>

                      <option value="Software">
                        Software
                      </option>

                      <option value="Rede">
                        Rede
                      </option>

                      <option value="Acesso">
                        Acesso
                      </option>

                      <option value="Outros">
                        Outros
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>Prioridade</label>

                    <select
                      value={prioridade}
                      onChange={(event) =>
                        setPrioridade(event.target.value)
                      }
                    >

                      <option value="">
                        Selecione a prioridade
                      </option>

                      <option value="Baixa">
                        Baixa
                      </option>

                      <option value="Média">
                        Média
                      </option>

                      <option value="Alta">
                        Alta
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>Descrição</label>

                    <textarea
                      placeholder="Descreva o problema..."
                      value={descricao}
                      onChange={(event) =>
                        setDescricao(event.target.value)
                      }
                    />

                  </div>


                  <div className="form-actions">

                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() =>
                        setMostrarFormulario(false)
                      }
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="primary-button"
                    >
                      Cadastrar chamado
                    </button>

                  </div>

                </form>

              </div>

            )}


            {/* LISTA DE CHAMADOS */}

            {!mostrarFormulario && chamados.length === 0 && (

              <div className="empty-state">

                <div className="empty-icon">
                  🎫
                </div>

                <h2>Nenhum chamado cadastrado</h2>

                <p>
                  Quando um chamado for cadastrado,
                  ele aparecerá aqui.
                </p>

              </div>

            )}


            {!mostrarFormulario && chamados.length > 0 && (

              <div className="chamados-lista">

                {chamados.map((chamado) => (

                  <div
                    className="chamado-card"
                    key={chamado.id}
                  >

                    <div className="chamado-topo">

                      <div>
                        <span className="chamado-id">
                          #{chamado.id}
                        </span>

                        <h3>{chamado.titulo}</h3>
                      </div>

                      <span className="status">
                        {chamado.status}
                      </span>

                    </div>

                    <p>{chamado.descricao}</p>

                    <div className="chamado-info">

                      <span>
                        Categoria: {chamado.categoria}
                      </span>

                      <span>
                        Prioridade: {chamado.prioridade}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </section>

        )}


        {/* USUÁRIOS */}

        {pagina === 'usuarios' && (

          <section className="content">

            <div className="section-header">

              <div>
                <h2>Usuários</h2>

                <p>
                  Gerencie os usuários do sistema.
                </p>
              </div>

              <button className="primary-button">
                + Novo usuário
              </button>

            </div>

            <div className="empty-state">

              <div className="empty-icon">
                👥
              </div>

              <h2>Nenhum usuário cadastrado</h2>

              <p>
                Os usuários cadastrados no sistema
                aparecerão aqui.
              </p>

            </div>

          </section>

        )}


        {/* CONFIGURAÇÕES */}

        {pagina === 'config' && (

          <section className="content">

            <div className="form-container">

              <h2>Configurações</h2>

              <p>
                Configure as opções do sistema.
              </p>

              <div className="settings-item">

                <div>
                  <strong>Notificações</strong>

                  <span>
                    Receber notificações sobre
                    atualizações do sistema.
                  </span>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                />

              </div>


              <div className="settings-item">

                <div>
                  <strong>Notificações por e-mail</strong>

                  <span>
                    Receber notificações através do e-mail.
                  </span>
                </div>

                <input type="checkbox" />

              </div>

            </div>

          </section>

        )}

      </main>

    </div>
  )
}

export default App