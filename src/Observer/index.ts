class EventManager {
  private listeners: { eventType: string; listener: EventAlert }[];

  public subscribe(eventType: string, listener: EventAlert) {
    this.listeners.push({ eventType, listener });
  }

  public unsubscribe(eventType: string, listerner: EventAlert) {
    this.listeners.filter(
      (item) => item.listener !== listerner && item.eventType !== eventType
    );
  }

  public notify(eventType: string, data: string) {
    this.listeners
      .filter((i) => i.eventType === eventType)
      .forEach((i) => i.listener.update(data));
  }
}

interface EventAlert {
  update: (data: string) => void;
}

class LoggingListener implements EventAlert {
  private log: File;
  private message: string;

  constructor(log_filename: string, message: string) {
    this.log = new File([], log_filename);
    this.message = message;
  }

  public update(filename: string) {
    console.log(filename);
  }
}

class EmailAlertsListener implements EventAlert {
  private email: string;
  private message: string;

  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }

  public update(filename: string) {
    console.log(filename);
  }
}
