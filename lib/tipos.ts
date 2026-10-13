// Só os tipos. Nenhum dado. Este arquivo não sabe de onde a vaga vem —
// e é por isso que ele continua valendo quando a fonte trocar de endereço.

export type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export type Empresa = {
  slug: string;
  nome: string;
  sobre: string;
  site: string;
};
export type Estado = {
  ok: boolean;
  erros: Record<string, string>;    // campo → mensagem. UMA por campo.
  valores: Record<string, string>;  // o que a pessoa digitou, para devolver preenchido
  mensagem?: string;                 // recado geral: sucesso, ou falha que não é de campo
};
export const ESTADO_INICIAL: Estado = { ok: false, erros: {}, valores: {} };

// A frente 3 precisa deste. Ele não existia porque, até ontem, a
// candidatura nunca saía do navegador de quem preencheu.
export type Candidatura = {
  id: string;
  vagaId: string;
  nome: string;
  email: string;
  habilidades: string[];
  enviadaEm: string;
};