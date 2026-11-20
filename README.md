# 🚛 Copiloto — O Canivete Suíço do Motorista na Estrada

> **Agenda inteligente de apoio ao tacógrafo, gestão de descansos e futura comunidade social em tempo real para motoristas profissionais.**

🔗 **Aceder ao Aplicativo:** https://vanthrabit.github.io/copiloto

---

##  Sobre o Projeto

O **Copiloto** nasceu dentro da cabine, criado de motorista para motorista, com o objetivo de eliminar as contas de cabeça, as anotações dispersas em cadernos e o risco de multas por esquecimento de prazos no tacógrafo digital. 

O projeto está a ser desenvolvido em etapas para se tornar o verdadeiro **"Canivete Suíço" da estrada** — unindo numa única aplicação leve, rápida e gratuita a gestão diária da jornada, alertas colaborativos entre colegas e um mapa social em tempo real.

---

##  Funcionalidades Atuais (Versão 1.0 — No Ar)

- ** Ficha Diária Inteligente:**
  - Cálculo automático de **amplitude** (13h normais / 15h estendidas) em tempo real.
  - Ajuste automático de **fuso horário** (ex.: Portugal UTC+0 ↔ Espanha UTC+1).
  - **GPS detalhado** com deteção automática de país, região, localidade e ponto exato, além de campo dedicado para notas/referências de paragem.
  - Cálculo automático de **quilómetros percorridos** e histórico completo.
- ** Gestão Automática de Pausas e Repousos (Estilo Tacógrafo):**
  - Integração automática entre o fim do turno e o início do descanso.
  - Contador semanal de **repousos diários reduzidos (9h — limite de 3/3)** e **normais (11h)**.
  - Cálculo de **pausas semanais (24h reduzida / 45h+ normal)** com data e hora limite para compensação (3.ª semana seguinte) e prazo máximo para a próxima pausa semanal.
- ** Exportação de Relatórios:**
  - Geração instantânea de relatórios em **PDF**, **Excel (CSV)** ou texto formatado para partilha rápida via **WhatsApp / E-mail**.
- ** Guia Interativo de Ticket Manual:**
  - Esquemas animados passo a passo de como preencher o verso do ticket em caso de avaria do tacógrafo, esquecimento do cartão ou repouso fora do veículo.

---

##  Roadmap — O Futuro do Copiloto

###  Fase 2: Rede Social & Alertas Colaborativos (Próximo Passo)
-  **Perfil de Motorista:** Registo simples com nome/alcunha, país e rota habitual.
-  **Mural da Estrada:** Publicação de dicas, fotos e partilha de experiências filtradas por país e rota.
-  **Alertas Rápidos da Rota:** Avisos colaborativos em tempo real (*🅿️ Parque com vagas/lotado*, *🚧 Fila ou acidente*, *👮 Fiscalização*, *⛽ Área de serviço recomendada*).
-  **Sistema de Amizades e Chat Direto:** Conectar com colegas de estrada e trocar mensagens dentro do app.

###  Fase 3: Radar Social no Mapa em Tempo Real
-  **Mapa Interativo de Colegas:** Visualização da posição, direção e velocidade de amigos na estrada em tempo real.
-  **Modo Privacidade Instantâneo:** Interruptor rápido (*Visível na Estrada* vs. *Modo Privado/Folga*) para total controlo da localização.

---

## ⚠️ Aviso Legal

*O **Copiloto** é uma ferramenta auxiliar de organização e apoio ao motorista. **Não substitui o tacógrafo digital oficial** nem dispensa a conferência dos tempos legais diretamente no equipamento homologado do veículo.*

---

##  Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 e JavaScript puro (PWA leve, rápido e funcional offline).
- **Mapas & Geolocalização:** OpenStreetMap / Nominatim API.
- **Alojamento:** GitHub Pages.
- **Backend (Em preparação para Fase 2):** Supabase (Autenticação, Base de Dados e Realtime).
