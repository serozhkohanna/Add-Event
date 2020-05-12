export interface EventDataInterface {
  eventTitle: string;
  eventDescription: string;
  eventDate: any;
  eventFav: boolean;
  eventUsers?: string[];
  eventDateFrom?: string;
  eventColor: string;
  eventOutdated?: boolean;
  id?: number;
  eventExpand?: boolean;
}