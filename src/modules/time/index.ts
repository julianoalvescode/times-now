class TimeHumanizer {
  humanize(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const week = 604800;
    const month = 2629746;
    const year = 31556952;

    if (diffInSeconds < minute) {
      return "agora mesmo";
    } else if (diffInSeconds < hour) {
      return `há ${Math.floor(diffInSeconds / minute)} minutos atrás`;
    } else if (diffInSeconds < day) {
      return `há ${Math.floor(diffInSeconds / hour)} hora(s) atrás`;
    } else if (diffInSeconds < week) {
      return `há ${Math.floor(diffInSeconds / day)} dia(s) atrás`;
    } else if (diffInSeconds < month) {
      return `há ${Math.floor(diffInSeconds / week)} semana(s) atrás`;
    } else if (diffInSeconds < year) {
      return `há ${Math.floor(diffInSeconds / month)} mês(es) atrás`;
    } else {
      return `há ${Math.floor(diffInSeconds / year)} ano(s) atrás`;
    }
  }
}

const timeHumanizer = new TimeHumanizer();

export default timeHumanizer;
