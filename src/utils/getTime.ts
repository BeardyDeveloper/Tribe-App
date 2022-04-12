import moment from 'moment';

export const getTime = (time: string) => {
  return moment(new Date(time)).fromNow();
};
