import { describe, it, expect } from "vitest";
import timeHumanizer from "./index";

describe("timeHumanizer", () => {
  it('deve retornar "agora mesmo" para datas muito próximas', () => {
    const now = new Date();
    expect(timeHumanizer.humanize(now)).toBe("agora mesmo");
  });

  it('deve retornar "há 1 minutos atrás" para datas 60 segundos no passado', () => {
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    expect(timeHumanizer.humanize(oneMinuteAgo)).toBe("há 1 minutos atrás");
  });

  it('deve retornar "há 1 hora(s) atrás" para datas 1 hora no passado', () => {
    const oneHourAgo = new Date(Date.now() - 3600 * 1000);
    expect(timeHumanizer.humanize(oneHourAgo)).toBe("há 1 hora(s) atrás");
  });

  it('deve retornar "há 1 dia(s) atrás" para datas 1 dia no passado', () => {
    const oneDayAgo = new Date(Date.now() - 86400 * 1000);
    expect(timeHumanizer.humanize(oneDayAgo)).toBe("há 1 dia(s) atrás");
  });

  it('deve retornar "há 1 semana(s) atrás" para datas 1 semana no passado', () => {
    const oneWeekAgo = new Date(Date.now() - 604800 * 1000);
    expect(timeHumanizer.humanize(oneWeekAgo)).toBe("há 1 semana(s) atrás");
  });

  it('deve retornar "há 1 mês(es) atrás" para datas 1 mês no passado', () => {
    const oneMonthAgo = new Date(Date.now() - 2629746 * 1000);
    expect(timeHumanizer.humanize(oneMonthAgo)).toBe("há 1 mês(es) atrás");
  });

  it('deve retornar "há 1 ano(s) atrás" para datas 1 ano no passado', () => {
    const oneYearAgo = new Date(Date.now() - 31556952 * 1000);
    expect(timeHumanizer.humanize(oneYearAgo)).toBe("há 1 ano(s) atrás");
  });
});
