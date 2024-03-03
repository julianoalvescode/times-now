# times-now

Uma ferramenta útil para converter timestamps (marcas de tempo) em formatos mais legíveis para humanos, tais como "agora mesmo", "há 1 minuto atrás", "há 1 hora atrás", "há 1 dia atrás", "há 1 semana atrás", "há 1 mês atrás", e "há 1 ano atrás". Essa classe é ideal para aplicações web e móveis onde você quer mostrar aos usuários quanto tempo passou desde um determinado evento.

## Funcionalidades

- Humaniza timestamps para formatos legíveis.
- Suporta a conversão para minutos, horas, dias, semanas, meses e anos.
- Fácil de integrar e usar em projetos TypeScript.

## Como Instalar

```bash
npm i times-now
```

## Como Usar

```typescript
import { timesNow } from "times-now";

const now = new Date();
console.log(timeHumanizer.humanize(now)); // agora mesmo

const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
console.log(timeHumanizer.humanize(oneMinuteAgo)); // há 1 minutos atrás

const oneHourAgo = new Date(Date.now() - 3600 * 1000);
console.log(timeHumanizer.humanize(oneHourAgo)); // há 1 hora(s) atrás

const oneDayAgo = new Date(Date.now() - 86400 * 1000);
console.log(timeHumanizer.humanize(oneDayAgo)); // há 1 dia(s) atrás

const oneWeekAgo = new Date(Date.now() - 604800 * 1000);
console.log(timeHumanizer.humanize(oneWeekAgo)); // há 1 semana(s) atrás

const oneMonthAgo = new Date(Date.now() - 2629746 * 1000);
console.log(timeHumanizer.humanize(oneMonthAgo)); // há 1 mês(es) atrás

const oneYearAgo = new Date(Date.now() - 31556952 * 1000);
console.log(timeHumanizer.humanize(oneYearAgo)); // há 1 ano(s) atrás
```
