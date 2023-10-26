export function getTimestamp(createdAt: string): string {
    const createdAtDate = new Date(createdAt);
    const now = new Date();
    const timeDifference = now.getTime() - createdAtDate.getTime();
  
    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;
  
    const getElapsed = (timeDiff: number, interval: number, unit: string) => {
      const value = Math.floor(timeDiff / interval);
      return `${value} ${value === 1 ? unit : unit + "s"} ago`;
    };
  
    if (timeDifference < minute) {
      return getElapsed(timeDifference, 1000, "second");
    } else if (timeDifference < hour) {
      return getElapsed(timeDifference, minute, "minute");
    } else if (timeDifference < day) {
      return getElapsed(timeDifference, hour, "hour");
    } else if (timeDifference < week) {
      return getElapsed(timeDifference, day, "day");
    } else if (timeDifference < month) {
      return getElapsed(timeDifference, week, "week");
    } else if (timeDifference < year) {
      return getElapsed(timeDifference, month, "month");
    } else {
      return getElapsed(timeDifference, year, "year");
    }
  };