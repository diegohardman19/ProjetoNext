import type { Vaga, Empresa } from "@/lib/tipos";
import { empresas } from "@/data/empresas";
import { vagas } from "@/dados/vagas";

export async function listarVagas(): Promise<Vaga[]> {
  return vagas;
}

// Buscar UMA vaga é buscar todas e achar. Parece desperdício e não é: as
// duas chamadas são o MESMO fetch, com a mesma URL e as mesmas opções —
// o Next junta as duas num pedido só dentro do mesmo request.
export async function buscarVaga(id: string): Promise<Vaga | undefined> {
  const vagas = await listarVagas();
  return vagas.find((vaga) => vaga.id === id);
}

export async function listarEmpresas(): Promise<Empresa[]> {
  return empresas;
}

export async function buscarEmpresa(slug: string): Promise<Empresa | undefined> {
  const empresas = await listarEmpresas();
  return empresas.find((empresa) => empresa.slug === slug);
}