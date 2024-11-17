export const getHoursAgo = (date: string) => {
  const createdDate = new Date(date);
  const now = new Date();
  return Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60));
};
