export interface EventDataInterface {
  eventTitle: string;
  eventDescription: string;
  eventDate: any;
  eventFav: boolean;
  eventUsers?: string[];
  eventColor: string;
  eventOutdated?: boolean;
}